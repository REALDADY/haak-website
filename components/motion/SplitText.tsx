import { Fragment } from 'react'

export type SplitSegment = { text: string; className?: string }

interface SplitTextProps {
  segments: SplitSegment[]
  /** Offset for the stagger index so several SplitText blocks can chain. */
  startIndex?: number
}

/**
 * Word-by-word masked rise, driven by CSS (see .split-word / .split-inner in globals.css)
 * so it plays from first paint without waiting for hydration. Render inside an
 * aria-hidden wrapper next to an sr-only copy of the full sentence.
 */
export default function SplitText({ segments, startIndex = 0 }: SplitTextProps) {
  let index = startIndex
  const words = segments.flatMap((segment) =>
    segment.text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, className: segment.className, i: index++ }))
  )

  return (
    <>
      {words.map(({ word, className, i }, position) => (
        <Fragment key={`${word}-${i}`}>
          <span className="split-word">
            <span className={`split-inner ${className ?? ''}`} style={{ '--i': i } as React.CSSProperties}>
              {word}
            </span>
          </span>
          {position < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </>
  )
}
