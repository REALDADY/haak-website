import type { Metadata } from 'next'
import { companyInfo } from '@/lib/site-data'

export type ServiceDetail = {
  slug:
    | 'seo'
    | 'social-media'
    | 'web-development'
    | 'ui-ux'
    | 'mobile-app'
    | 'business-growth'
    | 'it-solutions'
  title: string
  metaDescription: string
  eyebrow: string
  headline: string
  intro: string
  primaryCta: string
  secondaryCta: string
  bestFor: string
  heroTags: string[]
  capabilitiesTitle: string
  capabilitiesIntro: string
  capabilities: Array<{ title: string; description: string }>
  processTitle: string
  process: Array<{ step: string; title: string; description: string }>
  deliverablesTitle: string
  deliverables: string[]
  audienceTitle: string
  audiences: Array<{ title: string; description: string }>
  closingHeadline: string
  closingCopy: string
  closingPrimaryCta: string
}

export const serviceDetails: Record<ServiceDetail['slug'], ServiceDetail> = {
  seo: {
    slug: 'seo',
    title: 'SEO Services Dubai - Technical SEO, Content, and Local Search',
    metaDescription:
      'SEO services in Dubai for businesses that want more qualified traffic, stronger local visibility, and a clearer route from search to lead.',
    eyebrow: 'SEO Services Dubai',
    headline: 'Rank where serious customers are already searching.',
    intro:
      'We combine technical SEO, content architecture, and local search strategy to build visibility that compounds over time instead of disappearing when ads stop.',
    primaryCta: 'Request an SEO audit',
    secondaryCta: 'Talk through your search goals',
    bestFor: 'Best for service businesses, local operators, and brands that need qualified inbound demand.',
    heroTags: ['Technical SEO', 'Local SEO', 'Content strategy', 'Lead-focused reporting'],
    capabilitiesTitle: 'What the work actually covers',
    capabilitiesIntro:
      'The goal is not rankings in isolation. It is better visibility for the searches that are most likely to become real enquiries.',
    capabilities: [
      {
        title: 'Technical foundations',
        description:
          'Site structure, crawlability, indexation, page speed, and the technical issues that quietly limit rankings.',
      },
      {
        title: 'Intent-led keyword mapping',
        description:
          'We organize search opportunities around commercial intent so content supports the buyer journey, not just traffic volume.',
      },
      {
        title: 'Local visibility',
        description:
          'Google Business Profile, location relevance, and local trust signals for Dubai and UAE search behavior.',
      },
      {
        title: 'Content growth',
        description:
          'Editorial plans and on-page improvements that help the site answer better, rank better, and convert better.',
      },
    ],
    processTitle: 'Our SEO process',
    process: [
      {
        step: '01',
        title: 'Audit and opportunity mapping',
        description:
          'We review your current visibility, technical issues, and where competitors are capturing attention first.',
      },
      {
        step: '02',
        title: 'Search strategy',
        description:
          'We prioritize the queries, pages, and content themes most likely to drive commercial value.',
      },
      {
        step: '03',
        title: 'Implementation and publishing',
        description:
          'We improve pages, publish supporting content, and strengthen the site architecture around priority topics.',
      },
      {
        step: '04',
        title: 'Reporting and iteration',
        description:
          'You get plain-language reporting tied to rankings, traffic quality, and movement toward leads.',
      },
    ],
    deliverablesTitle: 'Typical deliverables',
    deliverables: [
      'Technical SEO audit and priority fixes',
      'Keyword and page mapping',
      'On-page optimisation',
      'Local SEO setup and refinement',
      'Content recommendations and briefs',
      'Internal linking structure',
      'Monthly reporting and actions',
      'Competitor visibility review',
    ],
    audienceTitle: 'Who this fits best',
    audiences: [
      {
        title: 'Local service businesses',
        description:
          'For teams that need to show up when people are actively comparing providers in Dubai or across the UAE.',
      },
      {
        title: 'Brands reducing ad dependence',
        description:
          'For businesses that want organic traffic to support growth instead of relying only on paid acquisition.',
      },
      {
        title: 'Sites with weak content structure',
        description:
          'For companies whose site already exists but is not clearly organized around search intent and conversion.',
      },
    ],
    closingHeadline: 'Ready to improve organic visibility with a clearer plan?',
    closingCopy:
      'We can review the current site, show where search opportunity is being missed, and recommend the highest-leverage fixes first.',
    closingPrimaryCta: 'Get a free SEO audit',
  },
  'social-media': {
    slug: 'social-media',
    title: 'Social Media Marketing Dubai - Strategy, Content, and Paid Campaigns',
    metaDescription:
      'Social media marketing in Dubai across content strategy, paid social, and channel management for brands that want more than surface-level activity.',
    eyebrow: 'Social Media Marketing Dubai',
    headline: 'Build a social presence that looks sharp and actually drives pipeline.',
    intro:
      'We design a clearer content system, stronger campaign direction, and channel execution that turns attention into trust and trust into enquiries.',
    primaryCta: 'Get a social audit',
    secondaryCta: 'Discuss content and campaign needs',
    bestFor: 'Best for brands that need consistent presence without internal content chaos.',
    heroTags: ['Instagram', 'LinkedIn', 'TikTok', 'Paid social'],
    capabilitiesTitle: 'What we manage',
    capabilitiesIntro:
      'We focus on the parts of social that affect perception and commercial outcomes, not just posting for activity.',
    capabilities: [
      {
        title: 'Content planning',
        description:
          'Editorial themes, campaign hooks, content cadence, and post structures that fit the audience and offer.',
      },
      {
        title: 'Creative direction',
        description:
          'Stronger visual consistency, clearer messaging, and asset direction that feels more premium across channels.',
      },
      {
        title: 'Paid amplification',
        description:
          'Targeted campaigns that support reach, retargeting, lead generation, and offer visibility with better control.',
      },
      {
        title: 'Performance review',
        description:
          'Monthly readouts on reach, engagement quality, lead signals, and what should change next.',
      },
    ],
    processTitle: 'Our social process',
    process: [
      {
        step: '01',
        title: 'Brand and audience review',
        description:
          'We assess current channels, visual consistency, audience fit, and where the messaging feels weak or generic.',
      },
      {
        step: '02',
        title: 'Content strategy and calendar',
        description:
          'We shape a repeatable content plan around topics, formats, and channel-specific intent.',
      },
      {
        step: '03',
        title: 'Create and launch',
        description:
          'Assets, captions, campaigns, and scheduling are built into one cleaner execution rhythm.',
      },
      {
        step: '04',
        title: 'Refine with data',
        description:
          'We monitor which messages pull attention and which actually support leads or stronger perception.',
      },
    ],
    deliverablesTitle: 'Typical deliverables',
    deliverables: [
      'Social audit and strategy',
      'Monthly content calendar',
      'Post and reel creative direction',
      'Copywriting support',
      'Paid campaign setup and management',
      'Channel growth recommendations',
      'Monthly analytics review',
      'Offer and campaign hooks',
    ],
    audienceTitle: 'Who this fits best',
    audiences: [
      {
        title: 'Founder-led brands',
        description:
          'For teams where social still depends too much on the founder posting whenever there is time.',
      },
      {
        title: 'Service businesses',
        description:
          'For businesses that need clearer authority, better consistency, and stronger social proof in the market.',
      },
      {
        title: 'Brands preparing to scale',
        description:
          'For teams that need a repeatable channel engine before increasing paid distribution or partnerships.',
      },
    ],
    closingHeadline: 'Want social content that feels more premium and more intentional?',
    closingCopy:
      'We can review the current channels, identify weak spots in the brand presentation, and recommend the strongest next move.',
    closingPrimaryCta: 'Request a social audit',
  },
  'web-development': {
    slug: 'web-development',
    title: 'Web Development Dubai - High-Performance Websites and Web Apps',
    metaDescription:
      'Web development in Dubai for premium websites and web applications designed around performance, credibility, and conversion.',
    eyebrow: 'Web Development Dubai',
    headline: 'Websites that look premium, load fast, and make the offer easier to buy.',
    intro:
      'We design and build websites that improve how the business is perceived, explain services more clearly, and remove friction from the enquiry or buying journey.',
    primaryCta: 'Start your web project',
    secondaryCta: 'Talk through scope and timeline',
    bestFor: 'Best for businesses upgrading from dated sites, generic templates, or weak conversion flows.',
    heroTags: ['Next.js', 'Responsive UX', 'CMS-ready', 'Performance-first'],
    capabilitiesTitle: 'What the build can include',
    capabilitiesIntro:
      'Every project starts with structure and clarity first, then we layer in the design system and technical delivery needed to support growth.',
    capabilities: [
      {
        title: 'Service-led marketing sites',
        description:
          'Sites designed to explain the offer clearly, build confidence fast, and create a more intentional conversion path.',
      },
      {
        title: 'Landing and campaign pages',
        description:
          'Focused pages for paid traffic, launches, and specific service offers where clarity and speed matter most.',
      },
      {
        title: 'Web applications',
        description:
          'Operational dashboards, portals, and custom web tools that need stronger UX and front-end engineering.',
      },
      {
        title: 'Performance and SEO readiness',
        description:
          'Clean implementation, responsive behavior, structured content, and technical foundations that are easier to scale.',
      },
    ],
    processTitle: 'Our web process',
    process: [
      {
        step: '01',
        title: 'Scope and service architecture',
        description:
          'We define the content structure, user journey, and what the site needs to communicate first.',
      },
      {
        step: '02',
        title: 'Design direction',
        description:
          'We establish the visual language, layout system, and interaction tone before committing to build.',
      },
      {
        step: '03',
        title: 'Build and refine',
        description:
          'We implement the front end, responsive behavior, and polish details that shape trust and ease of use.',
      },
      {
        step: '04',
        title: 'Launch and support',
        description:
          'We test, ship, and help your team move forward with a cleaner structure and better digital asset.',
      },
    ],
    deliverablesTitle: 'Typical deliverables',
    deliverables: [
      'Custom website or web app',
      'Responsive design implementation',
      'Clear content hierarchy and page flow',
      'CMS or content editing support',
      'SEO-ready technical structure',
      'Analytics and conversion tracking',
      'Performance optimisation',
      'Launch and handover support',
    ],
    audienceTitle: 'Who this fits best',
    audiences: [
      {
        title: 'Businesses with outdated sites',
        description:
          'For teams whose current website is weakening their credibility or failing to explain services properly.',
      },
      {
        title: 'Agencies and consultancies',
        description:
          'For service businesses that need a stronger premium feel to match the quality of their work.',
      },
      {
        title: 'Operators launching new offers',
        description:
          'For teams introducing a new service line, product, or funnel that needs its own digital structure.',
      },
    ],
    closingHeadline: 'Ready to turn the website into a stronger sales asset?',
    closingCopy:
      'We can review the current experience, identify what is reducing trust, and map the fastest path to a cleaner rebuild.',
    closingPrimaryCta: 'Request a web proposal',
  },
  'ui-ux': {
    slug: 'ui-ux',
    title: 'UI UX Design Dubai - Interface Design, UX Strategy, and Design Systems',
    metaDescription:
      'UI UX design in Dubai for websites, products, and digital services that need stronger trust, clearer journeys, and more premium presentation.',
    eyebrow: 'UI and UX Design Dubai',
    headline: 'Design systems and interfaces that feel more premium the moment they open.',
    intro:
      'We shape layout, navigation, visual hierarchy, and interaction patterns so people understand the product faster and feel more confidence using it.',
    primaryCta: 'Start a design project',
    secondaryCta: 'Talk through product UX needs',
    bestFor: 'Best for products or sites that work functionally but still feel generic, crowded, or unclear.',
    heroTags: ['UX strategy', 'Wireframes', 'Design systems', 'Prototype-ready'],
    capabilitiesTitle: 'Where design helps most',
    capabilitiesIntro:
      'We use design to remove hesitation, increase clarity, and create a more deliberate relationship between the user and the brand.',
    capabilities: [
      {
        title: 'User journeys and page flow',
        description:
          'We simplify the route from entry point to action so the interface supports movement instead of introducing doubt.',
      },
      {
        title: 'Visual hierarchy',
        description:
          'Typography, spacing, contrast, and modular layout systems that make the product feel calm, premium, and easier to scan.',
      },
      {
        title: 'Component systems',
        description:
          'Reusable UI patterns that keep the product or site coherent instead of screen-by-screen inconsistent.',
      },
      {
        title: 'Prototype and handoff',
        description:
          'Design files that are easier to review, iterate, and engineer without losing polish in implementation.',
      },
    ],
    processTitle: 'Our design process',
    process: [
      {
        step: '01',
        title: 'Research and discovery',
        description:
          'We review business context, audience behavior, and where the current experience feels noisy or weak.',
      },
      {
        step: '02',
        title: 'Wireframes and structure',
        description:
          'We define content flow, screen hierarchy, and navigation before visual polish enters the process.',
      },
      {
        step: '03',
        title: 'High-fidelity design',
        description:
          'We build the visual language, components, and premium interaction cues that shape perception.',
      },
      {
        step: '04',
        title: 'Prototype and delivery',
        description:
          'We prepare the design for validation, developer handoff, and smoother implementation.',
      },
    ],
    deliverablesTitle: 'Typical deliverables',
    deliverables: [
      'UX review and recommendations',
      'User flows and wireframes',
      'High-fidelity UI design',
      'Component and design system setup',
      'Responsive screen behavior',
      'Interactive prototype',
      'Brand-aligned visual direction',
      'Developer-ready handoff',
    ],
    audienceTitle: 'Who this fits best',
    audiences: [
      {
        title: 'Products with clunky flows',
        description:
          'For teams that know the product works, but feel users still hesitate, drop off, or need too much explanation.',
      },
      {
        title: 'Brands with inconsistent visuals',
        description:
          'For businesses that have grown quickly and now need a more coherent digital language across pages or screens.',
      },
      {
        title: 'Website redesign projects',
        description:
          'For teams that want the site to feel like a premium product instead of a template-led marketing page.',
      },
    ],
    closingHeadline: 'Want the interface to feel sharper, calmer, and more valuable?',
    closingCopy:
      'We can review the current experience and recommend the UX changes most likely to improve trust and movement.',
    closingPrimaryCta: 'Get a design quote',
  },
  'mobile-app': {
    slug: 'mobile-app',
    title: 'Mobile App Development Dubai - iOS and Android Product Delivery',
    metaDescription:
      'Mobile app development in Dubai for cross-platform products that need stronger design, faster execution, and more reliable launch support.',
    eyebrow: 'Mobile App Development Dubai',
    headline: 'Build mobile products people actually want to return to.',
    intro:
      'We combine product thinking, interface design, and front-end delivery to build mobile experiences that feel useful, clear, and launch-ready across iOS and Android.',
    primaryCta: 'Discuss your app idea',
    secondaryCta: 'Talk through MVP scope',
    bestFor: 'Best for businesses validating an app concept or upgrading an existing mobile experience.',
    heroTags: ['iOS and Android', 'React Native', 'MVP delivery', 'Launch support'],
    capabilitiesTitle: 'What we help you shape',
    capabilitiesIntro:
      'A good app needs more than code. It needs the right scope, a clearer product flow, and a launch path that stays grounded in user value.',
    capabilities: [
      {
        title: 'MVP scope definition',
        description:
          'We help decide what must ship first so the product gets to market with clarity instead of unnecessary weight.',
      },
      {
        title: 'Cross-platform delivery',
        description:
          'Shared front-end implementation for iOS and Android with attention to responsive behavior and usability details.',
      },
      {
        title: 'Product UX',
        description:
          'Screen flow, onboarding, and interaction design aimed at reducing confusion and increasing retention.',
      },
      {
        title: 'Launch readiness',
        description:
          'Store submission support, polish rounds, and practical post-launch adjustments once real usage begins.',
      },
    ],
    processTitle: 'Our app process',
    process: [
      {
        step: '01',
        title: 'Product discovery',
        description:
          'We define user goals, core features, and where the first version needs to deliver value fastest.',
      },
      {
        step: '02',
        title: 'UX and prototype',
        description:
          'We shape the experience visually and structurally before development accelerates.',
      },
      {
        step: '03',
        title: 'Build and QA',
        description:
          'We develop the app in iterations, test core journeys, and polish the details that affect trust and ease of use.',
      },
      {
        step: '04',
        title: 'Launch and learn',
        description:
          'We support deployment and use early product feedback to sharpen the next release cycle.',
      },
    ],
    deliverablesTitle: 'Typical deliverables',
    deliverables: [
      'Product scope and roadmap',
      'App UX and UI design',
      'Cross-platform codebase',
      'API and backend integration support',
      'Push notification and account flows',
      'Store submission support',
      'Launch QA',
      'Post-launch support period',
    ],
    audienceTitle: 'Who this fits best',
    audiences: [
      {
        title: 'MVP founders',
        description:
          'For teams that need a focused first version that proves demand before overbuilding features.',
      },
      {
        title: 'Businesses expanding into mobile',
        description:
          'For companies adding a mobile layer to an existing service, product, or operations model.',
      },
      {
        title: 'Products needing a UX reset',
        description:
          'For apps that already exist but feel dated, inconsistent, or harder to use than they should be.',
      },
    ],
    closingHeadline: 'Ready to scope an app with a sharper product lens?',
    closingCopy:
      'We can review the idea, define the first meaningful release, and map the design and build path with more clarity.',
    closingPrimaryCta: 'Request app scoping',
  },
  'business-growth': {
    slug: 'business-growth',
    title: 'Business Growth Strategy Dubai - Funnels, Positioning, and Lead Generation',
    metaDescription:
      'Business growth strategy in Dubai for companies that need clearer positioning, stronger lead systems, and better alignment between marketing and revenue.',
    eyebrow: 'Business Growth Strategy',
    headline: 'Turn scattered marketing activity into a clearer route to revenue.',
    intro:
      'We help define where growth is being lost, what channels and offers deserve focus, and how to improve the digital system around lead generation and conversion.',
    primaryCta: 'Book a growth call',
    secondaryCta: 'Discuss your lead pipeline',
    bestFor: 'Best for businesses with traction that need more structure around positioning, offers, and conversion.',
    heroTags: ['Positioning', 'Lead generation', 'Funnels', 'Automation'],
    capabilitiesTitle: 'What growth strategy includes',
    capabilitiesIntro:
      'We look beyond channels in isolation and focus on the commercial system that connects messaging, demand, and conversion.',
    capabilities: [
      {
        title: 'Offer and positioning clarity',
        description:
          'We help simplify the value proposition so it lands faster and supports stronger conversion across pages and campaigns.',
      },
      {
        title: 'Lead system design',
        description:
          'We shape the route from attention to enquiry using landing pages, forms, calls to action, and handoff logic.',
      },
      {
        title: 'Funnel improvement',
        description:
          'We identify where interest is leaking away and redesign key steps to reduce confusion and hesitation.',
      },
      {
        title: 'Growth measurement',
        description:
          'We prioritize the signals that matter commercially so decisions are not driven by vanity metrics alone.',
      },
    ],
    processTitle: 'Our growth process',
    process: [
      {
        step: '01',
        title: 'Audit the current growth system',
        description:
          'We review the site, channels, funnel flow, and where momentum breaks down between visibility and conversion.',
      },
      {
        step: '02',
        title: 'Shape the plan',
        description:
          'We define the best-fit audience, highest-leverage offer changes, and where effort should be concentrated first.',
      },
      {
        step: '03',
        title: 'Build the conversion layer',
        description:
          'We support page structure, messaging, and operational improvements that help leads move more cleanly.',
      },
      {
        step: '04',
        title: 'Review and scale',
        description:
          'We monitor response and keep improving the system as clearer data emerges from the market.',
      },
    ],
    deliverablesTitle: 'Typical deliverables',
    deliverables: [
      'Growth audit and opportunity map',
      'ICP and buyer profile review',
      'Offer positioning guidance',
      'Lead generation flow design',
      'Conversion and funnel recommendations',
      'Marketing automation direction',
      'Measurement and reporting setup',
      'Monthly strategy actions',
    ],
    audienceTitle: 'Who this fits best',
    audiences: [
      {
        title: 'Teams with uneven lead quality',
        description:
          'For businesses attracting attention but not enough of the right kind of opportunity.',
      },
      {
        title: 'Operators with channel confusion',
        description:
          'For teams unsure where to focus budget and effort because too many channels are competing for attention.',
      },
      {
        title: 'Businesses refining their offer',
        description:
          'For companies whose service quality is strong but whose digital presentation is not making that obvious enough.',
      },
    ],
    closingHeadline: 'Need a clearer growth system, not just more activity?',
    closingCopy:
      'We can review where the funnel is leaking, how the offer is landing, and what will make the biggest difference first.',
    closingPrimaryCta: 'Book a strategy call',
  },
  'it-solutions': {
    slug: 'it-solutions',
    title: 'IT Solutions Dubai - Infrastructure, Security, Cloud, and Support',
    metaDescription:
      'IT solutions in Dubai covering infrastructure, cybersecurity, cloud, network setup, and managed support for businesses that need dependable operations.',
    eyebrow: 'IT Solutions and Infrastructure',
    headline: 'Stabilize the technical layer behind your growth.',
    intro:
      'We support the infrastructure, security, and systems businesses rely on daily, from office setup and network design to cloud support and managed operational help.',
    primaryCta: 'Request an IT assessment',
    secondaryCta: 'Talk to the support team',
    bestFor: 'Best for SMEs, multi-site teams, and growing operations that need more dependable IT support.',
    heroTags: ['Infrastructure', 'Cybersecurity', 'Cloud', 'Managed support'],
    capabilitiesTitle: 'Key IT capabilities',
    capabilitiesIntro:
      'We help teams reduce downtime, tighten security, and make the operational side of the business easier to run and support.',
    capabilities: [
      {
        title: 'Infrastructure and networking',
        description:
          'Office setup, network segmentation, firewall configuration, and practical performance planning for day-to-day stability.',
      },
      {
        title: 'Security and resilience',
        description:
          'Cybersecurity basics, access control, backups, and recovery planning designed to reduce operational risk.',
      },
      {
        title: 'Cloud and server support',
        description:
          'Cloud migration, server planning, remote environments, and infrastructure that is easier to manage over time.',
      },
      {
        title: 'Managed IT support',
        description:
          'Ongoing support for teams that need responsive help without building a full internal IT department.',
      },
    ],
    processTitle: 'Our IT process',
    process: [
      {
        step: '01',
        title: 'Assessment and issue mapping',
        description:
          'We review the current environment, identify vulnerabilities, and prioritize the most important fixes.',
      },
      {
        step: '02',
        title: 'Roadmap and proposal',
        description:
          'We define the scope, urgency, and implementation path in a way your team can evaluate clearly.',
      },
      {
        step: '03',
        title: 'Deployment and configuration',
        description:
          'We implement the agreed systems with a focus on stability, documentation, and minimal disruption.',
      },
      {
        step: '04',
        title: 'Support and continuity',
        description:
          'We provide the handover and ongoing support structure needed to keep operations reliable after rollout.',
      },
    ],
    deliverablesTitle: 'Typical deliverables',
    deliverables: [
      'IT environment review',
      'Infrastructure and network planning',
      'Firewall and access setup',
      'Cloud and server support',
      'Backup and recovery planning',
      'Cybersecurity recommendations',
      'Managed support options',
      'Documentation and handover',
    ],
    audienceTitle: 'Who this fits best',
    audiences: [
      {
        title: 'Growing SMEs',
        description:
          'For businesses that have outgrown ad hoc support and now need a more dependable operational layer.',
      },
      {
        title: 'New offices or expansions',
        description:
          'For teams setting up new environments and wanting the technical side structured correctly from day one.',
      },
      {
        title: 'Operations under strain',
        description:
          'For companies dealing with recurring downtime, security concerns, or support gaps that slow the business down.',
      },
    ],
    closingHeadline: 'Need a clearer view of the IT risks and priorities?',
    closingCopy:
      'We can review the current setup, identify the biggest gaps, and recommend a practical support or upgrade path.',
    closingPrimaryCta: 'Get an IT assessment',
  },
}

export function getServiceDetail(slug: ServiceDetail['slug']) {
  return serviceDetails[slug]
}

export function buildServiceMetadata(detail: ServiceDetail): Metadata {
  return {
    title: detail.title,
    description: detail.metaDescription,
    alternates: {
      canonical: `${companyInfo.siteUrl}/services/${detail.slug}`,
    },
  }
}
