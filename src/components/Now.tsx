import { useInView } from '../hooks/useInView'

export function Now() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      id="now"
      ref={ref as React.RefObject<HTMLElement>}
      className={`mb-4 fade-up ${inView ? 'in-view' : ''}`}
    >
      <p className="text-[17px] text-[#6b6860] leading-[1.85] font-serif">
        Shipping at <strong className="font-medium text-[#1a1917] not-italic">Cerulean Studio</strong>, studying Information Systems at <strong className="font-medium text-[#1a1917] not-italic">BINUS University</strong>, and going deeper into native iOS with <strong className="font-medium text-[#1a1917] not-italic">Swift &amp; SwiftUI</strong>. I'm not switching stacks — I'm filling in the gaps that make me better at both. Open to conversations about roles where mobile is the product, not an afterthought.
      </p>
    </section>
  )
}
