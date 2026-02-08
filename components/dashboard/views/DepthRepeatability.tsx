import StatusBadge from '@/components/common/StatusBadge'

export default function DepthRepeatability() {
  const depthData = [
    { run: 1, depth: 244.2, stdDev: 0.3 },
    { run: 2, depth: 245.8, stdDev: 0.4 },
    { run: 3, depth: 243.5, stdDev: 0.5 },
    { run: 4, depth: 246.1, stdDev: 0.6 },
    { run: 5, depth: 245.3, stdDev: 0.4 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Etch Depth Repeatability</h1>
        <p className="text-[#a0aec0]">Track depth stability across run-to-run and wafer-to-wafer variations</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Status</p>
          <StatusBadge status="amber" label="Drifting" />
          <p className="text-xs text-[#a0aec0] mt-3">Trend: Increasing variation</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Average Depth</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">245.0 nm</p>
          <p className="text-xs text-[#a0aec0] mt-2">Target: 245 ± 2 nm</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Std Deviation</p>
          <p className="text-2xl font-bold text-[#f59e0b]">0.44 nm</p>
          <p className="text-xs text-[#a0aec0] mt-2">Threshold: 0.5 nm</p>
        </div>
      </div>

      {/* Depth Trend Chart Placeholder */}
      <div className="surface rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Depth Trend (Last 10 Runs)</h2>
        <div className="h-64 bg-[#0f1419] rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#718096] mb-2">📈 Depth variation trend chart</p>
            <p className="text-xs text-[#718096]">Visual representation of depth stability over runs</p>
          </div>
        </div>
      </div>

      {/* Run Details */}
      <div>
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Recent Runs Analysis</h2>
        <div className="space-y-2">
          {depthData.map((data, idx) => (
            <div key={idx} className="surface rounded-lg p-4 flex items-center justify-between">
              <div className="flex-1">
                <p className="text-[#f1f5f9] font-medium">Run {data.run}</p>
                <p className="text-sm text-[#718096]">Depth: {data.depth} nm | Std Dev: {data.stdDev}</p>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-medium">
                  {data.depth > 245.5 ? 'High' : data.depth < 244 ? 'Low' : 'Target'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
