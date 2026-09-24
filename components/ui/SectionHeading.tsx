import { Reveal } from '@/components/motion/Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  align?: 'start' | 'center' | 'split'
  className?: string
  titleClassName?: string
}

/** Consistent eyebrow + heading + intro block used by every section. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'start',
  className = '',
  titleClassName = '',
}: SectionHeadingProps) {
  if (align === 'split') {
    return (
      <div className={`grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 ${className}`}>
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className={`t-h2 mt-5 max-w-[20ch] text-balance ${titleClassName}`}>{title}</h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.08}>
            <div className="t-lead max-w-xl lg:justify-self-end">{intro}</div>
          </Reveal>
        )}
      </div>
    )
  }

  const centered = align === 'center'
  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2 className={`t-h2 mt-5 text-balance ${titleClassName}`}>{title}</h2>
      {intro && <div className={`t-lead mt-5 ${centered ? 'mx-auto' : ''} max-w-2xl`}>{intro}</div>}
    </Reveal>
  )
}
