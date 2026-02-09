import StatusBadge from '@/components/common/StatusBadge'

export default function WaferConsistency() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Wafer-to-Wafer Consistency</h1>
        <p className="text-[#a0aec0]">Compare first vs last wafer, detect sudden CD and depth jumps</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">First Wafer (Lot Start)</h2>
          <div className="space-y-3">
            <div>
              <p className="text-[#718096] text-sm mb-1">Depth</p>
              <p className="text-xl font-bold text-[#10b981]">244.8 nm</p>
            </div>
            <div>
              <p className="text-[#718096] text-sm mb-1">CD (100nm target)</p>
              <p className="text-xl font-bold text-[#10b981]">99.2 nm</p>
            </div>
            <div>
              <p className="text-[#718096] text-sm mb-1">Profile Angle</p>
              <p className="text-xl font-bold text-[#10b981]">88.5°</p>
            </div>
          </div>
        </div>

        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Last Wafer (Lot End)</h2>
          <div className="space-y-3">
            <div>
              <p className="text-[#718096] text-sm mb-1">Depth</p>
              <p className="text-xl font-bold text-[#f59e0b]">245.2 nm</p>
              <p className="text-xs text-[#f59e0b]">+0.4 nm (within range)</p>
            </div>
            <div>
              <p className="text-[#718096] text-sm mb-1">CD (100nm target)</p>
              <p className="text-xl font-bold text-[#f59e0b]">99.8 nm</p>
              <p className="text-xs text-[#f59e0b]">+0.6 nm (drift)</p>
            </div>
            <div>
              <p className="text-[#718096] text-sm mb-1">Profile Angle</p>
              <p className="text-xl font-bold text-[#10b981]">88.3°</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnostic Hints */}
      <div className="surface rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Diagnostic Assessment</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
            <span className="text-lg">✓</span>
            <div>
              <p className="text-[#f1f5f9] font-medium">Depth Drift Within Lot: Normal</p>
              <p className="text-sm text-[#a0aec0]">+0.4 nm is within expected process drift</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f59e0b]/5 border border-[#f59e0b]/20">
            <span className="text-lg">⚠️</span>
            <div>
              <p className="text-[#f1f5f9] font-medium">CD Drift Detected: Monitor</p>
              <p className="text-sm text-[#a0aec0]">+0.6 nm CD growth suggests potential ESC/RF drift</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-[#06b6d4]/5 border border-[#06b6d4]/20 rounded-xl p-6">
        <h3 className="text-[#06b6d4] font-semibold mb-2">Recommendation</h3>
        <p className="text-[#a0aec0]">
          Continue monitoring CD drift in next lot. If CD continues to increase beyond 100.2 nm, check electrode surface condition and RF coupling.
        </p>
      </div>
    </div>
  )
}
