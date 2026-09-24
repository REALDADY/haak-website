'use client'

import { useState } from 'react'
import { workflow } from '@/lib/site-data'

export default function SoftwareStory() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = workflow[activeIndex]

  return (
    <section className="process-system bg-[var(--bg-soft)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker">How HAAK works</div>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2 className="max-w-4xl font-display text-[clamp(2.35rem,4.4vw,4.8rem)] font-extrabold leading-[0.98] text-[var(--text-primary)]">
            A product-development path with the business goal kept visible.
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-[var(--text-soft)]">
            The process is structured enough to reduce confusion and flexible enough to match the real scope of the product.
          </p>
        </div>

        <div className="process-layout mt-14">
          <div className="process-timeline" role="tablist" aria-label="HAAK workflow">
            {workflow.map((stage, index) => {
              const selected = activeIndex === index
              return (
                <button
                  key={stage.step}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="process-stage-panel"
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`process-step ${selected ? 'is-active' : ''}`}
                >
                  <span>{stage.step}</span>
                  <strong>{stage.title}</strong>
                </button>
              )
            })}
          </div>

          <div id="process-stage-panel" className="process-stage-panel" role="tabpanel">
            <span>{active.step}</span>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <div className="process-diagram" aria-hidden="true">
              <span className="diagram-track" />
              {workflow.map((stage, index) => (
                <i key={stage.step} className={index <= activeIndex ? 'is-active' : ''} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
