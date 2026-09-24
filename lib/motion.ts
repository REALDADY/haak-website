import type { Transition, Variants } from 'framer-motion'

/**
 * HAAK motion system.
 * One shared vocabulary of easing curves, durations, springs and variants.
 * Mirror values live in app/globals.css as --ease-* and --dur-* for CSS-driven motion.
 */

export const ease = {
  /** Default for entrances: fast start, long soft landing. */
  out: [0.22, 1, 0.36, 1],
  /** Stronger deceleration for hero and large surfaces. */
  expo: [0.16, 1, 0.3, 1],
  /** Symmetric curve for curtains, overlays and state swaps. */
  inOut: [0.76, 0, 0.24, 1],
  /** Exits: accelerate away. */
  in: [0.55, 0, 1, 0.45],
} as const satisfies Record<string, readonly [number, number, number, number]>

export const duration = {
  instant: 0.12,
  fast: 0.2,
  base: 0.36,
  slow: 0.6,
  slower: 0.9,
} as const

export const stagger = {
  tight: 0.04,
  base: 0.07,
  loose: 0.12,
} as const

export const spring = {
  /** Cursor-follow for magnetic buttons: light and responsive. */
  magnetic: { type: 'spring', stiffness: 260, damping: 18, mass: 0.35 },
  /** UI state changes such as indicators and pills. */
  snappy: { type: 'spring', stiffness: 520, damping: 40, mass: 0.8 },
  /** Ambient follow effects such as gradient fields and parallax layers. */
  soft: { type: 'spring', stiffness: 90, damping: 22, mass: 0.6 },
} as const satisfies Record<string, Transition>

/** The same presets shaped for useSpring (which takes options without `type`). */
export const springConfig = {
  magnetic: { stiffness: 260, damping: 18, mass: 0.35 },
  soft: { stiffness: 90, damping: 22, mass: 0.6 },
  progress: { stiffness: 180, damping: 30, restDelta: 0.001 },
} as const

export const transition = {
  base: { duration: duration.base, ease: ease.out },
  slow: { duration: duration.slow, ease: ease.out },
  hero: { duration: duration.slower, ease: ease.expo },
  exit: { duration: duration.fast, ease: ease.in },
} as const satisfies Record<string, Transition>

/** Shared viewport settings for scroll reveals. */
export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' } as const

export const distance = {
  sm: 12,
  md: 24,
  lg: 40,
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: distance.md },
  visible: { opacity: 1, y: 0, transition: transition.slow },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.slow },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transition.slow },
}

export function staggerContainer(gap: number = stagger.base, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: gap, delayChildren } },
  }
}

/** Only run pointer-driven effects on devices with a precise, hover-capable pointer. */
export function hasFinePointer() {
  return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
}
