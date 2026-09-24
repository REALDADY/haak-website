import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export default function NotFound() {
  return (
    <section className="page-hero theme-dark noise flex min-h-[80vh] items-center">
      <div className="grid-lines" aria-hidden="true" />
      <div aria-hidden="true" className="glow-orb glow-cyan left-1/2 top-0 ml-[-20rem] h-[40rem] w-[40rem] opacity-70" />
      <div className="container-x relative z-[1] text-center">
        <p className="eyebrow enter-fade justify-center">404</p>
        <p
          aria-hidden="true"
          className="t-gradient enter-fade mt-6 font-display text-[clamp(6rem,22vw,14rem)] font-bold leading-none tracking-[-0.06em]"
          style={{ '--d': '80ms' } as React.CSSProperties}
        >
          404
        </p>
        <h1 className="t-h2 enter-fade mt-4 text-white" style={{ '--d': '160ms' } as React.CSSProperties}>
          Page not found
        </h1>
        <p className="t-lead enter-fade mx-auto mt-4 max-w-md" style={{ '--d': '240ms' } as React.CSSProperties}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div
          className="enter-fade mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ '--d': '320ms' } as React.CSSProperties}
        >
          <Link href="/" className="btn-primary btn-lg">
            Go Home
            <ArrowRightIcon />
          </Link>
          <Link href="/contact" className="btn-secondary btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
