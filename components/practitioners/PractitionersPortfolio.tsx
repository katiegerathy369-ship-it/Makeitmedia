'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Amy Angus Naturopathy',
    type: 'Naturopath · Brisbane',
    tag: 'Live site',
    href: '/work/amy-angus',
    image: '/images/portfolio/amy-angus-naturopathy/desktop-after/preview-screenshot.png',
  },
  {
    title: 'Nourish & Co.',
    type: 'Nutritionist · Concept',
    tag: 'Concept',
    href: '/work/concept-nutritionist',
    image: '/images/portfolio/concept-nutritionist/nourish-and-co-preview.png',
  },
  {
    title: 'She Thrives Co.',
    type: "Women's health coach · Concept",
    tag: 'Concept',
    href: '/work/concept-womens-coach',
    image: '/images/portfolio/concept-womens-health-coach-shethrivesco/shethrives-conceptsite.jpg',
  },
]

export default function PractitionersPortfolio() {
  return (
    <section className="py-[100px]" style={{ background: 'var(--warm-white)' }}>
      <div className="max-w-container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-4">
              Practitioner portfolio
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-ink"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              Sites built for<br />
              <em className="italic text-sage-dark">health practitioners</em>
            </h2>
          </div>
          <a
            href="/work"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-sage-dark border-b border-sage-light pb-px hover:text-ink hover:border-ink transition-colors duration-200 no-underline mb-2"
          >
            View all work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="group bg-white rounded-[20px] overflow-hidden no-underline text-inherit block hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(42,37,32,0.1)] transition-all duration-300"
              style={{ border: '1px solid var(--border-sage)' }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#f5f3f0]">
                <Image
                  src={project.image}
                  alt={`${project.title} health practitioner website design example`}
                  width={840}
                  height={525}
                  className="w-full h-full object-cover object-left-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="px-6 py-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[11px] font-medium tracking-[0.07em] uppercase px-[10px] py-[3px] rounded-full ${
                    project.tag === 'Live site'
                      ? 'bg-sage-pale text-sage-dark border border-sage-light'
                      : 'bg-terra-pale text-terra border border-terra-light'
                  }`}>
                    {project.tag}
                  </span>
                </div>
                <div className="font-display text-[20px] font-medium text-ink leading-[1.2] mb-1">
                  {project.title}
                </div>
                <div className="text-[13px] text-ink-light font-light">
                  {project.type}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
