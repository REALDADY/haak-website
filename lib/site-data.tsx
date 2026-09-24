import type { ReactNode } from 'react'

export type Service = {
  slug: string
  href: string
  title: string
  shortTitle: string
  pillar: string
  description: string
  problem: string
  delivers: string
  highlights: string[]
  outcome: string
  icon: ReactNode
}

export type Project = {
  slug: string
  href: string
  client: string
  industry: string
  services: string[]
  technologies: string[]
  challenge: string
  role: string
  solution: string
  summary: string
  features: string[]
  outcome: string
  image: string
  imageAlt: string
  liveUrl?: string
}

export const companyInfo = {
  name: 'HAAK Solutions',
  siteUrl: 'https://www.haak-org.com',
  email: 'info@haak-org.com',
  location: 'Dubai, United Arab Emirates',
  whatsappDisplay: '+971 55 168 6040',
  whatsappUrl: 'https://wa.me/971551686040',
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/haak.ae/' },
    { label: 'X', href: 'https://x.com/ae_haak33258' },
  ],
}

export const whatsappLinks = {
  default: `${companyInfo.whatsappUrl}?text=${encodeURIComponent(
    "Hi HAAK Solutions, I'd like to discuss a project."
  )}`,
  project: `${companyInfo.whatsappUrl}?text=${encodeURIComponent(
    "Hi HAAK Solutions, I'd like to start a project."
  )}`,
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.9}>
      {children}
    </svg>
  )
}

export const services: Service[] = [
  {
    slug: 'web-development',
    href: '/services/web-development',
    title: 'Web and Software Development',
    shortTitle: 'Web and Software',
    pillar: 'Digital products',
    description:
      'Custom websites, web applications, portals, and digital platforms designed for performance, maintainability, and business clarity.',
    problem:
      'Businesses outgrow brochure sites, templates, and disconnected tools that cannot support better sales, operations, or customer experience.',
    delivers:
      'HAAK plans the structure, designs the interface, and builds responsive web experiences with clean implementation and launch support.',
    highlights: ['Corporate websites', 'Web applications', 'Business portals', 'API-ready builds'],
    outcome: 'A reliable digital product or website that explains the business clearly and supports real user action.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </Icon>
    ),
  },
  {
    slug: 'mobile-app',
    href: '/services/mobile-app',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    pillar: 'Digital products',
    description:
      'Mobile product planning, UX/UI, and cross-platform app development for teams launching or improving iOS and Android experiences.',
    problem:
      'App ideas often become too broad too early, making first releases slower, harder to test, and harder for users to understand.',
    delivers:
      'HAAK helps define the useful first version, design the user flow, build the app interface, and prepare the product for launch.',
    highlights: ['MVP scoping', 'iOS and Android', 'Product UX', 'Launch support'],
    outcome: 'A mobile experience with a clearer purpose, cleaner user journeys, and a practical path to iteration.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5h3m-6 2.25h9a2.25 2.25 0 012.25 2.25v12a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 015.25 18V6A2.25 2.25 0 017.5 3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17.25h2" />
      </Icon>
    ),
  },
  {
    slug: 'ui-ux',
    href: '/services/ui-ux',
    title: 'UI/UX and Product Design',
    shortTitle: 'UI/UX',
    pillar: 'Design',
    description:
      'Interface design, UX strategy, responsive layouts, and design systems for websites, apps, dashboards, and digital services.',
    problem:
      'Users lose confidence when screens feel crowded, unclear, inconsistent, or harder to use than the service should be.',
    delivers:
      'HAAK maps journeys, simplifies page flow, designs high-fidelity screens, and prepares clear handoff for implementation.',
    highlights: ['User flows', 'Wireframes', 'Product interfaces', 'Design systems'],
    outcome: 'A digital experience that is easier to understand, easier to navigate, and more credible from the first interaction.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75l6.75 3.75v8.25L12 19.5 5.25 15.75V7.5L12 3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V3.75m6.75 3.75L12 12 5.25 7.5" />
      </Icon>
    ),
  },
  {
    slug: 'seo',
    href: '/services/seo',
    title: 'SEO',
    shortTitle: 'SEO',
    pillar: 'Growth',
    description:
      'Technical SEO, content structure, and local search improvements for businesses that need better qualified organic visibility.',
    problem:
      'Many sites publish content without a clear search structure, technical foundation, or path from visit to enquiry.',
    delivers:
      'HAAK reviews technical issues, maps pages around intent, improves on-page structure, and recommends content that supports demand.',
    highlights: ['Technical audits', 'Local SEO', 'Keyword mapping', 'Content structure'],
    outcome: 'A cleaner organic foundation that helps the right people find, understand, and contact the business.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.35-5.4a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z" />
      </Icon>
    ),
  },
  {
    slug: 'social-media',
    href: '/services/social-media',
    title: 'Digital Marketing and Social Media',
    shortTitle: 'Marketing',
    pillar: 'Growth',
    description:
      'Campaign planning, content structure, social media support, and digital marketing execution for clearer market presence.',
    problem:
      'Posting without a message system makes a brand look active but not necessarily trusted, remembered, or easier to buy from.',
    delivers:
      'HAAK shapes content themes, campaign direction, channel structure, and digital assets that support the wider growth plan.',
    highlights: ['Content planning', 'Campaign direction', 'Social presence', 'Reporting'],
    outcome: 'A more consistent digital presence that supports trust, enquiries, and clearer service communication.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 6.75h9a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 015.25 15v-6A2.25 2.25 0 017.5 6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5h7.5M8.25 13.5h4.5" />
      </Icon>
    ),
  },
  {
    slug: 'business-growth',
    href: '/services/business-growth',
    title: 'Digital Growth Strategy',
    shortTitle: 'Growth Strategy',
    pillar: 'Strategy',
    description:
      'Positioning, funnel review, offer clarity, lead-generation planning, and digital roadmap support for growing businesses.',
    problem:
      'Marketing becomes expensive when the offer, website, channels, and follow-up path are not working together.',
    delivers:
      'HAAK reviews the digital system, identifies where momentum is being lost, and defines practical improvements before execution.',
    highlights: ['Positioning', 'Lead flows', 'Funnel review', 'Roadmaps'],
    outcome: 'A clearer route from attention to enquiry, supported by better structure and more focused execution.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 17.25L9 12l3.75 3.75L20.25 8.25M20.25 8.25H14.5m5.75 0V14" />
      </Icon>
    ),
  },
  {
    slug: 'it-solutions',
    href: '/services/it-solutions',
    title: 'IT Solutions and Infrastructure',
    shortTitle: 'IT Solutions',
    pillar: 'Technology operations',
    description:
      'Infrastructure, cybersecurity basics, cloud support, network setup, and managed IT guidance for businesses that need dependable operations.',
    problem:
      'Growth exposes weak systems: unreliable networks, unclear access control, poor documentation, and support gaps.',
    delivers:
      'HAAK assesses the environment, prioritizes risks, supports implementation, and helps teams keep the technical layer stable.',
    highlights: ['Networks', 'Cloud support', 'Cybersecurity basics', 'Managed support'],
    outcome: 'A more dependable operational foundation behind the websites, tools, and teams the business relies on.',
    icon: (
      <Icon>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5M5.25 5.25h13.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25h3m3.75 0h2.25" />
      </Icon>
    ),
  },
]

export const servicePillars = [
  {
    title: 'Digital products',
    description: 'Websites, software interfaces, apps, portals, and business platforms that need strong UX and reliable delivery.',
    services: ['Web and Software Development', 'Mobile App Development', 'UI/UX and Product Design'],
  },
  {
    title: 'Growth systems',
    description: 'SEO, digital marketing, social content, and lead journeys that make the digital presence easier to find and act on.',
    services: ['SEO', 'Digital Marketing and Social Media', 'Digital Growth Strategy'],
  },
  {
    title: 'Technology operations',
    description: 'Infrastructure and support work for teams that need the technical layer behind the business to be more dependable.',
    services: ['IT Solutions and Infrastructure'],
  },
]

export const capabilityStrip = [
  'Dubai-based delivery partner',
  'Websites, apps, and business platforms',
  'Design, engineering, SEO, and support',
  'Real project screenshots available',
]

export const workflow = [
  {
    step: '01',
    title: 'Discover',
    description: 'Clarify the business context, users, goals, existing assets, and the problem the digital experience needs to solve.',
  },
  {
    step: '02',
    title: 'Define',
    description: 'Shape scope, content structure, user journeys, service architecture, and the delivery plan before production begins.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Create interfaces, page systems, and interaction patterns that make the experience clearer and more credible.',
  },
  {
    step: '04',
    title: 'Build',
    description: 'Implement responsive pages, products, integrations, and technical foundations with QA throughout the process.',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Prepare content, test key journeys, support deployment readiness, and hand over the working digital asset.',
  },
  {
    step: '06',
    title: 'Improve',
    description: 'Use search, analytics, support feedback, and user behavior to refine the system after launch.',
  },
]

export const differentiators = [
  {
    title: 'Digital product thinking, not only marketing pages',
    description: 'The work starts with user journeys, business needs, and what the experience must help people do.',
  },
  {
    title: 'Design and engineering stay connected',
    description: 'Interface design, front-end implementation, SEO structure, and support planning are treated as one system.',
  },
  {
    title: 'Built for owners and operators',
    description: 'Recommendations are explained in practical language so both technical and nontechnical stakeholders can move forward.',
  },
]

export const projects: Project[] = [
  {
    slug: 'ar-green',
    href: '/projects/ar-green',
    client: 'AR Green',
    industry: 'Landscaping and e-commerce',
    services: ['SEO', 'Web Development'],
    technologies: ['Web development', 'Search structure', 'Responsive UI'],
    challenge:
      'The business needed a clearer digital storefront and stronger presentation for customers comparing landscaping and product options online.',
    role: 'Website structure, digital storefront presentation, and search-focused improvements.',
    solution:
      'HAAK organized the site experience around easier browsing, clearer product/service presentation, and a stronger path from visit to enquiry.',
    summary:
      'A cleaner web presence for a landscaping and e-commerce business, supported by real website screenshots from the existing HAAK assets.',
    features: ['Homepage structure', 'Product and service presentation', 'Responsive page design', 'Search-oriented content organization'],
    outcome: 'The project created a more usable storefront experience and a clearer foundation for digital marketing.',
    image: '/ar-green-homepage.png',
    imageAlt: 'AR Green website homepage screenshot',
  },
  {
    slug: 'rswater-shop',
    href: '/projects/rswater-shop',
    client: 'RS Water Shop',
    industry: 'E-commerce and water delivery',
    services: ['Web Development', 'UI/UX'],
    technologies: ['WordPress', 'WooCommerce', 'Responsive UI'],
    challenge:
      'The shop experience needed to make water products easier to browse, order, and understand across customer devices.',
    role: 'E-commerce interface, checkout flow presentation, and customer-facing website support.',
    solution:
      'HAAK supported a web shop experience focused on clear product presentation, ordering flow, and responsive customer access.',
    summary:
      'An e-commerce website for water ordering, represented with real screenshots available in the repository.',
    features: ['Product catalogue', 'Shopping flow', 'Checkout presentation', 'Mobile-friendly storefront'],
    outcome: 'The work supports a clearer online ordering experience with project detail focused on visible scope and delivered systems.',
    image: '/rswater-shop-products.png',
    imageAlt: 'RS Water Shop product listing page screenshot',
    liveUrl: 'https://rswater.ae',
  },
  {
    slug: 'al-rawdah-springs',
    href: '/projects/al-rawdah-springs',
    client: 'Al Rawdah Springs',
    industry: 'Consumer brand and distribution',
    services: ['Branding', 'Web Development', 'SEO'],
    technologies: ['Website design', 'Responsive UI', 'Search structure'],
    challenge:
      'The brand needed a more credible digital presence for customers and business enquiries across product and distribution touchpoints.',
    role: 'Website presentation, brand-aligned page structure, and digital credibility improvements.',
    solution:
      'HAAK refreshed the online presentation with clearer content hierarchy, stronger product context, and responsive website structure.',
    summary:
      'A refreshed web presence for a water brand, using real interface screenshots already available in HAAK assets.',
    features: ['Brand-led website presentation', 'Product-focused content', 'Responsive interface', 'SEO-ready structure'],
    outcome: 'The project strengthened the online presentation and made the brand easier to assess digitally.',
    image: '/al-rawdah-springs-home.png',
    imageAlt: 'Al Rawdah Springs homepage screenshot',
    liveUrl: 'https://rswater.ae',
  },
]

export const caseStudies = projects

export const technologyGroups = [
  {
    title: 'Frontend and web',
    items: ['React', 'Next.js', 'Responsive interfaces', 'Performance-minded builds'],
  },
  {
    title: 'Commerce and CMS',
    items: ['WordPress', 'WooCommerce', 'Content structure', 'Website administration'],
  },
  {
    title: 'Product and growth',
    items: ['UI/UX design', 'SEO structure', 'Analytics planning', 'Campaign assets'],
  },
  {
    title: 'Operations',
    items: ['IT infrastructure', 'Cloud support', 'Network setup', 'Cybersecurity basics'],
  },
]

export const industries = [
  'Retail and e-commerce',
  'Consumer products',
  'Landscaping and services',
  'Professional services',
  'Startups and founder-led teams',
  'Internal business operations',
]

export const includedWithEveryProject = [
  'Clear scope and delivery milestones',
  'Responsive design and implementation',
  'Performance and accessibility checks',
  'Practical QA before launch',
  'Launch support and handover guidance',
  'Direct communication across strategy, design, and delivery',
]

export const aboutNarrative = [
  {
    title: 'Plan around the business problem',
    description: 'Before design or development starts, HAAK clarifies what the digital experience must help the business achieve.',
  },
  {
    title: 'Make the experience easier to understand',
    description: 'Information architecture, content hierarchy, and UX are used to reduce confusion and improve trust.',
  },
  {
    title: 'Build for continued use',
    description: 'The goal is a digital asset the team can launch, operate, improve, and support after the first release.',
  },
]

export const disciplineLeads = [
  {
    title: 'Product and website strategy',
    description: 'Scope definition, service architecture, user journeys, project roadmap, and launch planning.',
  },
  {
    title: 'Brand, UI, and UX design',
    description: 'Interface systems, page layouts, responsive states, design direction, and user experience improvements.',
  },
  {
    title: 'Web and app delivery',
    description: 'Websites, web apps, mobile app interfaces, commerce experiences, and front-end implementation.',
  },
  {
    title: 'Growth and technical support',
    description: 'SEO, digital marketing support, analytics planning, IT infrastructure, and ongoing improvement.',
  },
]

export const clientFit = [
  {
    title: 'Businesses upgrading a dated digital presence',
    description: 'Teams whose current site or app no longer reflects the quality of the business.',
  },
  {
    title: 'Operators building a practical digital product',
    description: 'Companies that need a portal, storefront, dashboard, app, or internal platform to work better.',
  },
  {
    title: 'Founders who need clearer execution',
    description: 'Decision-makers who want direct communication, structured delivery, and practical recommendations.',
  },
]

export const contactPromises = [
  'Clear next steps after reviewing your enquiry',
  'A practical recommendation before scope expands',
  'Email or WhatsApp fallback if the form is not configured',
]

export const budgetOptions = [
  'Website or landing page',
  'Web app or business platform',
  'Mobile app',
  'SEO or digital growth',
  'IT solutions or support',
  'Not sure yet',
]
