'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const shouldReduce = mounted && reduceMotion

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduce ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: shouldReduce ? 0 : 0.34, ease: [0.22, 0.8, 0.28, 1] }}
    >
      {children}
    </motion.div>
  )
}
