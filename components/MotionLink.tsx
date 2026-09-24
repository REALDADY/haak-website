'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import Magnetic from '@/components/motion/Magnetic'

type MotionLinkProps = ComponentProps<typeof Link> & {
  magnetic?: boolean
  wrapperClassName?: string
}

/** Next.js Link with an optional magnetic hover. */
export default function MotionLink({ magnetic = false, wrapperClassName = 'inline-flex', ...props }: MotionLinkProps) {
  if (!magnetic) {
    return <Link {...props} />
  }

  return (
    <Magnetic className={wrapperClassName}>
      <Link {...props} />
    </Magnetic>
  )
}
