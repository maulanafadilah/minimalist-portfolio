import { useEffect, useRef, useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Direction } from './components/Direction'
import { Now } from './components/Now'
import { Contact } from './components/Contact'
import { Divider } from './components/Divider'

function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const move = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div ref={dotRef} className="cursor-dot" />
}

function useFinePointer() {
  const [fine, setFine] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const onChange = () => setFine(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return fine
}

export default function App() {
  const showCursorDot = useFinePointer()

  return (
    <>
      {showCursorDot ? <CursorDot /> : null}
      <div className="min-h-screen bg-[#f5f3ef] text-[#1a1917]">
        <div className="font-serif text-[17px] leading-[1.7] px-8 sm:px-8 py-16 pb-16 max-w-[720px] mx-auto">
          <Nav />
          <Hero />
          <Divider label="selected work" />
          <Work />
          <Divider label="direction" />
          <Direction />
          <Divider label="now" />
          <Now />
          <Divider label="contact" />
          <Contact />
          <footer className="mt-24 pt-6 border-t border-[#eceae4]">
            <p className="font-mono text-[11px] font-light text-[#b0ada6] tracking-[0.04em]">
              © 2026 maulana fadilah · karawang, indonesia
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}
