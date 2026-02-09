export default function TopBar() {
  return (
    <header className="bg-white border-b border-[#e2e8f0] px-8 py-5 shadow-sm">
      <div className="flex items-center justify-between max-w-full">
        {/* Left: Service Engineer Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] rounded-lg flex items-center justify-center text-white font-bold shadow-md">
            JC
          </div>
          <div>
            <p className="text-xs text-[#64748b] uppercase tracking-wide font-semibold">Service Engineer</p>
            <p className="text-[#0f172a] font-bold text-base">James Chen</p>
            <p className="text-xs text-[#64748b]">Lam Research • On Duty</p>
          </div>
        </div>

        {/* Center: Tool Status */}
        <div className="flex items-center gap-4 px-6 py-3 bg-[#f1f5f9] rounded-lg border border-[#e2e8f0] shadow-sm">
          <div className="w-10 h-10 bg-[#10b981]/20 rounded-lg flex items-center justify-center text-[#10b981] font-bold">
            ✓
          </div>
          <div>
            <p className="text-xs text-[#64748b]">Current Tool</p>
            <p className="text-[#0f172a] font-semibold">Tool-A-2024</p>
          </div>
          <span className="ml-2 px-3 py-1 bg-[#10b981]/10 text-[#10b981] text-xs font-semibold rounded-full border border-[#10b981]/20">
            Active
          </span>
        </div>

        {/* Right: Actions & Alerts */}
        <div className="flex items-center gap-3">
          {/* Real-time Alert */}
          <button className="relative p-3 hover:bg-[#f1f5f9] rounded-lg transition-colors">
            <span className="text-xl">🔔</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#ef4444] rounded-full animate-pulse"></span>
          </button>

          {/* Settings */}
          <button className="p-3 hover:bg-[#f1f5f9] rounded-lg transition-colors text-[#64748b]">
            ⚙️
          </button>

          {/* Profile Avatar */}
          <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0ea5e9] via-[#06b6d4] to-[#7c3aed] flex items-center justify-center text-white font-bold hover:shadow-md hover:shadow-[#0ea5e9]/20 transition-all">
            JC
          </button>
        </div>
      </div>
    </header>
  )
}
