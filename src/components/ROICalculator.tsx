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
        aiCost: 997,
        monthlyCustomers: 200,
        averageSpend: 50,
        adminHours: 6,
        missedCalls: 30,
        recoveredPct: 20,
        retentionIncrease: 3,
        spendIncrease: 4,
        timeSavings: 30
      },
      plus: {
        aiCost: 2497,
        monthlyCustomers: 350,
        averageSpend: 60,
        adminHours: 10,
        missedCalls: 50,
        recoveredPct: 30,
        retentionIncrease: 5,
        spendIncrease: 8,
        timeSavings: 45
      },
      pro: {
      aiCost: 4997,
        monthlyCustomers: 600,
        averageSpend: 80,
        adminHours: 14,
        missedCalls: 80,
        recoveredPct: 40,
        retentionIncrease: 8,
        spendIncrease: 12,
        timeSavings: 60
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

    setResults({
      projectedRevenue,
      revenueGain,
      recoveredRevenue,
      savedHours,
      profitAfterAI,
      roi,
      note
    });
  };

  return (
    <div style={{ background: '#d1e8ff', color: '#1e293b', fontFamily: 'Arial, sans-serif', paddingTop: '60px', paddingBottom: '60px' }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
        `}
      </style>
      
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        maxWidth: '640px',
        margin: '0 auto 30px auto',
        padding: '0 20px'
      }}>
        <h2 style={{ 
          fontSize: '36px', 
          fontWeight: '600',
          color: '#ffffff', 
          margin: '0 0 16px 0',
          lineHeight: '1.2'
        }}>
          ROI Calculator
        </h2>
        <p style={{ 
          fontSize: '18px', 
          color: '#475569', 
          margin: '0',
          lineHeight: '1.4'
        }}>
          Calculate your potential ROI and see how AI can accelerate your growth.
        </p>
      </div>

      <div style={{ 
        maxWidth: '900px', 
        margin: '20px auto', 
        background: '#ffffff', 
        color: '#16324f', 
        padding: '30px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
        width: '90%'
      }}>
        <h1 style={{ 
          fontFamily: 'Montserrat, sans-serif', 
          fontSize: '30px', 
          margin: '0 0 10px 0', 
          color: '#16324f' 
        }}>
          Estimate Your ROI
        </h1>
        <p style={{ margin: '0 0 18px 0', color: '#34577a' }}>
          Select a plan preset or enter your own numbers, then calculate your projected monthly impact.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Plan Preset
              </label>
              <select
                value={formData.preset}
                onChange={(e) => {
                  setFormData({ ...formData, preset: e.target.value });
                  handlePresetChange(e.target.value);
                }}
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              >
                <option value="">— Choose (optional) —</option>
                <option value="core">Core (typical)</option>
                <option value="plus">Plus (typical)</option>
                <option value="pro">Pro (typical)</option>
              </select>
            </div>
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                AI Solution Cost / Month ($)
              </label>
              <input
                type="number"
                value={formData.aiCost}
                onChange={(e) => setFormData({ ...formData, aiCost: e.target.value })}
                placeholder="e.g., 997"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Current Monthly Revenue ($)
              </label>
              <input
                type="number"
                value={formData.currentRevenue}
                onChange={(e) => setFormData({ ...formData, currentRevenue: e.target.value })}
                placeholder="(optional)"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Avg Monthly Customers
              </label>
              <input
                type="number"
                value={formData.monthlyCustomers}
                onChange={(e) => setFormData({ ...formData, monthlyCustomers: e.target.value })}
                placeholder="e.g., 200"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Avg Spend per Customer ($)
              </label>
              <input
                type="number"
                value={formData.averageSpend}
                onChange={(e) => setFormData({ ...formData, averageSpend: e.target.value })}
                placeholder="e.g., 50"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Admin Hours / Week
              </label>
              <input
                type="number"
                value={formData.adminHours}
                onChange={(e) => setFormData({ ...formData, adminHours: e.target.value })}
                placeholder="e.g., 10"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Missed Calls per Month
              </label>
              <input
                type="number"
                value={formData.missedCalls}
                onChange={(e) => setFormData({ ...formData, missedCalls: e.target.value })}
                placeholder="e.g., 50"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Recovered % via Automation (%)
              </label>
              <input
                type="number"
                value={formData.recoveredPct}
                onChange={(e) => setFormData({ ...formData, recoveredPct: e.target.value })}
                placeholder="e.g., 25"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Retention Increase (%)
              </label>
              <input
                type="number"
                value={formData.retentionIncrease}
                onChange={(e) => setFormData({ ...formData, retentionIncrease: e.target.value })}
                placeholder="e.g., 5"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Revenue per Customer Increase (%)
              </label>
              <input
                type="number"
                value={formData.spendIncrease}
                onChange={(e) => setFormData({ ...formData, spendIncrease: e.target.value })}
                placeholder="e.g., 8"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label style={{ marginBottom: '6px', fontWeight: 700, color: '#16324f', display: 'block' }}>
                Time Savings from Automation (%)
              </label>
              <input
                type="number"
                value={formData.timeSavings}
                onChange={(e) => setFormData({ ...formData, timeSavings: e.target.value })}
                placeholder="e.g., 40"
                style={{
                  marginBottom: '14px',
                  padding: '10px',
                  fontSize: '16px',
                  color: '#16324f',
                  background: '#ffffff',
                  border: '1px solid #c7d6ea',
                  borderRadius: '6px',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>
            <div></div>
          </div>

          <button
            onClick={calculateROI}
            style={{
              marginTop: '4px',
              padding: '12px',
              fontSize: '16px',
              fontWeight: 700,
              background: '#28a745',
              color: '#fff',
              border: 0,
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(0.95)'}
            onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(1)'}
          >
            Calculate ROI
          </button>
          <div style={{ fontSize: '12px', color: '#5e84a7', marginTop: '8px' }}>
            Tip: If "Current Revenue" is blank, baseline = customers × average spend.
          </div>
        </div>

        {results && (
          <div style={{
            marginTop: '18px',
            padding: '16px',
            borderRadius: '10px',
            background: '#16324f',
            color: '#fff'
          }}>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#fff' }}>
              ROI Calculator Results
            </h2>
            <p style={{ margin: '6px 0', color: '#e1ecff' }}>
              <strong>Projected Monthly Revenue:</strong> {isFinite(results.projectedRevenue) ? money(results.projectedRevenue) : '—'}
            </p>
            <p style={{ margin: '6px 0', color: '#e1ecff' }}>
              <strong>Revenue Gain vs. Current:</strong> {isFinite(results.revenueGain) ? money(results.revenueGain) : '—'}
            </p>
            <p style={{ margin: '6px 0', color: '#e1ecff' }}>
              <strong>Recovered Revenue from Missed Calls:</strong> {isFinite(results.recoveredRevenue) ? money(results.recoveredRevenue) : '—'}
            </p>
            <p style={{ margin: '6px 0', color: '#e1ecff' }}>
              <strong>Admin Hours Saved (Weekly):</strong> {isFinite(results.savedHours) ? results.savedHours.toFixed(1) + ' hrs' : '—'}
            </p>
            <p style={{ margin: '6px 0', color: '#e1ecff' }}>
              <strong>Profit After AI Cost:</strong> {isFinite(results.profitAfterAI) ? money(results.profitAfterAI) : '—'}
            </p>
            <p style={{ margin: '6px 0', color: '#e1ecff' }}>
              <strong>ROI %:</strong> {isFinite(results.roi) ? (results.roi > 999 ? '999%+' : pct(results.roi)) : '—'}
            </p>
            <p style={{ fontSize: '12px', color: '#cfe0ff' }}>
              {results.note}
            </p>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <style>
          {`
            .roi-wave-button {
              font-size: 16px;
              font-weight: 400;
              letter-spacing: 2px;
              padding: 15px 30px;
              text-align: center;
              color: #ffffff;
              background-color: #007bff;
              border: none;
              border-radius: 15px;
              position: relative;
              overflow: hidden;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            .roi-wave-button:hover {
              background-color: #0056b3;
            }
            .roi-wave-button span {
              position: relative;
              z-index: 1;
            }
            .roi-wave-button .wave {
              position: absolute;
              top: -100px;
              left: 0;
              width: 100%;
              height: 250px;
              background: linear-gradient(45deg, #4f00bc, #29abe2);
              transition: 0.5s ease;
            }
            .roi-wave-button .wave::after,
            .roi-wave-button .wave::before {
              content: '';
              position: absolute;
              width: 200%;
              height: 200%;
              top: -10px;
              left: 50%;
              transform: translate(-50%, -75%);
              transition: 0.5s ease;
            }
            .roi-wave-button .wave::before {
              border-radius: 40%;
              background: rgba(1, 1, 1, 0.5);
              animation: roiWave 7s linear infinite;
            }
            .roi-wave-button .wave::after {
              border-radius: 45%;
              background: transparent;
              animation: roiWave 12s linear infinite;
            }
            @keyframes roiWave {
              0% { transform: translate(-50%, -75%) rotate(0deg); }
              100% { transform: translate(-50%, -75%) rotate(360deg); }
            }
          `}
        </style>
        <a 
          href="https://audit.heartbeatofsouthbay.com/" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button className="roi-wave-button">
            <span>Start My Assessment</span>
            <div className="wave"></div>
          </button>
        </a>
        <p className="mt-6 text-sm text-slate-500">
          Complimentary. Get your fastest first win.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;