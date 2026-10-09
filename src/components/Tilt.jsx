import { useEffect, useRef, useState } from 'react'

// Reveals on scroll with a 3D flip-up, then tilts toward the cursor on hover.
// Pass flat to only reveal (no hover tilt), e.g. for headings; instant skips the reveal (cards inside sliders).
export default function Tilt({ as: Tag = 'div', className = '', delay = 0, max = 7, flat = false, instant = false, children, ...rest }) {
  const ref = useRef(null)
  const [state, setState] = useState(instant ? 'is-in ready' : '')

  useEffect(() => {
    const el = ref.current
    if (instant) return
    if (!el || typeof IntersectionObserver === 'undefined') {
      setState('is-in ready')
      return
    }
    let timer
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setState('is-in')
        timer = setTimeout(() => setState('is-in ready'), 800 + delay)
        io.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(timer)
    }
  }, [delay, instant])

  const onMove = (e) => {
    if (flat) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${(0.5 - y) * max}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * max}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }

  const onLeave = () => {
    const el = ref.current
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${flat ? 'reveal' : 'tilt'} ${state} ${className}`}
      style={{ transitionDelay: state === 'is-in' ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
      {!flat && <span className="tilt-shine" aria-hidden />}
    </Tag>
  )
}
