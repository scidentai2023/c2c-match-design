export default function StatusBadge({ status, label }) {
  const statusConfig = {
    green: {
      bg: 'bg-[#10b981]/10',
      text: 'text-[#10b981]',
      border: 'border-[#10b981]/20',
      dot: 'bg-[#10b981]',
    },
    amber: {
      bg: 'bg-[#f59e0b]/10',
      text: 'text-[#f59e0b]',
      border: 'border-[#f59e0b]/20',
      dot: 'bg-[#f59e0b]',
    },
    red: {
      bg: 'bg-[#ef4444]/10',
      text: 'text-[#ef4444]',
      border: 'border-[#ef4444]/20',
      dot: 'bg-[#ef4444]',
    },
  }

  const config = statusConfig[status] || statusConfig.amber

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${config.bg} ${config.border}`}>
      <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
      <span className={`text-sm font-medium ${config.text}`}>{label}</span>
    </div>
  )
}
