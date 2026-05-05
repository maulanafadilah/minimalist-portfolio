import { useInView } from '../hooks/useInView'

export function Direction() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      id="craft"
      ref={ref as React.RefObject<HTMLElement>}
      className={`mb-4 fade-up ${inView ? 'in-view' : ''}`}
    >
      <blockquote className="text-[17px] text-[#6b6860] leading-[1.85] border-l-2 border-[#b0ada6] pl-5 italic font-serif">
        Shipping a production AI app changes how you think about the network. Every inference call is a dependency — on connectivity, on latency, on someone else's server. I'm drawn to eliminating those dependencies: on-device models, offline-first architecture, intelligence that lives in the user's pocket rather than in the cloud. The constraint is the point.
      </blockquote>
    </section>
  )
}
