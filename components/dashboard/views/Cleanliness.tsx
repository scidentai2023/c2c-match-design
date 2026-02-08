import StatusBadge from '@/components/common/StatusBadge'

export default function Cleanliness() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Bottom Cleanliness (Gross Check)</h1>
        <p className="text-[#a0aec0]">Surface-level validation and residue monitoring</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Overall Status</p>
          <StatusBadge status="green" label="Clean" />
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Polymer Buildup</p>
          <p className="text-xl font-bold text-[#10b981]">Normal</p>
          <p className="text-xs text-[#a0aec0] mt-1">Minimal presence</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Micro-masking</p>
          <p className="text-xl font-bold text-[#10b981]">None</p>
          <p className="text-xs text-[#a0aec0] mt-1">Not detected</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Residue Trend</p>
          <p className="text-xl font-bold text-[#10b981]">Stable</p>
          <p className="text-xs text-[#a0aec0] mt-1">Last 5 wafers</p>
        </div>
      </div>

      {/* Cleanliness Details */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Cleanliness Metrics</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[#0f1419] rounded-lg">
              <span className="text-[#a0aec0]">Particle Count</span>
              <span className="text-[#f1f5f9] font-semibold">2-3 μm</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0f1419] rounded-lg">
              <span className="text-[#a0aec0]">Surface Coverage</span>
              <span className="text-[#f1f5f9] font-semibold">&lt;2%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0f1419] rounded-lg">
              <span className="text-[#a0aec0]">Contamination Score</span>
              <span className="text-[#f1f5f9] font-semibold">92/100</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0f1419] rounded-lg">
              <span className="text-[#a0aec0]">Last Cleaning Event</span>
              <span className="text-[#f1f5f9] font-semibold">2 days ago</span>
            </div>
          </div>
        </div>

        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Potential Triggers</h2>
          <div className="space-y-2">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">Exhaust System: Normal</p>
                <p className="text-xs text-[#a0aec0]">Adequate evacuation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">RF Power: Stable</p>
                <p className="text-xs text-[#a0aec0]">No arcing detected</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">Seasoning Recipe: Current</p>
                <p className="text-xs text-[#a0aec0]">No degradation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Residue Trend Chart */}
      <div className="surface rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Residue Trend (Last 15 Wafers)</h2>
        <div className="h-48 bg-[#0f1419] rounded-lg flex items-center justify-center">
          <p className="text-[#718096]">📉 Residue buildup trend over processing</p>
        </div>
      </div>

      {/* Warning Indicators */}
      <div className="bg-[#06b6d4]/5 border border-[#06b6d4]/20 rounded-xl p-6">
        <h3 className="text-[#06b6d4] font-semibold mb-3">When to Alert</h3>
        <ul className="space-y-2 text-sm text-[#a0aec0]">
          <li>• Sudden residue appearance without process recipe change</li>
          <li>• Particle count exceeding 5-10 μm range</li>
          <li>• Surface coverage rising above 5%</li>
          <li>• Micro-masking detected on product wafers</li>
        </ul>
      </div>
    </div>
  )
}
