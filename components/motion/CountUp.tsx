'use client'

import { cubicBezier, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { ease } from '@/lib/motion'

const easeExpo = cubicBezier(...ease.expo)
const COUNT_DURATION = 1600

interface CountUpProps {
  value: number
  pad?: number
  suffix?: string
  className?: string
}

function format(value: number, pad: number, suffix: string) {
  return `${String(Math.round(value)).padStart(pad, '0')}${suffix}`
}

/**
 * Counts up to `value` when scrolled into view. Server HTML contains the final
 * number, so it is correct without JavaScript and with reduced motion.
 */
export default function CountUp({ value, pad = 2, suffix = '', className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const reduceMotion = useReducedMotion()
  const primed = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node || reduceMotion || primed.current || inView) return
    primed.current = true
    node.textContent = format(0, pad, suffix)
  }, [inView, pad, reduceMotion, suffix])

  useEffect(() => {
    const node = ref.current
    if (!node || !inView || reduceMotion || !primed.current) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / COUNT_DURATION)
      node.textContent = format(easeExpo(progress) * value, pad, suffix)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, pad, reduceMotion, suffix, value])

  return (
    <>
      <span ref={ref} aria-hidden="true" className={className}>
        {format(value, pad, suffix)}
      </span>
      <span className="sr-only">{`${value}${suffix}`}</span>
    </>
  )
}
