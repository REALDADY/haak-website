import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/work/ProjectCard'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { ArrowRightIcon } from '@/components/icons'
import { projects } from '@/lib/site-data'

export default function FeaturedProjects() {
  const [lead, ...rest] = projects.slice(0, 3)

  return (
    <section id="selected-work" className="section surface-soft" aria-labelledby="selected-work-title">
      <div className="container-x">
        <SectionHeading
          align="split"
          eyebrow="Selected proof"
          title={<span id="selected-work-title">A few real examples of HAAK delivery.</span>}
          intro="Project proof is intentionally limited here. Each item uses genuine available project information and screenshots."
        />

        <Reveal className="mt-14">
          <ProjectCard project={lead} variant="feature" />
        </Reveal>

        <RevealGroup className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center">
          <Link href="/portfolio" className="btn-secondary">
            View all work
            <ArrowRightIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
