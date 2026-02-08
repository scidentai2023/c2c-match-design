import StatusBadge from '@/components/common/StatusBadge'

export default function IssueTriage() {
  const issues = [
    {
      id: 1,
      priority: 'high',
      title: 'Chamber 4: Rapid Depth Drift',
      risk: 'Yield loss',
      rootCause: 'ESC/RF drift',
      action: 'Inspect electrode surface',
      timeline: 'Next 4 hours',
    },
    {
      id: 2,
      priority: 'medium',
      title: 'Chamber 2: Wafer-to-wafer CD Variation',
      risk: 'Specification margin',
      rootCause: 'Gas flow imbalance',
      action: 'Verify gas regulator settings',
      timeline: 'Today',
    },
    {
      id: 3,
      priority: 'low',
      title: 'Chamber 3: Slight Profile Drift',
      risk: 'Monitor only',
      rootCause: 'Normal aging',
      action: 'Continue observation',
      timeline: 'Next PM',
    },
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'red'
      case 'medium':
        return 'amber'
      case 'low':
        return 'green'
      default:
        return 'amber'
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Issue Triage & Root Cause Analysis</h1>
        <p className="text-[#a0aec0]">Risk-ranked issues with recommended actions and diagnostics</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Total Issues</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">3</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">High Priority</p>
          <p className="text-2xl font-bold text-[#ef4444]">1</p>
          <p className="text-xs text-[#ef4444]">Requires immediate action</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Tool-Related Issues</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">2</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Impact: Yield</p>
          <p className="text-2xl font-bold text-[#f59e0b]">Medium</p>
        </div>
      </div>

      {/* Issues List */}
      <div className="space-y-4 mb-8">
        {issues.map((issue) => (
          <div key={issue.id} className="surface rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <StatusBadge status={getPriorityColor(issue.priority)} label={issue.priority.toUpperCase()} />
                  <h3 className="text-lg font-semibold text-[#f1f5f9]">{issue.title}</h3>
                </div>
                <p className="text-sm text-[#a0aec0]">Risk Category: {issue.risk}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-[#2d3748]">
              <div>
                <p className="text-xs text-[#718096] uppercase tracking-wide mb-1">Root Cause Analysis</p>
                <p className="text-[#f1f5f9] font-medium">{issue.rootCause}</p>
              </div>
              <div>
                <p className="text-xs text-[#718096] uppercase tracking-wide mb-1">Recommended Action</p>
                <p className="text-[#f1f5f9] font-medium">{issue.action}</p>
              </div>
              <div>
                <p className="text-xs text-[#718096] uppercase tracking-wide mb-1">Timeline</p>
                <p className="text-[#f1f5f9] font-medium">{issue.timeline}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white text-sm font-medium transition-colors">
                Investigate
              </button>
              <button className="px-4 py-2 rounded-lg border border-[#2d3748] hover:bg-[#2d3748] text-[#a0aec0] text-sm font-medium transition-colors">
                Acknowledge
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Diagnostic Decision Tree */}
      <div className="surface rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-6">Diagnostic Decision Guide</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-[#3b82f6] pl-4 py-2">
            <p className="text-[#f1f5f9] font-semibold mb-2">Issue: Rapid Depth Drift</p>
            <div className="text-sm text-[#a0aec0] space-y-1">
              <p>
                <span className="font-semibold">Check:</span> Gas pressure stability, RF power, electrode surface condition
              </p>
              <p>
                <span className="font-semibold">If gas stable:</span> Likely ESC wear or RF coupling issue
              </p>
              <p>
                <span className="font-semibold">Action:</span> Inspect electrode surface, measure RF coupler impedance
              </p>
            </div>
          </div>

          <div className="border-l-4 border-[#f59e0b] pl-4 py-2">
            <p className="text-[#f1f5f9] font-semibold mb-2">Issue: Wafer-to-Wafer CD Growth</p>
            <div className="text-sm text-[#a0aec0] space-y-1">
              <p>
                <span className="font-semibold">Check:</span> Gas regulator pressure, mass flow controller calibration
              </p>
              <p>
                <span className="font-semibold">If RF stable:</span> Likely gas flow drift issue
              </p>
              <p>
                <span className="font-semibold">Action:</span> Verify MFC calibration, check regulator spring tension
              </p>
            </div>
          </div>

          <div className="border-l-4 border-[#10b981] pl-4 py-2">
            <p className="text-[#f1f5f9] font-semibold mb-2">Issue: Tool Stable, No Deterioration</p>
            <div className="text-sm text-[#a0aec0] space-y-1">
              <p>
                <span className="font-semibold">Status:</span> Continue normal operation
              </p>
              <p>
                <span className="font-semibold">Monitoring:</span> Track metrics for early warning
              </p>
              <p>
                <span className="font-semibold">PM Timing:</span> Proceed with scheduled Day 60 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Framework */}
      <div className="surface rounded-xl p-6">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Key Decision Questions</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-[#0f1419] rounded-lg">
            <span className="text-lg">❓</span>
            <div>
              <p className="text-[#f1f5f9] font-medium">Is this a tool issue or process issue?</p>
              <p className="text-xs text-[#a0aec0]">Check if other tools with same recipe show the same behavior</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[#0f1419] rounded-lg">
            <span className="text-lg">❓</span>
            <div>
              <p className="text-[#f1f5f9] font-medium">Is this worth stopping production?</p>
              <p className="text-xs text-[#a0aec0]">Only if yield loss risk exceeds production delay cost</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[#0f1419] rounded-lg">
            <span className="text-lg">❓</span>
            <div>
              <p className="text-[#f1f5f9] font-medium">Can we continue with process compensation?</p>
              <p className="text-xs text-[#a0aec0]">May be viable if drift is slow and predictable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
