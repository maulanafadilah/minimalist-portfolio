export function Nav() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="flex justify-between items-baseline mb-12 border-b border-[#b0ada6] pb-4">
      <span className="font-mono text-[14px] font-light tracking-[0.04em] text-[#1a1917] lowercase">
        maulana fadilah
      </span>
      <div className="flex gap-6">
        {(['work', 'craft', 'now', 'contact'] as const).map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="font-mono text-[13px] font-light tracking-[0.03em] text-[#6b6860] hover:text-[#1a1917] transition-colors lowercase bg-transparent border-0 cursor-fine-none"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  )
}
