import StatusBadge from '@/components/common/StatusBadge'

export default function PostPMRecovery() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#f1f5f9] mb-2">Post-PM Recovery Monitoring</h1>
        <p className="text-[#a0aec0]">Track recovery metrics and stabilization after preventive maintenance</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Last PM Date</p>
          <p className="text-[#f1f5f9] font-semibold">Dec 15, 2024</p>
          <p className="text-xs text-[#a0aec0] mt-2">47 days ago</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Recovery Status</p>
          <StatusBadge status="green" label="Recovered" />
          <p className="text-xs text-[#a0aec0] mt-3">Fully operational</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Stabilization Time</p>
          <p className="text-2xl font-bold text-[#f1f5f9]">18h</p>
          <p className="text-xs text-[#a0aec0] mt-2">Expected: 12-24h</p>
        </div>

        <div className="surface rounded-xl p-6">
          <p className="text-[#718096] text-sm mb-2">Recovery Confidence</p>
          <p className="text-2xl font-bold text-[#10b981]">96%</p>
          <p className="text-xs text-[#a0aec0] mt-2">High confidence</p>
        </div>
      </div>

      {/* Recovery Metrics */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Gas Pressure Stability</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[#a0aec0] text-sm">Pressure Variance</span>
                <span className="text-[#f1f5f9] font-semibold">±0.2%</span>
              </div>
              <div className="w-full h-2 bg-[#2d3748] rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-[#10b981]"></div>
              </div>
              <p className="text-xs text-[#718096] mt-1">Target: &lt;±0.5%</p>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[#a0aec0] text-sm">Flow Settling Time</span>
                <span className="text-[#f1f5f9] font-semibold">4.2 hrs</span>
              </div>
              <p className="text-xs text-[#718096] mt-1">Expected: 3-6 hours</p>
            </div>
          </div>
        </div>

        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Cooling Water Temperature</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[#a0aec0] text-sm">Temp Stability</span>
                <span className="text-[#f1f5f9] font-semibold">±0.3°C</span>
              </div>
              <div className="w-full h-2 bg-[#2d3748] rounded-full overflow-hidden">
                <div className="h-full w-2/5 bg-[#10b981]"></div>
              </div>
              <p className="text-xs text-[#718096] mt-1">Excellent control</p>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[#a0aec0] text-sm">Flow Rate</span>
                <span className="text-[#f1f5f9] font-semibold">2.8 L/min</span>
              </div>
              <p className="text-xs text-[#718096] mt-1">Expected: 2.5-3.2 L/min</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exhaust Performance */}
      <div className="surface rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Exhaust System Performance</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg">
            <span className="text-[#a0aec0]">Vacuum Level Stability</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              <span className="text-[#f1f5f9] font-semibold">Optimal</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg">
            <span className="text-[#a0aec0]">Pump Performance</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              <span className="text-[#f1f5f9] font-semibold">Normal</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg">
            <span className="text-[#a0aec0]">Exhaust Trap Condition</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              <span className="text-[#f1f5f9] font-semibold">Clean</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery Timeline */}
      <div className="surface rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#f1f5f9] mb-4">Post-PM Recovery Timeline</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-[#0f1419] font-bold text-sm">
              1
            </div>
            <div>
              <p className="text-[#f1f5f9] font-semibold">0-2 hours: Initial Power-on</p>
              <p className="text-sm text-[#a0aec0]">Chillers, pumps, and gas lines activate</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-[#0f1419] font-bold text-sm">
              2
            </div>
            <div>
              <p className="text-[#f1f5f9] font-semibold">2-6 hours: Pressure & Temp Settling</p>
              <p className="text-sm text-[#a0aec0]">Gas flows and cooling water stabilize</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-[#0f1419] font-bold text-sm">
              3
            </div>
            <div>
              <p className="text-[#f1f5f9] font-semibold">6-18 hours: Recipe Stabilization</p>
              <p className="text-sm text-[#a0aec0]">First test wafers achieve spec depth</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-[#0f1419] font-bold text-sm">
              4
            </div>
            <div>
              <p className="text-[#f1f5f9] font-semibold">18+ hours: Full Recovery</p>
              <p className="text-sm text-[#a0aec0]">Tool operating at baseline performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery Health Check */}
      <div className="bg-[#10b981]/5 border border-[#10b981]/20 rounded-xl p-6">
        <h3 className="text-[#10b981] font-semibold mb-3">Recovery Health Summary</h3>
        <p className="text-[#a0aec0]">
          Tool has achieved full recovery post-PM. All critical parameters are within specification. System is ready for
          full production operation at rated capacity.
        </p>
      </div>
    </div>
  )
}
