interface DividerProps {
  label: string
}

export function Divider({ label }: DividerProps) {
  return (
    <div className="flex items-center gap-4 mt-12 mb-8">
      <span className="font-mono text-[10px] font-light tracking-[0.12em] uppercase text-[#b0ada6] whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#b0ada6] opacity-50" />
    </div>
  )
}
