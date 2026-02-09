export default function UniformityCheck() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Across-Wafer Uniformity</h1>
        <p className="text-[#a0aec0]">Center-to-edge depth and CD uniformity analysis</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Uniformity Status</p>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
            <span className="text-lg font-semibold text-[#f1f5f9]">GOOD</span>
          </div>
          <p className="text-xs text-[#a0aec0] mt-2">Within spec (±2%)</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Depth Uniformity</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">1.8%</p>
          <p className="text-xs text-[#a0aec0] mt-2">Center vs Edge variation</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">CD Uniformity</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">1.2%</p>
          <p className="text-xs text-[#a0aec0] mt-2">Center vs Edge variation</p>
        </div>
      </div>

      {/* Radial Heatmap Visualization */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Depth Radial Profile</h2>
          <div className="h-64 bg-[#0f1419] rounded-lg flex items-center justify-center relative">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                <div className="w-full h-full rounded-full border-8 border-[#10b981]/30 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-[#10b981]/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#06b6d4]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#718096] text-center mt-2">Center: 244.8nm | Edge: 240.2nm</p>
        </div>

        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Pattern Recognition</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">Uniform Center</p>
                <p className="text-xs text-[#a0aec0]">No center hotspot detected</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">Balanced Radial Profile</p>
                <p className="text-xs text-[#a0aec0]">No edge roll-off detected</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-[#f1f5f9] font-medium">Gas Distribution: Optimal</p>
                <p className="text-xs text-[#a0aec0]">No imbalance indicators</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trend Data */}
      <div className="surface rounded-xl p-6">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Uniformity Trend (Last 20 Wafers)</h2>
        <div className="h-48 bg-[#0f1419] rounded-lg flex items-center justify-center">
          <p className="text-[#718096]">📊 Uniformity trend over recent wafer processing</p>
        </div>
      </div>
    </div>
  )
}
