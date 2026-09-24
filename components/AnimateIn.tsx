'use client'

import { motion } from 'framer-motion'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function AnimateIn({
  children,
  delay = 0,
  className,
  direction = 'up',
}: AnimateInProps) {
  const initial: Record<string, number> = { opacity: 1 }
  if (direction === 'up') initial.y = 10
  if (direction === 'down') initial.y = -10
  if (direction === 'left') initial.x = -10
  if (direction === 'right') initial.x = 10

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.55, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
