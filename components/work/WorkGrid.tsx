'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { FilterKey } from './FilterBar'

// ── TYPES ────────────────────────────────────────────────────────────────────

export type PreviewVariant = 'amy' | 'nutri' | 'coach' | 'gp'
type TagVariant = 'live' | 'concept' | 'type'
type H1Width = 'w-75' | 'w-90' | 'w-55'
type BodyWidth = 'w-100' | 'w-80' | 'w-60'

export interface Project {
  id: string
  filterTags: FilterKey[]
  fullWidth: boolean
  href: string
  browserUrl: string
  previewVariant: PreviewVariant
  previewH1: H1Width[]
  previewBody: { w: BodyWidth; mt?: boolean }[]
  cardTags: { label: string; variant: TagVariant }[]
  title: string
  practice: string
  pills: string[]
  link?: { label: string; href: string }
  linkMuted?: string
  screenshot?: string
}

// ── PROJECT DATA ──────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 'amy-angus',
    filterTags: ['live', 'naturopath'],
    fullWidth: true,
    href: '/work/amy-angus',
    browserUrl: 'amy-angus-naturopathy.com.au',
    previewVariant: 'amy',
    previewH1: ['w-75', 'w-90', 'w-55'],
    previewBody: [{ w: 'w-100', mt: true }, { w: 'w-80' }],
    cardTags: [
      { label: '✦ Live site', variant: 'live' },
      { label: 'Naturopath', variant: 'type' },
      { label: 'Brisbane', variant: 'type' },
    ],
    title: 'Amy Angus Naturopathy',
    practice: 'Naturopath · Brisbane, QLD · Tier 2 — Visibility package',
    pills: [
      '5-page custom website',
      'Professional copywriting',
      'Online bookings',
      '30-day content launch',
      'Email welcome sequence',
      'GA4 + Clarity setup',
    ],
    link: { label: 'View case study', href: '/work/amy-angus' },
  },
  {
    id: 'concept-nutritionist',
    filterTags: ['concept', 'nutritionist'],
    fullWidth: false,
    href: '/work/concept-nutritionist',
    browserUrl: 'concept — nutritionist',
    previewVariant: 'nutri',
    previewH1: ['w-90', 'w-75'],
    previewBody: [{ w: 'w-100', mt: true }, { w: 'w-60' }],
    cardTags: [
      { label: 'Concept design', variant: 'concept' },
      { label: 'Nutritionist', variant: 'type' },
    ],
    title: 'Nourish & Co.',
    practice: 'Nutritionist · Warm amber palette · Tier 1 — Presence',
    pills: ['6-page website', 'Booking integration', 'Lead magnet page', 'On-page SEO'],
    link: { label: 'View concept site', href: '/work/concept-nutritionist' },
    screenshot: '/images/portfolio/concept-nutritionist/nourish-and-co-preview.png',
  },
  {
    id: 'concept-womens-coach',
    filterTags: ['concept', 'coach'],
    fullWidth: false,
    href: '/work/concept-womens-coach',
    browserUrl: "concept — women's health coach",
    previewVariant: 'coach',
    previewH1: ['w-55', 'w-90'],
    previewBody: [{ w: 'w-80', mt: true }, { w: 'w-100' }],
    cardTags: [
      { label: 'Concept design', variant: 'concept' },
      { label: 'Health coach', variant: 'type' },
    ],
    title: 'She Thrives Co.',
    practice: "Women's health coach · Blush rose palette · Tier 2 — Visibility",
    pills: ['6-page website', 'Brand messaging', 'Instagram launch kit', 'Email sequence'],
    link: { label: 'View concept site', href: '/work/concept-womens-coach' },
    screenshot: '/images/portfolio/concept-womens-health-coach-shethrivesco/shethrivesco-preview.jpg',
  },
  {
    id: 'concept-integrative-gp',
    filterTags: ['concept', 'gp'],
    fullWidth: false,
    href: '/work/concept-integrative-gp',
    browserUrl: 'concept — integrative GP',
    previewVariant: 'gp',
    previewH1: ['w-75', 'w-90', 'w-55'],
    previewBody: [{ w: 'w-100', mt: true }, { w: 'w-80' }],
    cardTags: [
      { label: 'Concept design', variant: 'concept' },
      { label: 'Integrative GP', variant: 'type' },
    ],
    title: 'Dr James Whitfield — Integrative GP',
    practice: 'Integrative GP · Deep navy palette · Tier 1 — Presence',
    pills: ['6-page website', 'Patient intake flow', 'SEO foundations', 'Analytics setup'],
    link: { label: 'View concept site', href: 'https://concept-site-3-integrative-gp.netlify.app/' },
    screenshot: '/images/portfolio/concept-integrative-gp/integrative-gp-preview.png',
  },
]

// ── BROWSER PREVIEW ───────────────────────────────────────────────────────────

function BrowserPreview({ project }: { project: Project }) {
  return (
    <div
      className="browser-wrap"
      style={{ padding: project.fullWidth ? '18px 18px 0' : '14px 14px 0' }}
    >
      <div className="browser-bar">
        <div className="b-dot" />
        <div className="b-dot" />
        <div className="b-dot" />
        <div className="b-url">
          <span className="b-url-text">{project.browserUrl}</span>
        </div>
      </div>
      <div
        className={`browser-screen overflow-hidden ${
          project.fullWidth ? 'aspect-[16/9]' : 'aspect-[16/10]'
        }`}
        style={{ borderRadius: project.fullWidth ? '8px 8px 0 0' : '6px 6px 0 0' }}
      >
        {project.screenshot ? (
          <Image
            src={project.screenshot}
            alt={`${project.title} website preview`}
            width={1440}
            height={900}
            className="w-full h-full object-cover object-left-top"
          />
        ) : (
          <div className={`site-preview pv-${project.previewVariant}`}>
            <div className="pv-nav">
              <div className="pv-logo" />
              <div className="pv-nav-links">
                <div className="pv-nav-link" />
                <div className="pv-nav-link" />
                <div className="pv-nav-link" />
              </div>
            </div>
            <div className="pv-hero">
              <div className="pv-eyebrow" />
              {project.previewH1.map((w, i) => (
                <div key={i} className={`pv-h1 ${w}`} />
              ))}
              {project.previewBody.map((line, i) => (
                <div
                  key={i}
                  className={`pv-body ${line.w}`}
                  style={line.mt ? { marginTop: 8 } : undefined}
                />
              ))}
              <div className="pv-ctas">
                <div className="pv-cta primary" />
                <div className="pv-cta ghost" />
              </div>
              <div className="pv-img" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ── TAG STYLES ────────────────────────────────────────────────────────────────

const tagStyles: Record<string, string> = {
  live: 'bg-sage-pale text-sage-dark border border-sage-light',
  concept: 'bg-terra-pale text-terra border border-terra-light',
  type: 'bg-white text-ink-mid border border-[rgba(122,158,135,0.2)]',
}

// ── WORK CARD ─────────────────────────────────────────────────────────────────

function WorkCard({ project, index }: { project: Project; index: number }) {
  const cardInner = (
    <>
      <BrowserPreview project={project} />
      <div
        className={`card-info ${
          project.fullWidth
            ? 'p-10 px-11 flex flex-col justify-center'
            : 'p-6 px-7 pb-7'
        }`}
      >
        <div className="flex items-center gap-2 mb-[14px] flex-wrap">
          {project.cardTags.map((tag) => (
            <span
              key={tag.label}
              className={`text-[11px] font-medium tracking-[0.07em] uppercase px-[11px] py-1 rounded-full ${tagStyles[tag.variant]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div
          className={`font-display font-medium text-ink leading-[1.2] mb-[5px] ${
            project.fullWidth ? 'text-[30px] mb-2' : 'text-[22px]'
          }`}
        >
          {project.title}
        </div>

        <div
          className={`text-ink-light font-light leading-[1.5] ${
            project.fullWidth ? 'text-[15px] mb-5' : 'text-[13px] mb-4'
          }`}
        >
          {project.practice}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.pills.map((pill) => (
            <span
              key={pill}
              className="text-[11px] text-ink-mid bg-warm-white border border-[rgba(122,158,135,0.2)] px-2.5 py-1 rounded-full"
            >
              {pill}
            </span>
          ))}
        </div>

        {project.link ? (
          <span className="inline-flex items-center gap-[5px] text-[13px] font-medium text-sage-dark border-b border-sage-light pb-px group-hover:text-ink group-hover:border-ink transition-colors duration-200">
            {project.link.label}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-[3px] transition-transform duration-200">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ) : project.linkMuted ? (
          <span className="text-[13px] text-ink-light font-light italic">
            {project.linkMuted}
          </span>
        ) : null}
      </div>
    </>
  )

  const sharedClass = `group bg-white rounded-[20px] overflow-hidden border border-[rgba(122,158,135,0.2)] block no-underline text-inherit`

  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: '0 24px 52px rgba(42,37,32,0.13)', transition: { type: 'spring', stiffness: 350, damping: 22 } }}
      whileTap={{ scale: 0.985 }}
      className={`${sharedClass} ${project.fullWidth ? 'md:col-span-2 md:grid md:grid-cols-[1.15fr_1fr]' : ''}`}
    >
      {cardInner}
    </motion.a>
  )
}

// ── SECTION DIVIDER ───────────────────────────────────────────────────────────

function SectionDivider({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="col-span-1 md:col-span-2 flex items-center gap-4 mt-10 mb-0"
    >
      <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-light whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
    </motion.div>
  )
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────

export default function WorkGrid({ activeFilter }: { activeFilter: FilterKey }) {
  const visible = PROJECTS.filter(
    (p) => activeFilter === 'all' || p.filterTags.includes(activeFilter)
  )

  const showConceptDivider = activeFilter !== 'live'
  const hasConceptCards = visible.some((p) => p.filterTags.includes('concept'))

  // Assign sequential animation indices only to visible cards
  let cardIndex = 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
      {PROJECTS.map((project) => {
        const isVisible =
          activeFilter === 'all' || project.filterTags.includes(activeFilter)

        // Insert concept divider before first concept card
        const isFirstConcept =
          project.id === 'concept-nutritionist' &&
          showConceptDivider &&
          hasConceptCards

        if (!isVisible) return null

        const elements = []
        if (isFirstConcept) {
          elements.push(<SectionDivider key="concept-divider" label="Concept designs" />)
        }
        elements.push(<WorkCard key={project.id} project={project} index={cardIndex} />)
        cardIndex++
        return elements
      })}
    </div>
  )
}
