const principles = [
  {
    title: 'Model the business first',
    copy: 'The project starts with how enquiries, operations, teams and customers actually move through the business.',
  },
  {
    title: 'Design the system, not only screens',
    copy: 'UX, content, interface states and technical handoff are treated as one product layer.',
  },
  {
    title: 'Build for launch and after launch',
    copy: 'Responsive implementation, search foundations, QA and support planning are included in the delivery conversation.',
  },
]

export default function CapabilityScene() {
  return (
    <section id="solutions" className="brand-thesis bg-[var(--surface-dark)] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="section-kicker is-dark">Solutions</div>
            <h2 className="max-w-4xl font-display text-[clamp(2.35rem,4.4vw,4.7rem)] font-extrabold leading-[0.98] text-white">
              HAAK turns business requirements into useful digital systems.
            </h2>
          </div>
          <div className="brand-thesis-copy">
            <p>
              A stronger website or application is rarely just a visual layer. It needs the right structure, journeys, content, engineering decisions and support path.
            </p>
            <p>
              HAAK’s role is to connect those decisions so the result can be used by real customers, teams and operators.
            </p>
          </div>
        </div>

        <div className="principle-rail mt-14">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
