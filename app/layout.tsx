import type { Metadata } from 'next'
import { Manrope, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Preloader from '@/components/Preloader'
import { companyInfo } from '@/lib/site-data'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.siteUrl),
  title: {
    template: '%s | HAAK Solutions Dubai',
    default: 'HAAK Solutions - Software, Web, Apps and Digital Growth Dubai',
  },
  description:
    'HAAK Solutions is a Dubai software and digital technology company for websites, web applications, mobile apps, UI/UX, SEO, digital marketing, and IT solutions.',
  keywords: [
    'digital marketing agency Dubai',
    'web development company Dubai',
    'SEO agency Dubai',
    'social media marketing Dubai',
    'IT solutions Dubai',
    'mobile app development UAE',
    'UI UX design agency Dubai',
    'business growth consulting Dubai',
  ],
  authors: [{ name: companyInfo.name, url: companyInfo.siteUrl }],
  creator: companyInfo.name,
  icons: {
    icon: '/logo3.png',
    shortcut: '/logo3.png',
    apple: '/logo3.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: companyInfo.siteUrl,
    siteName: companyInfo.name,
    title: 'HAAK Solutions - Software and Digital Technology Company in Dubai',
    description:
      'Websites, applications, UI/UX, SEO, digital marketing, and technology support for businesses in Dubai and beyond.',
  },
  twitter: {
    card: 'summary',
    title: 'HAAK Solutions - Software and Digital Technology Dubai',
    description: 'Websites, apps, UI/UX, SEO, digital marketing, and IT solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': companyInfo.siteUrl,
  name: companyInfo.name,
  description:
    'Software and digital technology company in Dubai offering websites, applications, UI/UX, SEO, digital marketing, and IT solutions.',
  url: companyInfo.siteUrl,
  telephone: companyInfo.whatsappDisplay,
  email: companyInfo.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.2048',
    longitude: '55.2708',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
  areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'UAE'],
  sameAs: companyInfo.socialLinks.map((link) => link.href),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text-primary)] antialiased">
        <Preloader />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        {/* Google Analytics 4 - replace G-XXXXXXXXXX with your Measurement ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" /> */}
        {/* Meta Pixel - replace YOUR_PIXEL_ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)...` }} /> */}
      </body>
    </html>
  )
}
