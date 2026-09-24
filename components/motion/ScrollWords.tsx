'use client'

import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface WordProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  still: boolean
}

function Word({ children, progress, range, still }: WordProps) {
  const opacity = useTransform(progress, range, still ? [1, 1] : [0.24, 1])
  return (
    <m.span data-reveal style={{ opacity }}>
      {children}
    </m.span>
  )
}

interface ScrollWordsProps {
  text: string
  className?: string
}

/**
 * Paragraph whose words light up as it scrolls through the viewport.
 * Plain inline text for assistive tech; fully opaque with reduced motion
 * (same markup either way, so server and client render identically).
 */
export default function ScrollWords({ text, className }: ScrollWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduceMotion = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] })
  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => {
        const start = index / words.length
        const end = start + 1 / words.length
        return (
          <span key={`${word}-${index}`}>
            <Word progress={scrollYProgress} range={[start, end]} still={reduceMotion}>
              {word}
            </Word>
            {index < words.length - 1 ? ' ' : null}
          </span>
        )
      })}
    </p>
  )
}
