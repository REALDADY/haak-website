'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

// The intro is CSS-driven and gated by `has-intro`, set before first paint by lib/intro.ts.

const letters = ['H', 'A', 'A', 'K']

export default function Preloader() {
  const [active, setActive] = useState(true)
  const finishedRef = useRef(false)

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    document.documentElement.classList.remove('has-intro', 'intro-skip')
    setActive(false)
  }, [])

  const skip = useCallback(() => {
    document.documentElement.classList.add('intro-skip')
    window.setTimeout(finish, 280)
  }, [finish])

  useEffect(() => {
    if (!document.documentElement.classList.contains('has-intro')) {
      setActive(false)
      return
    }

    const fallback = window.setTimeout(finish, 2000)
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') skip()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.clearTimeout(fallback)
      window.removeEventListener('keydown', handleKey)
    }
  }, [finish, skip])

  if (!active) return null

  return (
    <div
      className="preloader theme-dark"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) finish()
      }}
    >
      <div className="grid-lines" aria-hidden="true" />
      <div className="relative flex flex-col items-center gap-6" aria-hidden="true">
        <p className="flex overflow-hidden font-display text-[clamp(3.5rem,12vw,7rem)] font-extrabold leading-none tracking-[-0.05em] text-white">
          {letters.map((letter, index) => (
            <span key={index} className="preloader-letter" style={{ '--i': index } as React.CSSProperties}>
              {letter}
            </span>
          ))}
        </p>
        <span className="block h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <span className="preloader-bar block h-full w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Solutions</span>
      </div>
      <button
        type="button"
        onClick={skip}
        className="absolute bottom-6 right-6 min-h-11 rounded-full border border-white/20 px-5 text-sm font-semibold text-white/80 transition-colors hover:border-white/50 hover:text-white"
      >
        Skip intro
      </button>
    </div>
  )
}
