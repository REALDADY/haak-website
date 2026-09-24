const systemParts = [
  {
    title: 'APIs and integrations',
    copy: 'Connect forms, stores, content, operations and reporting paths where the project requires it.',
  },
  {
    title: 'Secure authentication',
    copy: 'Plan access, roles and account journeys for platforms that need user or admin control.',
  },
  {
    title: 'Admin platforms',
    copy: 'Create practical interfaces for teams managing products, requests, content or customer data.',
  },
  {
    title: 'Mobile experiences',
    copy: 'Design responsive and mobile-first journeys that fit the way customers actually interact.',
  },
  {
    title: 'Business automation',
    copy: 'Reduce repeated manual work by mapping clearer flows between people, tools and data.',
  },
  {
    title: 'Scalable infrastructure',
    copy: 'Prepare hosting, deployment, support and technical operations around realistic business needs.',
  },
]

export default function WhyHaak() {
  return (
    <section className="technology-system bg-[var(--surface-dark)] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker is-dark">Technology and integrations</div>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="max-w-4xl font-display text-[clamp(2.35rem,4.4vw,4.8rem)] font-extrabold leading-[0.98] text-white">
            Beyond pages: the systems behind modern digital products.
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-white/70">
            HAAK can support the software layer behind public websites, customer journeys and internal business operations.
          </p>
        </div>

        <div className="tech-map mt-14">
          <div className="tech-map-core">
            <span>HAAK software layer</span>
            <strong>Plan, design, build, connect and improve.</strong>
          </div>
          {systemParts.map((part, index) => (
            <article key={part.title} className={`tech-map-node tech-map-node-${index + 1}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{part.title}</h3>
              <p>{part.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
