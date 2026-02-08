import StatusBadge from '@/components/common/StatusBadge'

export default function ChamberMatching() {
  const chamberComparison = [
    { name: 'Chamber 1', depth: 245.2, cd: 99.1, score: 94, trend: '↑' },
    { name: 'Chamber 2', depth: 242.8, cd: 100.3, score: 72, trend: '↓' },
    { name: 'Chamber 3', depth: 246.1, cd: 98.8, score: 96, trend: '↑' },
    { name: 'Chamber 4', depth: 238.5, cd: 102.1, score: 42, trend: '↓' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Chamber-to-Chamber Matching</h1>
        <p className="text-[#a0aec0]">Side-by-side comparison with same recipe and wafer type</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Reference Chamber</p>
          <p className="text-[#f1f5f9] font-semibold">Chamber 3</p>
          <StatusBadge status="green" label="Gold Standard" />
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Best Match</p>
          <p className="text-[#f1f5f9] font-semibold">Chamber 1</p>
          <p className="text-xs text-[#a0aec0] mt-2">96% score</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Outlier Detected</p>
          <p className="text-[#f1f5f9] font-semibold">Chamber 4</p>
          <p className="text-xs text-[#ef4444] mt-2">42% score</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Average Match</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">76%</p>
        </div>
      </div>

      {/* Chamber Comparison Table */}
      <div className="surface rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Chamber Performance Scorecard</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2d3748]">
                <th className="text-left py-3 px-4 text-[#a0aec0] font-medium">Chamber</th>
                <th className="text-left py-3 px-4 text-[#a0aec0] font-medium">Depth (nm)</th>
                <th className="text-left py-3 px-4 text-[#a0aec0] font-medium">CD (nm)</th>
                <th className="text-left py-3 px-4 text-[#a0aec0] font-medium">Match Score</th>
                <th className="text-left py-3 px-4 text-[#a0aec0] font-medium">Trend</th>
                <th className="text-left py-3 px-4 text-[#a0aec0] font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {chamberComparison.map((chamber, idx) => (
                <tr key={idx} className="border-b border-[#2d3748] hover:bg-[#2d3748] transition-colors">
                  <td className="py-3 px-4 text-[#f1f5f9] font-medium">{chamber.name}</td>
                  <td className="py-3 px-4 text-[#f1f5f9]">{chamber.depth}</td>
                  <td className="py-3 px-4 text-[#f1f5f9]">{chamber.cd}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-[#2d3748] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            chamber.score >= 90
                              ? 'bg-[#10b981]'
                              : chamber.score >= 70
                              ? 'bg-[#f59e0b]'
                              : 'bg-[#ef4444]'
                          }`}
                          style={{ width: `${chamber.score}%` }}
                        ></div>
                      </div>
                      <span className="text-[#f1f5f9] font-semibold">{chamber.score}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`${chamber.trend === '↑' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                      {chamber.trend}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <StatusBadge
                      status={
                        chamber.score >= 90 ? 'green' : chamber.score >= 70 ? 'amber' : 'red'
                      }
                      label={chamber.score >= 90 ? 'Optimal' : chamber.score >= 70 ? 'Drifting' : 'Problem'}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Historical Mismatch Trend */}
      <div className="surface rounded-xl p-6">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Historical Mismatch Trend</h2>
        <div className="h-48 bg-[#0f1419] rounded-lg flex items-center justify-center">
          <p className="text-[#718096]">📈 Chamber matching score trend over time</p>
        </div>
      </div>
    </div>
  )
}
