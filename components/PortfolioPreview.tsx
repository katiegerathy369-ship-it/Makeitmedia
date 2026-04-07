'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Amy Angus Naturopathy',
    type: 'Health & wellness · Brisbane',
    tag: 'Live site',
    href: '/work/amy-angus',
    image: '/images/portfolio/amy-angus-naturopathy/amy-angus-naturopath-website.jpg',
  },
  {
    title: 'Position Ready Finance',
    type: 'Mortgage broker · Australia',
    tag: 'Live site',
    href: 'https://positionreadyfinance.com.au/',
    image: '/images/portfolio/position-ready-finance/position-ready-wesbite.jpg',
  },
  {
    title: "Walker's Landing Georgia",
    type: 'Real estate · Georgia, USA',
    tag: 'Live site',
    href: 'https://walkerslandinggeorgia.com/',
    image: '/images/portfolio/walkers-landing/walkers-landing-website.jpg',
  },
  {
    title: 'Prestige Car & Aircraft Detailing',
    type: 'Car & aircraft detailing · Australia',
    tag: 'Coming soon',
    href: null,
    image: null,
  },
]

// Triple the array for seamless looping
const slides = [...projects, ...projects, ...projects]

export default function PortfolioPreview() {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  const handlePause = () => { pausedRef.current = true }
  const handleResume = () => { pausedRef.current = false }

  // Auto-scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let raf: number
    const speed = 0.5 // px per frame

    function step() {
      if (!pausedRef.current && track) {
        track.scrollLeft += speed
        // Reset when we've scrolled through one full set
        const oneSet = track.scrollWidth / 3
        if (track.scrollLeft >= oneSet * 2) {
          track.scrollLeft -= oneSet
        }
      }
      raf = requestAnimationFrame(step)
    }

    // Start from the middle set so we can scroll both directions
    track.scrollLeft = track.scrollWidth / 3

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="py-[100px] overflow-hidden" style={{ background: 'var(--warm-white)' }}>
      <div className="max-w-container mx-auto px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
              Portfolio
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-ink"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              Sites I&rsquo;ve built for<br />
              <em className="italic" style={{ color: '#c9a84c' }}>businesses like yours</em>
            </h2>
          </div>
          <a
            href="/work"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-gold border-b border-gold-light pb-px hover:text-ink hover:border-ink transition-colors duration-200 no-underline mb-2"
          >
            View all work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        className="flex gap-6 overflow-x-auto px-12 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {slides.map((project, i) => {
          const inner = (
            <>
              <div className="aspect-[16/10] overflow-hidden bg-[#f5f3f0]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} website design example`}
                    width={840}
                    height={525}
                    className="w-full h-full object-cover object-left-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#f0ece6]">
                    <span className="font-display text-[22px] font-medium text-ink-mid leading-[1.2] text-center px-6">
                      {project.title}
                    </span>
                    <span className="text-[12px] text-ink-light font-light mt-2 tracking-[0.05em] uppercase">
                      Coming soon
                    </span>
                  </div>
                )}
              </div>
              <div className="px-6 py-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[11px] font-medium tracking-[0.07em] uppercase px-[10px] py-[3px] rounded-full ${
                    project.tag === 'Live site'
                      ? 'bg-gold-pale text-gold-dark border border-gold-light'
                      : 'bg-warm-white text-ink-light border border-[rgba(201,168,76,0.2)]'
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
            </>
          )

          return project.href ? (
            <motion.a
              key={`${project.title}-${i}`}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex-shrink-0 w-[420px] bg-white rounded-[20px] overflow-hidden border border-[rgba(201,168,76,0.15)] no-underline text-inherit block"
              whileHover={{ y: -6, boxShadow: '0 20px 44px rgba(20,20,20,0.1)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            >
              {inner}
            </motion.a>
          ) : (
            <motion.div
              key={`${project.title}-${i}`}
              className="group flex-shrink-0 w-[420px] bg-white rounded-[20px] overflow-hidden border border-[rgba(201,168,76,0.15)]"
              whileHover={{ y: -6, boxShadow: '0 20px 44px rgba(20,20,20,0.1)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            >
              {inner}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
