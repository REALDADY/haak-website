import SplitText from '@/components/motion/SplitText'

interface PageHeroProps {
  eyebrow: string
  title: string
  /** Number of trailing words rendered with the brand gradient. */
  highlightLast?: number
  intro?: React.ReactNode
  actions?: React.ReactNode
  aside?: React.ReactNode
  before?: React.ReactNode
  children?: React.ReactNode
}

/**
 * Shared dark hero for inner pages. Entrance motion is CSS-driven (split words + staged fades)
 * so it plays from first paint and is fully disabled by prefers-reduced-motion.
 */
export default function PageHero({
  eyebrow,
  title,
  highlightLast = 0,
  intro,
  actions,
  aside,
  before,
  children,
}: PageHeroProps) {
  const words = title.split(' ')
  const cut = Math.max(0, words.length - highlightLast)
  const segments = [
    { text: words.slice(0, cut).join(' ') },
    ...(highlightLast > 0 ? [{ text: words.slice(cut).join(' '), className: 't-gradient' }] : []),
  ]

  return (
    <section className="page-hero theme-dark noise">
      <div className="grid-lines" aria-hidden="true" />
      <div aria-hidden="true" className="glow-orb glow-cyan -right-40 -top-32 h-[34rem] w-[34rem] opacity-70" />
      <div className="container-x">
        {before && (
          <div className="enter-fade mb-10" style={{ '--d': '0ms' } as React.CSSProperties}>
            {before}
          </div>
        )}
        <div className={`grid gap-12 ${aside ? 'lg:grid-cols-[1.2fr_0.85fr] lg:items-end lg:gap-16' : ''}`}>
          <div className="min-w-0">
            <p className="eyebrow enter-fade" style={{ '--d': '0ms' } as React.CSSProperties}>
              {eyebrow}
            </p>
            <h1 className="t-h1 mt-6 max-w-[18ch] text-balance text-white lg:max-w-[20ch]">
              <span className="sr-only">{title}</span>
              <span aria-hidden="true">
                <SplitText segments={segments} />
              </span>
            </h1>
            {intro && (
              <div className="t-lead enter-fade mt-7 max-w-2xl" style={{ '--d': '420ms' } as React.CSSProperties}>
                {intro}
              </div>
            )}
            {actions && (
              <div
                className="enter-fade mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                style={{ '--d': '540ms' } as React.CSSProperties}
              >
                {actions}
              </div>
            )}
            {children && (
              <div className="enter-fade mt-10" style={{ '--d': '660ms' } as React.CSSProperties}>
                {children}
              </div>
            )}
          </div>
          {aside && (
            <div className="enter-fade min-w-0" style={{ '--d': '380ms' } as React.CSSProperties}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
