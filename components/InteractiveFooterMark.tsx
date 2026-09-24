'use client'

import Image from 'next/image'
import { useReducedMotion } from 'framer-motion'
import { useState } from 'react'

export default function InteractiveFooterMark() {
  const reduceMotion = useReducedMotion()
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  return (
    <div
      className="footer-logo-showcase relative min-h-[420px]"
      onPointerMove={(event) => {
        if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return
        const rect = event.currentTarget.getBoundingClientRect()
        setPointer({
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5,
        })
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
      style={{ '--fx': pointer.x, '--fy': pointer.y } as React.CSSProperties}
    >
      <div className="footer-logo-card">
        <Image
          src="/logo3.png"
          alt="HAAK Solutions logo"
          width={720}
          height={720}
          className="h-full w-full object-contain"
          sizes="(max-width: 768px) 80vw, 520px"
        />
      </div>
    </div>
  )
}
