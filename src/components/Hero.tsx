import { useInView } from '../hooks/useInView'

export function Hero() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-5 fade-up ${inView ? 'in-view' : ''}`}
    >
      <span className="font-mono text-[12px] font-light tracking-[0.1em] uppercase text-[#6b6860] mb-5 block">
        mobile engineer
      </span>
      <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.2] text-[#1a1917] mb-6 max-w-[520px]">
        I build mobile products <em className="italic text-[#6b6860]">people actually use.</em>
      </h1>
      <p className="text-[17px] text-[#6b6860] leading-[1.75]">
        Currently shipping React Native at scale. Moving deeper into native iOS — because the closer you get to the metal, the more you understand the craft.
      </p>
    </section>
  )
}
