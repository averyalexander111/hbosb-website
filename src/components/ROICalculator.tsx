import React, { useState } from 'react';

const DEFAULT_MONTHLY_MANAGEMENT = '1497';
const DEFAULT_ONE_TIME_IMPLEMENTATION = '997';

const DISCLAIMER =
  'This calculator is an estimation tool. Results are based entirely on the assumptions you enter and are not a forecast, guarantee, or promise of business performance.';

const ROICalculator = () => {
  const [results, setResults] = useState<any>(null);
  const [formData, setFormData] = useState({
    monthlyManagementCost: DEFAULT_MONTHLY_MANAGEMENT,
    oneTimeImplementationCost: DEFAULT_ONE_TIME_IMPLEMENTATION,
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

  const calculateScenario = () => {
    const currentRevenueInput = val(formData.currentRevenue);
    const monthlyCustomers = val(formData.monthlyCustomers);
    const averageSpend = val(formData.averageSpend);
    const baselineRevenue = currentRevenueInput > 0 ? currentRevenueInput : (monthlyCustomers * averageSpend);

    const monthlyManagementCost = val(formData.monthlyManagementCost);
    const oneTimeImplementationCost = val(formData.oneTimeImplementationCost);

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

    const modeledRevenue = baselineRevenue + retentionLift + spendLift + recoveredRevenue;
    const additionalRevenue = modeledRevenue - baselineRevenue;
    const additionalAfterManagementFee = additionalRevenue - monthlyManagementCost;

    const assumedBaseline = currentRevenueInput > 0
      ? 'Baseline uses the current monthly revenue you entered.'
      : 'Baseline = monthly customers × average spend.';
    const note = `${assumedBaseline} Modeled recovered revenue = missed calls × average spend × your assumed recovered %. Every figure above comes from the assumptions you entered.`;

    setResults({
      modeledRevenue,
      additionalRevenue,
      recoveredRevenue,
      savedHours,
      monthlyManagementCost,
      oneTimeImplementationCost,
      additionalAfterManagementFee,
      note
    });
  };

  const inputClasses = "w-full mb-3 px-3 py-2.5 text-base text-navy-foreground/90 bg-white/10 border border-white/20 rounded-md outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors placeholder:text-navy-foreground/30";
  const labelClasses = "block mb-1.5 font-bold text-navy-foreground/85 text-sm";

  return (
    <section className="bg-background px-4 py-10 md:pt-10 md:pb-14">
      <div className="bg-navy border border-navy-foreground/10 rounded-xl max-w-[900px] mx-auto text-navy-foreground/85 p-5 sm:p-6 md:p-8 w-full">
        <h2 className="font-display text-2xl sm:text-[30px] font-semibold mb-2 text-navy-foreground">
          Model a Potential Monthly Scenario Using Your Own Assumptions
        </h2>
        <p className="mb-4 text-sm sm:text-base text-navy-foreground/50">
          Enter your own numbers to model a monthly scenario. Nothing is pre-filled except the current published system costs.
        </p>

        <div className="mb-6 rounded-lg border border-primary/25 bg-primary/[0.06] p-4">
          <p className="text-xs sm:text-sm text-navy-foreground/70 leading-relaxed">{DISCLAIMER}</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-navy-foreground/45">
            System costs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses} htmlFor="roi-monthly-cost">Monthly System Management ($ / month)</label>
              <input
                id="roi-monthly-cost"
                type="number"
                value={formData.monthlyManagementCost}
                onChange={(e) => setFormData({ ...formData, monthlyManagementCost: e.target.value })}
                placeholder="1497"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses} htmlFor="roi-onetime-cost">One-Time Implementation ($, separate)</label>
              <input
                id="roi-onetime-cost"
                type="number"
                value={formData.oneTimeImplementationCost}
                onChange={(e) => setFormData({ ...formData, oneTimeImplementationCost: e.target.value })}
                placeholder="997"
                className={inputClasses}
              />
            </div>
          </div>
          <p className="mb-5 text-xs text-navy-foreground/40">
            The one-time implementation cost is shown separately and is not included in the monthly figures below.
          </p>

          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-navy-foreground/45">
            Your business inputs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses} htmlFor="roi-current-revenue">Current Monthly Revenue ($)</label>
              <input
                id="roi-current-revenue"
                type="number"
                value={formData.currentRevenue}
                onChange={(e) => setFormData({ ...formData, currentRevenue: e.target.value })}
                placeholder="(optional)"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses} htmlFor="roi-customers">Average Monthly Customers</label>
              <input
                id="roi-customers"
                type="number"
                value={formData.monthlyCustomers}
                onChange={(e) => setFormData({ ...formData, monthlyCustomers: e.target.value })}
                placeholder="Your number"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses} htmlFor="roi-spend">Average Spend per Customer ($)</label>
              <input
                id="roi-spend"
                type="number"
                value={formData.averageSpend}
                onChange={(e) => setFormData({ ...formData, averageSpend: e.target.value })}
                placeholder="Your number"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses} htmlFor="roi-admin-hours">Admin Hours per Week</label>
              <input
                id="roi-admin-hours"
                type="number"
                value={formData.adminHours}
                onChange={(e) => setFormData({ ...formData, adminHours: e.target.value })}
                placeholder="Your number"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses} htmlFor="roi-missed-calls">Missed Calls per Month</label>
              <input
                id="roi-missed-calls"
                type="number"
                value={formData.missedCalls}
                onChange={(e) => setFormData({ ...formData, missedCalls: e.target.value })}
                placeholder="Your number"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses} htmlFor="roi-recovered">Assumed recovered missed-call % (your assumption)</label>
              <input
                id="roi-recovered"
                type="number"
                value={formData.recoveredPct}
                onChange={(e) => setFormData({ ...formData, recoveredPct: e.target.value })}
                placeholder="Your assumption"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses} htmlFor="roi-retention">Assumed retention increase % (your assumption)</label>
              <input
                id="roi-retention"
                type="number"
                value={formData.retentionIncrease}
                onChange={(e) => setFormData({ ...formData, retentionIncrease: e.target.value })}
                placeholder="Your assumption"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses} htmlFor="roi-spend-increase">Assumed revenue-per-customer increase % (your assumption)</label>
              <input
                id="roi-spend-increase"
                type="number"
                value={formData.spendIncrease}
                onChange={(e) => setFormData({ ...formData, spendIncrease: e.target.value })}
                placeholder="Your assumption"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <label className={labelClasses} htmlFor="roi-time-savings">Assumed time savings % (your assumption)</label>
              <input
                id="roi-time-savings"
                type="number"
                value={formData.timeSavings}
                onChange={(e) => setFormData({ ...formData, timeSavings: e.target.value })}
                placeholder="Your assumption"
                className={inputClasses}
              />
            </div>
            <div></div>
          </div>

          <button
            onClick={calculateScenario}
            className="mt-2 px-6 py-3 text-base font-bold bg-primary text-primary-foreground rounded-lg cursor-pointer hover:brightness-95 active:scale-[0.98] transition-all"
          >
            Model This Scenario
          </button>
          <p className="text-xs text-navy-foreground/40 mt-2">
            If "Current Monthly Revenue" is blank, baseline = monthly customers × average spend.
          </p>
        </div>

        {results && (
          <div className="mt-5 p-4 sm:p-5 rounded-xl bg-navy-light text-navy-foreground">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-navy-foreground">
              Your Modeled Scenario
            </h3>
            <div className="space-y-1.5 text-sm sm:text-base">
              <p><strong>Modeled monthly revenue:</strong> {isFinite(results.modeledRevenue) ? money(results.modeledRevenue) : '—'}</p>
              <p><strong>Modeled additional monthly revenue:</strong> {isFinite(results.additionalRevenue) ? money(results.additionalRevenue) : '—'}</p>
              <p><strong>Modeled recovered revenue from missed calls:</strong> {isFinite(results.recoveredRevenue) ? money(results.recoveredRevenue) : '—'}</p>
              <p><strong>Modeled weekly admin hours potentially saved:</strong> {isFinite(results.savedHours) ? results.savedHours.toFixed(1) + ' hrs' : '—'}</p>
              <p><strong>Monthly system management fee:</strong> {isFinite(results.monthlyManagementCost) ? money(results.monthlyManagementCost) : '—'}</p>
              <p><strong>One-time implementation cost (separate):</strong> {isFinite(results.oneTimeImplementationCost) ? money(results.oneTimeImplementationCost) : '—'}</p>
              <p>
                <strong>Modeled additional monthly revenue after monthly management fee (not profit):</strong>{' '}
                {isFinite(results.additionalAfterManagementFee) ? money(results.additionalAfterManagementFee) : '—'}
              </p>
            </div>
            <p className="text-xs text-navy-foreground/50 mt-3">{results.note}</p>
            <p className="text-xs text-navy-foreground/50 mt-2">
              These figures are revenue estimates, not profit. They exclude your cost of delivering the work, third-party software and usage charges, taxes, and any other business expense. {DISCLAIMER}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ROICalculator;
