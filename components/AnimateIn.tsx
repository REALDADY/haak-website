'use client'

import { Reveal } from '@/components/motion/Reveal'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

/** Backwards-compatible alias for the shared Reveal primitive. */
export default function AnimateIn({ children, delay = 0, className, direction = 'up' }: AnimateInProps) {
  return (
    <Reveal delay={delay} className={className} direction={direction}>
      {children}
    </Reveal>
  )
}
