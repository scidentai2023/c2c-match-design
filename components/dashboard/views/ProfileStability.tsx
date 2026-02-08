import StatusBadge from '@/components/common/StatusBadge'

export default function ProfileStability() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Profile Stability</h1>
        <p className="text-[#a0aec0]">Track sidewall angle and profile drift consistency since PM</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Profile Status</p>
          <StatusBadge status="green" label="Stable" />
          <p className="text-xs text-[#a0aec0] mt-3">Consistency: Excellent</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Avg Sidewall Angle</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">88.2°</p>
          <p className="text-xs text-[#a0aec0] mt-2">Target: 88 ± 1°</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Profile Drift Rate</p>
          <p className="text-2xl font-bold text-[#10b981]">0.02°/day</p>
          <p className="text-xs text-[#a0aec0] mt-2">Acceptable range</p>
        </div>
      </div>

      {/* Profile Characteristics */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Current Profile Measurements</h2>
          <div className="space-y-3">
            <div>
              <p className="text-[#a0aec0] text-sm">Sidewall Angle</p>
              <p className="text-[#f1f5f9] font-semibold">88.1°</p>
            </div>
            <div>
              <p className="text-[#a0aec0] text-sm">Bowing Detection</p>
              <p className="text-[#10b981] font-semibold">None detected</p>
            </div>
            <div>
              <p className="text-[#a0aec0] text-sm">Taper Variation</p>
              <p className="text-[#f1f5f9] font-semibold">+0.15° (minimal)</p>
            </div>
            <div>
              <p className="text-[#a0aec0] text-sm">Profile Symmetry</p>
              <p className="text-[#f1f5f9] font-semibold">98.5% balanced</p>
            </div>
          </div>
        </div>

        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Profile Drift Analysis</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[#a0aec0] text-sm">Drift since PM (47 days)</span>
                <span className="text-[#f1f5f9] font-semibold">0.94°</span>
              </div>
              <div className="w-full h-2 bg-[#2d3748] rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-[#10b981]"></div>
              </div>
              <p className="text-xs text-[#718096] mt-1">Threshold: 5° total drift</p>
            </div>
            <div className="mt-4">
              <p className="text-xs text-[#a0aec0] mb-2">Projection at Day 60 PM:</p>
              <p className="text-[#f1f5f9] font-semibold">1.2° total (within spec)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="surface rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Profile Consistency Key Principle</h2>
        <div className="bg-[#0f1419] rounded-lg p-4 border-l-4 border-[#3b82f6]">
          <p className="text-[#f1f5f9] font-medium mb-2">Why Profile Consistency Matters</p>
          <p className="text-[#a0aec0] text-sm">
            Consistency is more valuable than perfection. A profile that drifts slowly and predictably allows process
            compensation. Sudden profile changes or instability indicate hardware issues requiring intervention.
          </p>
        </div>
      </div>

      {/* Wafer Count vs Profile */}
      <div className="surface rounded-xl p-6">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Profile vs Wafer Count Since PM</h2>
        <div className="h-48 bg-[#0f1419] rounded-lg flex items-center justify-center">
          <p className="text-[#718096]">📊 Sidewall angle correlation with wafer processing count</p>
        </div>
      </div>
    </div>
  )
}
