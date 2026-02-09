'use client'

export default function ToolHealthOverview() {
  const toolHealth = [
    { name: 'Chamber A', health: 95, status: 'optimal', lastPM: '2d ago' },
    { name: 'Chamber B', health: 87, status: 'good', lastPM: '5d ago' },
    { name: 'Chamber C', health: 72, status: 'fair', lastPM: '12d ago' },
    { name: 'Chamber D', health: 58, status: 'caution', lastPM: '18d ago' },
  ]

  const issues = [
    { id: 1, title: 'Depth drift detected', severity: 'high', chamber: 'C', time: '3m ago' },
    { id: 2, title: 'CD uniformity trending', severity: 'medium', chamber: 'B', time: '12m ago' },
    { id: 3, title: 'Cleanliness check due', severity: 'low', chamber: 'D', time: '2h ago' },
  ]

  const getHealthColor = (health) => {
    if (health >= 90) return 'from-[#10b981] to-[#059669]'
    if (health >= 80) return 'from-[#f59e0b] to-[#d97706]'
    if (health >= 70) return 'from-[#f97316] to-[#ea580c]'
    return 'from-[#ef4444] to-[#dc2626]'
  }

  const getSeverityColor = (severity) => {
    if (severity === 'high') return 'bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/20'
    if (severity === 'medium') return 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20'
    return 'bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/20'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#0f172a] mb-2">Tool Health Overview</h1>
        <p className="text-[#475569]">Real-time monitoring across all active chambers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* System Health Score */}
        <div className="lg:col-span-1 card-surface p-6 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#0f172a]">System Health</h2>
            <span className="text-2xl">📊</span>
          </div>
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="55" fill="none" stroke="#e2e8f0" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="55"
                fill="none"
                stroke="url(#healthGradient)"
                strokeWidth="8"
                strokeDasharray="260"
                strokeDashoffset="40"
                strokeLinecap="round"
                className="transition-all duration-500"
              />
              <defs>
                <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0f172a]">78%</div>
                <div className="text-xs text-[#64748b]">Overall</div>
              </div>
            </div>
          </div>
          <div className="bg-[#f1f5f9] rounded-lg p-4 text-center">
            <span className="inline-block px-3 py-1 bg-[#f59e0b]/20 text-[#d97706] rounded-full text-sm font-medium border border-[#f59e0b]/30">
              Requires Attention
            </span>
          </div>
        </div>

        {/* Top Stats */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {[
            { label: 'Active Chambers', value: '4', icon: '⚙️', color: 'from-[#0ea5e9]' },
            { label: 'Alarms', value: '3', icon: '🔔', color: 'from-[#ef4444]' },
            { label: 'Avg Uptime', value: '99.2%', icon: '⏱️', color: 'from-[#10b981]' },
            { label: 'Last PM Sync', value: '2h ago', icon: '🔄', color: 'from-[#06b6d4]' },
          ].map((stat, idx) => (
            <div key={idx} className="card-surface p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-[#64748b] font-semibold uppercase tracking-wide">{stat.label}</p>
                  <p className="text-2xl font-bold text-[#0f172a] mt-2">{stat.value}</p>
                </div>
                <span className="text-3xl opacity-60">{stat.icon}</span>
              </div>
              <div className={`h-1 bg-gradient-to-r ${stat.color} to-transparent rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Chamber Health Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#0f172a] mb-4">Chamber Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolHealth.map((chamber, idx) => (
            <div key={idx} className="card-surface p-5 rounded-xl card-hover">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-[#475569]">{chamber.name}</p>
                  <p className="text-xs text-[#64748b] mt-1">{chamber.lastPM}</p>
                </div>
                <span className="text-2xl">📈</span>
              </div>
              
              {/* Health Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#64748b]">Health</span>
                  <span className="text-sm font-bold text-[#0f172a]">{chamber.health}%</span>
                </div>
                <div className="w-full h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getHealthColor(chamber.health)} transition-all duration-500`}
                    style={{ width: `${chamber.health}%` }}
                  ></div>
                </div>
              </div>

              {/* Status Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize border ${
                chamber.status === 'optimal' ? 'bg-[#10b981]/10 text-[#059669] border-[#10b981]/20' :
                chamber.status === 'good' ? 'bg-[#f59e0b]/10 text-[#d97706] border-[#f59e0b]/20' :
                chamber.status === 'fair' ? 'bg-[#f97316]/10 text-[#c2410c] border-[#f97316]/20' :
                'bg-[#ef4444]/10 text-[#dc2626] border-[#ef4444]/20'
              }`}>
                {chamber.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Issues */}
      <div>
        <h2 className="text-xl font-bold text-[#0f172a] mb-4">Recent Issues & Alerts</h2>
        <div className="space-y-3">
          {issues.map((issue) => (
            <div key={issue.id} className="card-surface p-5 rounded-xl card-hover flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${
                  issue.severity === 'high' ? 'bg-[#ef4444]/20' :
                  issue.severity === 'medium' ? 'bg-[#f59e0b]/20' :
                  'bg-[#3b82f6]/20'
                }`}>
                  {issue.severity === 'high' ? '🔴' : issue.severity === 'medium' ? '🟡' : '🔵'}
                </div>
                <div>
                  <p className="text-[#0f172a] font-semibold">{issue.title}</p>
                  <p className="text-xs text-[#64748b] mt-1">{issue.chamber} • {issue.time}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize ${getSeverityColor(issue.severity)}`}>
                {issue.severity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
