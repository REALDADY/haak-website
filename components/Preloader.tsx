'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const SESSION_KEY = 'haak-loader-seen'

export default function Preloader() {
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reduceMotion || sessionStorage.getItem(SESSION_KEY) === '1') {
      setVisible(false)
      return
    }

    setVisible(true)
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1')
      setVisible(false)
    }, 900)

    const hardStop = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1')
      setVisible(false)
    }, 1400)

    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(hardStop)
    }
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[var(--bg)]"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.48, ease: [0.76, 0, 0.24, 1] } }}
          aria-label="Loading HAAK Solutions"
          role="status"
        >
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative h-24 w-24">
              <motion.span
                className="absolute left-3 top-3 h-7 w-12 origin-bottom-left rounded-[8px] bg-[var(--brand-accent)]"
                initial={{ x: -28, y: 18, rotate: -36, opacity: 0 }}
                animate={{ x: 0, y: 0, rotate: -24, opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 0.8, 0.28, 1] }}
              />
              <motion.span
                className="absolute left-8 top-6 h-12 w-11 origin-center rounded-[9px] bg-[var(--brand-primary)]"
                initial={{ scale: 0.78, rotate: 42, opacity: 0 }}
                animate={{ scale: 1, rotate: 18, opacity: 1 }}
                transition={{ duration: 0.48, delay: 0.08, ease: [0.22, 0.8, 0.28, 1] }}
              />
              <motion.span
                className="absolute bottom-3 right-5 h-8 w-12 origin-top-right rounded-[8px] bg-[var(--brand-secondary)]"
                initial={{ x: 26, y: -16, rotate: 36, opacity: 0 }}
                animate={{ x: 0, y: 0, rotate: -22, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 0.8, 0.28, 1] }}
              />
            </div>
            <div className="h-1.5 w-48 overflow-hidden rounded-full bg-[var(--surface-soft)]">
              <motion.div
                className="h-full rounded-full bg-[var(--brand-primary-hover)]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, ease: [0.22, 0.8, 0.28, 1] }}
              />
            </div>
            <span className="sr-only">Loading HAAK Solutions</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
