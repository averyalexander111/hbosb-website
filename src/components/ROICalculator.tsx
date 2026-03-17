import React, { useState } from 'react';

const ROICalculator = () => {
  const [results, setResults] = useState<any>(null);
  const [formData, setFormData] = useState({
    preset: '',
    aiCost: '',
    currentRevenue: '',
    monthlyCustomers: '',
    averageSpend: '',
    adminHours: '',
    missedCalls: '',
    recoveredPct: '',
    retentionIncrease: '',
    spendIncrease: '',
    timeSavings: ''
  });

  const val = (value: string) => {
    const n = parseFloat((value || '').replace(/,/g, ''));
    return isNaN(n) ? 0 : n;
  };

  const money = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const pct = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 1 }) + '%';

  const handlePresetChange = (preset: string) => {
    if (!preset) return;

    const presets: any = {
      core: {
        aiCost: 997, monthlyCustomers: 200, averageSpend: 50, adminHours: 6,
        missedCalls: 30, recoveredPct: 20, retentionIncrease: 3, spendIncrease: 4, timeSavings: 30
      },
      plus: {
        aiCost: 2497, monthlyCustomers: 350, averageSpend: 60, adminHours: 10,
        missedCalls: 50, recoveredPct: 30, retentionIncrease: 5, spendIncrease: 8, timeSavings: 45
      },
      pro: {
        aiCost: 4997, monthlyCustomers: 600, averageSpend: 80, adminHours: 14,
        missedCalls: 80, recoveredPct: 40, retentionIncrease: 8, spendIncrease: 12, timeSavings: 60
      }
    };

    const d = presets[preset];
    setFormData({
      ...formData,
      preset,
      aiCost: d.aiCost.toString(),
      monthlyCustomers: d.monthlyCustomers.toString(),
      averageSpend: d.averageSpend.toString(),
      adminHours: d.adminHours.toString(),
      missedCalls: d.missedCalls.toString(),
      recoveredPct: d.recoveredPct.toString(),
      retentionIncrease: d.retentionIncrease.toString(),
      spendIncrease: d.spendIncrease.toString(),
      timeSavings: d.timeSavings.toString(),
      currentRevenue: ''
    });
  };

  const calculateROI = () => {
    const currentRevenueInput = val(formData.currentRevenue);
    const monthlyCustomers = val(formData.monthlyCustomers);
    const averageSpend = val(formData.averageSpend);
    const baselineRevenue = currentRevenueInput > 0 ? currentRevenueInput : (monthlyCustomers * averageSpend);

    const aiCost = val(formData.aiCost);
    const missedCalls = val(formData.missedCalls);
    const recoveredPct = val(formData.recoveredPct) / 100;
    const retentionIncrease = val(formData.retentionIncrease) / 100;
    const spendIncrease = val(formData.spendIncrease) / 100;
    const adminHours = val(formData.adminHours);
    const timeSavings = val(formData.timeSavings) / 100;
    const savedHours = adminHours * timeSavings;

    const retentionLift = baselineRevenue * retentionIncrease;
    const spendLift = baselineRevenue * spendIncrease;
    const recoveredRevenue = missedCalls * averageSpend * recoveredPct;

    const projectedRevenue = baselineRevenue + retentionLift + spendLift + recoveredRevenue;
    const revenueGain = projectedRevenue - baselineRevenue;
    const profitAfterAI = revenueGain - aiCost;
    const roi = aiCost > 0 ? (profitAfterAI / aiCost) * 100 : (revenueGain > 0 ? 999 : 0);

    const assumedBaseline = currentRevenueInput > 0 ? 'Using your current revenue.' : 'Baseline = customers × average spend.';
    const note = `${assumedBaseline} Recovered revenue = missed calls × avg spend × recovered %.`;

    setResults({ projectedRevenue, revenueGain, recoveredRevenue, savedHours, profitAfterAI, roi, note });
  };

  const inputClasses = "w-full mb-3 px-3 py-2.5 text-base text-navy-foreground/90 bg-white/10 border border-white/20 rounded-md outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-navy-foreground/30";
  const labelClasses = "block mb-1.5 font-bold text-navy-foreground/85 text-sm";

  return (
    <section className="bg-background px-4 py-10 md:pt-10 md:pb-14">
      <div className="bg-navy border border-navy-foreground/10 rounded-xl max-w-[900px] mx-auto text-navy-foreground/85 p-5 sm:p-6 md:p-8 w-full">
        <h2 className="font-display text-2xl sm:text-[30px] font-semibold mb-2 text-navy-foreground">
          Estimate Your ROI
        </h2>
        <p className="mb-5 text-sm sm:text-base text-navy-foreground/50">
          Select a plan preset or enter your own numbers, then calculate your projected monthly impact.
        </p>

        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses}>Plan Preset</label>
              <select
                value={formData.preset}
                onChange={(e) => {
                  setFormData({ ...formData, preset: e.target.value });
                  handlePresetChange(e.target.value);
                }}
                className={inputClasses}
              >
                <option value="">— Choose (optional) —</option>
                <option value="core">Core (typical)</option>
                <option value="plus">Plus (typical)</option>
                <option value="pro">Pro (typical)</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>AI Solution Cost / Month ($)</label>
              <input
                type="number"
                value={formData.aiCost}
                onChange={(e) => setFormData({ ...formData, aiCost: e.target.value })}
                placeholder="e.g., 997"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses}>Current Monthly Revenue ($)</label>
              <input
                type="number"
                value={formData.currentRevenue}
                onChange={(e) => setFormData({ ...formData, currentRevenue: e.target.value })}
                placeholder="(optional)"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Avg Monthly Customers</label>
              <input
                type="number"
                value={formData.monthlyCustomers}
                onChange={(e) => setFormData({ ...formData, monthlyCustomers: e.target.value })}
                placeholder="e.g., 200"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses}>Avg Spend per Customer ($)</label>
              <input
                type="number"
                value={formData.averageSpend}
                onChange={(e) => setFormData({ ...formData, averageSpend: e.target.value })}
                placeholder="e.g., 50"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Admin Hours / Week</label>
              <input
                type="number"
                value={formData.adminHours}
                onChange={(e) => setFormData({ ...formData, adminHours: e.target.value })}
                placeholder="e.g., 10"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses}>Missed Calls per Month</label>
              <input
                type="number"
                value={formData.missedCalls}
                onChange={(e) => setFormData({ ...formData, missedCalls: e.target.value })}
                placeholder="e.g., 50"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Recovered % via Automation (%)</label>
              <input
                type="number"
                value={formData.recoveredPct}
                onChange={(e) => setFormData({ ...formData, recoveredPct: e.target.value })}
                placeholder="e.g., 25"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses}>Retention Increase (%)</label>
              <input
                type="number"
                value={formData.retentionIncrease}
                onChange={(e) => setFormData({ ...formData, retentionIncrease: e.target.value })}
                placeholder="e.g., 5"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Revenue per Customer Increase (%)</label>
              <input
                type="number"
                value={formData.spendIncrease}
                onChange={(e) => setFormData({ ...formData, spendIncrease: e.target.value })}
                placeholder="e.g., 8"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses}>Time Savings from Automation (%)</label>
              <input
                type="number"
                value={formData.timeSavings}
                onChange={(e) => setFormData({ ...formData, timeSavings: e.target.value })}
                placeholder="e.g., 40"
                className={inputClasses}
              />
            </div>
            <div></div>
          </div>

          <button
            onClick={calculateROI}
            className="mt-2 px-6 py-3 text-base font-bold bg-primary text-primary-foreground rounded-lg cursor-pointer hover:brightness-95 active:scale-[0.98] transition-all"
          >
            Calculate ROI
          </button>
          <p className="text-xs text-navy-foreground/40 mt-2">
            Tip: If "Current Revenue" is blank, baseline = customers × average spend.
          </p>
        </div>

        {results && (
          <div className="mt-5 p-4 sm:p-5 rounded-xl bg-navy-light text-navy-foreground">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-navy-foreground">
              ROI Calculator Results
            </h3>
            <div className="space-y-1.5 text-sm sm:text-base">
              <p><strong>Projected Monthly Revenue:</strong> {isFinite(results.projectedRevenue) ? money(results.projectedRevenue) : '—'}</p>
              <p><strong>Revenue Gain vs. Current:</strong> {isFinite(results.revenueGain) ? money(results.revenueGain) : '—'}</p>
              <p><strong>Recovered Revenue from Missed Calls:</strong> {isFinite(results.recoveredRevenue) ? money(results.recoveredRevenue) : '—'}</p>
              <p><strong>Admin Hours Saved (Weekly):</strong> {isFinite(results.savedHours) ? results.savedHours.toFixed(1) + ' hrs' : '—'}</p>
              <p><strong>Profit After AI Cost:</strong> {isFinite(results.profitAfterAI) ? money(results.profitAfterAI) : '—'}</p>
              <p><strong>ROI %:</strong> {isFinite(results.roi) ? (results.roi > 999 ? '999%+' : pct(results.roi)) : '—'}</p>
            </div>
            <p className="text-xs text-navy-foreground/50 mt-3">{results.note}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ROICalculator;
