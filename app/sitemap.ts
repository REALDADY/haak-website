import { MetadataRoute } from 'next'
import { companyInfo, projects } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/services/seo',
    '/services/social-media',
    '/services/web-development',
    '/services/ui-ux',
    '/services/mobile-app',
    '/services/business-growth',
    '/services/it-solutions',
    '/portfolio',
    ...projects.map((project) => project.href),
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${companyInfo.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services/') ? 0.8 : 0.7,
  }))
}
