'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroMockup from './HeroMockup'
import CalButton from './CalButton'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
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

export default function Hero() {
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
      id="home"
      className="relative min-h-screen flex items-center pt-[160px] overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      {/* Background blobs — gold tones */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          y: blob1Y,
          willChange: 'transform',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(232,213,163,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: 0,
          left: -80,
        }}
      />

      <div className="max-w-container mx-auto px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
              className="hero-eyebrow inline-flex items-center bg-gold-pale border border-gold-light text-night text-[12px] font-medium tracking-[0.08em] uppercase px-[14px] py-[6px] rounded-full mb-7"
            >
              Websites that grow your business
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-normal leading-[1.1] text-ink mb-6"
              style={{ fontSize: 'clamp(44px, 5.5vw, 72px)' }}
            >
              <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>A</motion.span>
              {' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block' }} className="accent-underline">website</motion.span>
              {' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>that</motion.span>
              <br />
              <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#c9a84c' }}>grows</motion.span>
              {' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#c9a84c' }}>with</motion.span>
              {' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#c9a84c' }}>your</motion.span>
              <br />
              <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#c9a84c' }}>business</motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              className="text-[17px] leading-[1.7] text-ink-mid max-w-[480px] mb-10 font-light"
            >
              Custom websites and marketing systems for small businesses across Australia. Designed to attract clients, built to grow with you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
              className="flex items-center gap-5"
            >
              <CalButton
                className="inline-flex items-center gap-2 bg-night text-white px-8 py-[15px] rounded-full font-body text-[15px] font-medium tracking-[0.01em] no-underline hover:bg-gold hover:text-night hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(20,20,20,0.2)] transition-all duration-200 border-none cursor-pointer"
              >
                Book a free strategy call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </CalButton>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-ink-mid text-[14px] font-normal no-underline tracking-[0.01em] hover:text-gold transition-colors duration-200 group"
              >
                View packages
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-[3px] transition-transform duration-200">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <HeroMockup />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
