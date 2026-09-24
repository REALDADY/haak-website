import { notFound, redirect } from 'next/navigation'

const legacyRedirects: Record<string, string> = {
  Home: '/',
  About: '/about',
  Services: '/services',
  Portfolio: '/portfolio',
  Contact: '/contact',
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

