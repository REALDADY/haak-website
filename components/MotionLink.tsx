'use client'

import Link from 'next/link'
import type { ComponentProps, MouseEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

type MotionLinkProps = ComponentProps<typeof Link> & {
  magnetic?: boolean
}

export default function MotionLink({
  children,
  className,
  magnetic = false,
  onMouseMove,
  onMouseLeave,
  ...props
}: MotionLinkProps) {
  const reduceMotion = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 })
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 })

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    onMouseMove?.(event)

    if (!magnetic || reduceMotion || !window.matchMedia('(pointer: fine)').matches) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.08)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.08)
  }

  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    onMouseLeave?.(event)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div style={{ x, y }} className="inline-flex">
      <Link className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} {...props}>
        {children}
      </Link>
    </motion.div>
  )
}

