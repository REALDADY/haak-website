import { MetadataRoute } from 'next'
import { companyInfo } from '@/lib/site-data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${companyInfo.siteUrl}/sitemap.xml`,
  }
}
