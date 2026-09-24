import Link from 'next/link'
import Magnetic from '@/components/motion/Magnetic'
import { Reveal } from '@/components/motion/Reveal'
import { ArrowRightIcon } from '@/components/icons'

type CtaAction = { href: string; label: string; external?: boolean }

interface CtaBandProps {
  eyebrow: string
  title: string
  copy?: string
  primary: CtaAction
  secondary?: CtaAction
  className?: string
}

function ActionLink({ action, variant }: { action: CtaAction; variant: 'primary' | 'secondary' }) {
  const className = `${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} btn-lg w-full sm:w-auto`
  const content = (
    <>
      {action.label}
      {variant === 'primary' && <ArrowRightIcon />}
    </>
  )

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  )
}

/** Closing call-to-action card shared by every page. */
export default function CtaBand({ eyebrow, title, copy, primary, secondary, className = '' }: CtaBandProps) {
  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <Reveal>
          <div className="theme-dark noise relative isolate overflow-hidden rounded-[var(--radius-xl)] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="grid-lines" aria-hidden="true" />
            <div aria-hidden="true" className="glow-orb glow-cyan left-1/2 top-[-60%] h-[36rem] w-[36rem] -translate-x-1/2" />
            <div aria-hidden="true" className="glow-orb glow-yellow -bottom-40 -right-20 h-80 w-80" />
            <div className="hairline-top" aria-hidden="true" />
            <div className="relative z-[1] mx-auto max-w-3xl">
              <p className="eyebrow justify-center">{eyebrow}</p>
              <h2 className="t-h2 mt-5 text-balance">{title}</h2>
              {copy && <p className="t-lead mx-auto mt-5 max-w-2xl">{copy}</p>}
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Magnetic className="flex sm:inline-flex">
                  <ActionLink action={primary} variant="primary" />
                </Magnetic>
                {secondary && <ActionLink action={secondary} variant="secondary" />}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
