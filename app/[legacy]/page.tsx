import { notFound, redirect } from 'next/navigation'

const legacyRedirects: Record<string, string> = {
  Home: '/',
  About: '/about',
  Services: '/services',
  Portfolio: '/portfolio',
  Contact: '/contact',
}

// Static export: prebuild only the known legacy URLs; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(legacyRedirects).map((legacy) => ({ legacy }))
}

type LegacyPageProps = {
  params: { legacy: string }
}

export default function LegacyPage({ params }: LegacyPageProps) {
  const destination = legacyRedirects[params.legacy]

  if (!destination) {
    notFound()
  }

  redirect(destination)
}

