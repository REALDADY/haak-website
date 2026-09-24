'use client'

import { LazyMotion, MotionConfig } from 'framer-motion'
import { transition } from '@/lib/motion'

const loadFeatures = () => import('@/lib/motion-features').then((mod) => mod.default)

/**
 * Global motion defaults. Components use the lightweight `m` elements and animation
 * features load after hydration. reducedMotion="user" strips transform animations for
 * users who ask for less motion.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={transition.base}>
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
