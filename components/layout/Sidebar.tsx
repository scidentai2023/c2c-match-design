export default function Sidebar({ currentView, onViewChange }) {
  const menuItems = [
    { id: 'overview', label: 'Tool Health Overview', icon: '📊' },
    { id: 'depth-repeatability', label: 'Etch Depth Repeatability', icon: '📈' },
    { id: 'wafer-consistency', label: 'Wafer-to-Wafer Consistency', icon: '📋' },
    { id: 'uniformity', label: 'Across-Wafer Uniformity', icon: '🔄' },
    { id: 'chamber-matching', label: 'Chamber-to-Chamber Matching', icon: '⚙️' },
    { id: 'profile-stability', label: 'Profile Stability', icon: '📐' },
    { id: 'cleanliness', label: 'Bottom Cleanliness', icon: '🧹' },
    { id: 'etch-rate', label: 'Etch Rate Stability', icon: '⚡' },
    { id: 'pm-recovery', label: 'Post-PM Recovery', icon: '🔧' },
    { id: 'issue-triage', label: 'Issue Triage & Root Cause', icon: '🔍' },
    { id: 'jobs', label: 'Jobs & Activities', icon: '✓' },
    { id: 'reports', label: 'Reports & Sign-Off', icon: '📄' },
    { id: 'facility', label: 'Facility Correlation', icon: '🏭' },
  ]

  return (
    <aside className="w-64 bg-[#1a202c] border-r border-[#2d3748] overflow-y-auto flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-[#2d3748]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] rounded-lg flex items-center justify-center text-white font-bold text-sm">
            ET
          </div>
          <span className="text-[#f1f5f9] font-semibold text-lg">EtchTools</span>
        </div>
        <p className="text-xs text-[#718096]">Service Monitor</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${
              currentView === item.id
                ? 'bg-[#3b82f6] text-white'
                : 'text-[#a0aec0] hover:bg-[#2d3748] hover:text-[#f1f5f9]'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="truncate">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#2d3748] bg-[#0f1419]">
        <p className="text-xs text-[#718096]">v2.1 Beta</p>
      </div>
    </aside>
  )
}
