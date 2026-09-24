import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[70vh] items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <p className="section-label justify-center">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold text-[var(--text-primary)]">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--text-soft)]">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="button-primary"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="button-secondary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
