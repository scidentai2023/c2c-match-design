export default function TopBar() {
  return (
    <header className="bg-[#1a202c] border-b border-[#2d3748] px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Service Engineer Info */}
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs text-[#718096] uppercase tracking-wide">Service Engineer</p>
            <p className="text-[#f1f5f9] font-semibold">James Chen</p>
            <p className="text-xs text-[#718096]">Lam Research | On-duty</p>
          </div>
        </div>

        {/* Center: Location/Tool */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center text-[#06b6d4]">
            🏭
          </div>
          <div>
            <p className="text-xs text-[#718096]">Current Tool</p>
            <p className="text-[#f1f5f9] font-semibold">Tool-A-2024</p>
          </div>
        </div>

        {/* Right: Notifications & Actions */}
        <div className="flex items-center gap-4">
          {/* Alerts */}
          <div className="relative">
            <button className="relative p-2 hover:bg-[#2d3748] rounded-lg transition-colors">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#ef4444] rounded-full"></span>
            </button>
          </div>

          {/* Profile */}
          <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white font-semibold hover:opacity-90 transition-opacity">
            JC
          </button>
        </div>
      </div>
    </header>
  )
}
