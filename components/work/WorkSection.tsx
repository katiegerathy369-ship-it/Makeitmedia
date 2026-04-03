'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import FilterBar, { type FilterKey } from './FilterBar'
import WorkGrid, { PROJECTS } from './WorkGrid'
import WorkCtaStrip from './WorkCtaStrip'

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const visibleCount = PROJECTS.filter(
    (p) => activeFilter === 'all' || p.filterTags.includes(activeFilter)
  ).length

  return (
    <>
      <FilterBar
        activeFilter={activeFilter}
        onFilter={setActiveFilter}
        visibleCount={visibleCount}
      />

      <section className="pt-[72px] pb-[120px]">
        <div className="max-w-container mx-auto px-5 md:px-12">

          {/* Live client work label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-light whitespace-nowrap">
              Live client work
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </motion.div>

          <WorkGrid activeFilter={activeFilter} />
          <WorkCtaStrip />

        </div>
      </section>
    </>
  )
}
