export default function Sidebar({ currentView, onViewChange }) {
  const menuItems = [
    { id: 'overview', label: 'Health Overview', icon: '📊' },
    { id: 'depth-repeatability', label: 'Depth Repeatability', icon: '📈' },
    { id: 'wafer-consistency', label: 'Wafer Consistency', icon: '📋' },
    { id: 'uniformity', label: 'Wafer Uniformity', icon: '🔄' },
    { id: 'chamber-matching', label: 'Chamber Matching', icon: '⚙️' },
    { id: 'profile-stability', label: 'Profile Stability', icon: '📐' },
    { id: 'cleanliness', label: 'Bottom Cleanliness', icon: '🧹' },
    { id: 'etch-rate', label: 'Etch Rate Stability', icon: '⚡' },
    { id: 'pm-recovery', label: 'Post-PM Recovery', icon: '🔧' },
    { id: 'issue-triage', label: 'Issue Triage', icon: '🔍' },
    { id: 'jobs', label: 'Jobs & Activities', icon: '✓' },
    { id: 'reports', label: 'Reports', icon: '📄' },
    { id: 'facility', label: 'Facility Correlation', icon: '🏭' },
  ]

  return (
    <aside className="w-72 bg-[#111633] border-r border-[#3d4563]/30 overflow-y-auto flex flex-col backdrop-blur-xl">
      {/* Logo/Header */}
      <div className="p-6 border-b border-[#3d4563]/30 bg-gradient-to-b from-[#1a1f3a] to-[#111633]">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5e9] via-[#06b6d4] to-[#8b5cf6] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
            ET
          </div>
          <div>
            <h1 className="text-[#f8fafc] font-bold text-base leading-tight">EtchTools</h1>
            <p className="text-xs text-[#94a3b8]">Pro Monitor</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 py-5 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
              currentView === item.id
                ? 'bg-gradient-to-r from-[#0ea5e9]/20 to-[#06b6d4]/20 text-[#0ea5e9] border border-[#0ea5e9]/30 shadow-md'
                : 'text-[#cbd5e1] hover:bg-[#1a1f3a] hover:text-[#f8fafc] border border-transparent'
            }`}
          >
            <span className="text-base flex-shrink-0">{item.icon}</span>
            <span className="truncate">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#3d4563]/30 bg-gradient-to-t from-[#0a0e27] to-[#111633]">
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#94a3b8] font-medium">v2.1 Pro</p>
          <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
        </div>
      </div>
    </aside>
  )
}
