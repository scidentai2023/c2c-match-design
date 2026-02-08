import StatusBadge from '@/components/common/StatusBadge'

export default function ToolHealthOverview() {
  const chambers = [
    { id: 1, name: 'Chamber 1', status: 'green', utilization: 92, etchDepth: '245.3 nm' },
    { id: 2, name: 'Chamber 2', status: 'amber', utilization: 78, etchDepth: '241.2 nm' },
    { id: 3, name: 'Chamber 3', status: 'green', utilization: 88, etchDepth: '246.1 nm' },
    { id: 4, name: 'Chamber 4', status: 'red', utilization: 45, etchDepth: '235.8 nm' },
  ]

  const issues = [
    { priority: 'high', chamber: 'Chamber 4', issue: 'Rapid depth drift detected', action: 'Requires attention' },
    { priority: 'medium', chamber: 'Chamber 2', issue: 'Wafer-to-wafer variation increasing', action: 'Monitor closely' },
  ]

  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Tool Health Overview</h1>
        <p className="text-[#a0aec0]">Real-time monitoring and risk assessment for all chambers</p>
      </div>

      {/* Overall Status Card */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Overall Tool Status</p>
          <div className="flex items-end gap-3">
            <div className="w-4 h-4 rounded-full bg-[#f59e0b]"></div>
            <span className="text-2xl font-bold text-[#f1f5f9]">AMBER</span>
          </div>
          <p className="text-xs text-[#718096] mt-2">Caution - Monitor required</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Time Since PM</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">47 Days</p>
          <p className="text-xs text-[#a0aec0] mt-2">Scheduled: Day 60</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Wafers Processed</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">2,847</p>
          <p className="text-xs text-[#a0aec0] mt-2">Since last PM</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Active Issues</p>
          <p className="text-2xl font-bold text-[#ef4444]">2</p>
          <p className="text-xs text-[#a0aec0] mt-2">Require action</p>
        </div>
      </div>

      {/* Chamber Health Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#f1f5f9] mb-4">Chamber Health Status</h2>
        <div className="grid grid-cols-2 gap-4">
          {chambers.map((chamber) => (
            <div key={chamber.id} className="surface rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#f1f5f9]">{chamber.name}</h3>
                  <p className="text-sm text-[#718096] mt-1">Depth: {chamber.etchDepth}</p>
                </div>
                <StatusBadge status={chamber.status} label={chamber.status.toUpperCase()} />
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-[#a0aec0]">Utilization</span>
                    <span className="text-xs font-semibold text-[#f1f5f9]">{chamber.utilization}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#2d3748] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]"
                      style={{ width: `${chamber.utilization}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk-Ranked Issues */}
      <div>
        <h2 className="text-xl font-semibold text-[#f1f5f9] mb-4">Risk-Ranked Issues</h2>
        <div className="space-y-3">
          {issues.map((issue, idx) => (
            <div key={idx} className="surface rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`w-3 h-3 rounded-full mt-1.5 ${
                    issue.priority === 'high' ? 'bg-[#ef4444]' : 'bg-[#f59e0b]'
                  }`}
                ></div>
                <div>
                  <p className="text-[#f1f5f9] font-medium">{issue.issue}</p>
                  <p className="text-sm text-[#718096] mt-1">{issue.chamber}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#a0aec0]">{issue.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
