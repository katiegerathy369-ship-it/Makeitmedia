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

          <WorkGrid activeFilter={activeFilter} />
          <WorkCtaStrip />

        </div>
      </section>
    </>
  )
}
