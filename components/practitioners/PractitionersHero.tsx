'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import CalButton from '@/components/CalButton'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export default function PractitionersHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const blob1Y = useTransform(scrollYProgress, [0, 1], ['-25px', '25px'])
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['-15px', '15px'])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-[160px] overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          y: blob1Y,
          willChange: 'transform',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(184,212,192,0.35) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: -100,
          right: -100,
        }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          y: blob2Y,
          willChange: 'transform',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(232,180,154,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: 0,
          left: -80,
        }}
      />

      <div className="max-w-container mx-auto px-12 w-full">
        <div className="max-w-[680px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center bg-sage-pale border border-sage-light text-sage-dark text-[12px] font-medium tracking-[0.08em] uppercase px-[14px] py-[6px] rounded-full mb-7"
            style={{ '--dot-color': 'var(--sage)' } as React.CSSProperties}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-sage mr-2 flex-shrink-0" />
            Built by a naturopath, for health practitioners
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display font-normal leading-[1.1] text-ink mb-6"
            style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}
          >
            <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>Your</motion.span>
            {' '}
            <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>practice</motion.span>
            {' '}
            <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>deserves</motion.span>
            <br />
            <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>a</motion.span>
            {' '}
            <motion.span variants={wordVariants} style={{ display: 'inline-block', position: 'relative' }}>
              <span className="accent-underline" style={{ '--underline-color': 'var(--terra-light)' } as React.CSSProperties}>website</span>
            </motion.span>
            {' '}
            <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#4a6e57' }}>as</motion.span>
            {' '}
            <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#4a6e57' }}>good</motion.span>
            <br />
            <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#4a6e57' }}>as</motion.span>
            {' '}
            <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#4a6e57' }}>your</motion.span>
            {' '}
            <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#4a6e57' }}>work</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
            className="text-[17px] leading-[1.7] text-ink-mid max-w-[520px] mb-10 font-light"
          >
            Websites and marketing systems for naturopaths, nutritionists and health practitioners, designed by someone who understands your world from the inside.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
            className="flex items-center gap-5"
          >
            <CalButton
              className="inline-flex items-center gap-2 bg-sage-dark text-white px-8 py-[15px] rounded-full font-body text-[15px] font-medium tracking-[0.01em] no-underline hover:bg-ink hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(42,37,32,0.15)] transition-all duration-200 border-none cursor-pointer"
            >
              Book a free strategy call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CalButton>
            <a
              href="#practitioner-services"
              className="inline-flex items-center gap-1.5 text-ink-mid text-[14px] font-normal no-underline tracking-[0.01em] hover:text-sage-dark transition-colors duration-200 group"
            >
              View packages
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-[3px] transition-transform duration-200">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Above-the-fold social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
            className="mt-12 flex items-start gap-4 max-w-[520px]"
          >
            <div className="w-px bg-sage-light flex-shrink-0 self-stretch min-h-[64px]" />
            <div>
              <p className="font-display italic text-sage-dark text-[18px] leading-[1.5] mb-2.5">
                Exceeded my expectations in every way. The final result looks polished, modern, and exactly on brand.
              </p>
              <div className="flex items-center gap-2.5">
                <div className="font-display flex items-center justify-center w-8 h-8 rounded-full bg-sage-light text-[14px] font-medium text-sage-dark">
                  A
                </div>
                <div className="text-[13px] text-ink-mid font-normal">
                  Amy Angus <span className="text-ink-light">· Naturopath, Brisbane</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
