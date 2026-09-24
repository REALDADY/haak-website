'use client'

import { AnimatePresence, m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { whatsappLinks } from '@/lib/site-data'
import { spring } from '@/lib/motion'
import { WhatsAppIcon } from '@/components/icons'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const introPlaying = document.documentElement.classList.contains('has-intro')
    const timer = window.setTimeout(() => setVisible(true), introPlaying ? 2600 : 1600)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <m.a
          href={whatsappLinks.default}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp (opens in a new tab)"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring.snappy}
          className="group fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-full border border-white/10 bg-[var(--surface-dark)] p-1.5 text-white shadow-[0_18px_50px_-12px_rgba(0,8,20,0.55)] transition-colors hover:border-[var(--brand-primary)] sm:bottom-6 sm:right-6 sm:pr-5"
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-[var(--brand-secondary)]">
            <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[var(--brand-primary)] opacity-25 [animation-duration:2.4s]" />
            <WhatsAppIcon className="relative h-6 w-6" />
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/60">Quick reply</span>
            <span className="block text-sm font-semibold">Chat on WhatsApp</span>
          </span>
        </m.a>
      )}
    </AnimatePresence>
  )
}
