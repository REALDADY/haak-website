'use client'

import { m, type Variants } from 'framer-motion'
import { distance, fadeUp, staggerContainer, stagger as staggerGap, transition, viewportOnce } from '@/lib/motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'
type Tag = 'div' | 'section' | 'article' | 'ul' | 'ol' | 'li' | 'span' | 'dl'

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: distance.md },
  down: { y: -distance.md },
  left: { x: -distance.md },
  right: { x: distance.md },
  none: {},
}

function getTag(as: Tag) {
  return m[as] as typeof m.div
}

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
  as?: Tag
  id?: string
}

/**
 * Scroll reveal for a single block. `data-reveal` lets CSS force it visible
 * when motion is reduced or JavaScript is unavailable.
 */
export function Reveal({ children, className, delay = 0, direction = 'up', as = 'div', id }: RevealProps) {
  const Component = getTag(as)
  const variants: Variants = {
    hidden: { opacity: 0, ...offsets[direction] },
    visible: { opacity: 1, x: 0, y: 0, transition: { ...transition.slow, delay } },
  }

  return (
    <Component
      id={id}
      data-reveal
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Component>
  )
}

interface RevealGroupProps {
  children: React.ReactNode
  className?: string
  gap?: number
  delay?: number
  as?: Tag
  role?: string
  'aria-label'?: string
}

/** Orchestrates staggered reveals for RevealItem children. */
export function RevealGroup({ children, className, gap = staggerGap.base, delay = 0, as = 'div', ...rest }: RevealGroupProps) {
  const Component = getTag(as)
  return (
    <Component
      className={className}
      variants={staggerContainer(gap, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </Component>
  )
}

interface RevealItemProps {
  children: React.ReactNode
  className?: string
  as?: Tag
  variants?: Variants
}

export function RevealItem({ children, className, as = 'div', variants = fadeUp }: RevealItemProps) {
  const Component = getTag(as)
  return (
    <Component data-reveal className={className} variants={variants}>
      {children}
    </Component>
  )
}
