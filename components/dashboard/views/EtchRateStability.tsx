import StatusBadge from '@/components/common/StatusBadge'

export default function EtchRateStability() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Etch Rate Stability vs PM</h1>
        <p className="text-[#a0aec0]">Trend etch rate across wafer count since PM</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Current Etch Rate</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">4.82 Å/s</p>
          <p className="text-xs text-[#a0aec0] mt-2">Target: 4.8 ± 0.3 Å/s</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Rate Status</p>
          <StatusBadge status="green" label="Stable" />
          <p className="text-xs text-[#a0aec0] mt-3">Within spec</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Drift Since PM</p>
          <p className="text-2xl font-bold text-[#10b981]">+0.12 Å/s</p>
          <p className="text-xs text-[#a0aec0] mt-2">Rate of change</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">PM Progress</p>
          <p className="text-2xl font-bold text-[#f59e0b]">78%</p>
          <p className="text-xs text-[#a0aec0] mt-2">47 of 60 days</p>
        </div>
      </div>

      {/* Rate Stability Analysis */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Etch Rate Trend Graph</h2>
          <div className="h-64 bg-[#0f1419] rounded-lg flex items-center justify-center">
            <p className="text-[#718096]">📈 Etch rate variation over wafer count</p>
          </div>
        </div>

        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Risk Assessment</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">Drift Rate: Acceptable</p>
                <p className="text-xs text-[#a0aec0]">+0.12 Å/s over 2,847 wafers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">Projected PM Rate: Safe</p>
                <p className="text-xs text-[#a0aec0]">Est. 4.94 Å/s at Day 60</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">No Hardware Contamination</p>
                <p className="text-xs text-[#a0aec0]">Linear trend observed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Indicators */}
      <div className="surface rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Contamination Warning Signs</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg border border-[#2d3748]">
            <div>
              <p className="text-[#f1f5f9] font-medium">Rapid Drift (&gt;0.3 Å/s)</p>
              <p className="text-xs text-[#718096]">Suggests liner or showerhead wear</p>
            </div>
            <span className="text-xl">⚠️</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg border border-[#2d3748]">
            <div>
              <p className="text-[#f1f5f9] font-medium">Non-Linear Drift</p>
              <p className="text-xs text-[#718096]">Indicates sudden hardware change</p>
            </div>
            <span className="text-xl">⚠️</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg border border-[#2d3748]">
            <div>
              <p className="text-[#f1f5f9] font-medium">Rate Oscillation</p>
              <p className="text-xs text-[#718096]">May indicate RF instability</p>
            </div>
            <span className="text-xl">⚠️</span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-[#3b82f6]/5 border border-[#3b82f6]/20 rounded-xl p-6">
        <h3 className="text-[#3b82f6] font-semibold mb-3">Current Recommendation</h3>
        <p className="text-[#a0aec0]">
          Etch rate stability is excellent. Continue normal operation. Monitor for any sudden deviations. Schedule PM at
          Day 60 as planned.
        </p>
      </div>
    </div>
  )
}
