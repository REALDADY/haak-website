'use client'

import { m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { duration, ease } from '@/lib/motion'

// Module scope survives client-side navigations, so only route changes animate —
// the first server-rendered paint is never hidden behind an entrance animation.
let hasNavigated = false

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [animateIn] = useState(() => hasNavigated)

  useEffect(() => {
    hasNavigated = true
  }, [])

  return (
    <>
      {animateIn && (
        <m.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-logo-cyan)] to-[var(--brand-accent)]"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0 }}
          transition={{
            scaleX: { duration: duration.slow, ease: ease.expo },
            opacity: { duration: duration.base, delay: duration.slow * 0.8 },
          }}
        />
      )}
      <m.div
        initial={animateIn ? { opacity: 0, y: 14 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.slow, ease: ease.out }}
      >
        {children}
      </m.div>
    </>
  )
}
