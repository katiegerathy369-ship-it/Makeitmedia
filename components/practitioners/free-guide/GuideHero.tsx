'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const PDF_URL = '/downloads/5-website-mistakes-practitioners.pdf'
const KIT_FORM_URL = 'https://app.kit.com/forms/9337733/subscriptions'

export default function GuideHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const blob1Y = useTransform(scrollYProgress, [0, 1], ['-25px', '25px'])
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['-15px', '15px'])

  const [form, setForm] = useState({ firstName: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const data = new FormData()
      data.append('fields[first_name]', form.firstName)
      data.append('email_address', form.email)
      await fetch(KIT_FORM_URL, { method: 'POST', body: data, mode: 'no-cors' })
      setSubmitted(true)
      window.open(PDF_URL, '_blank', 'noopener,noreferrer')
    } catch {
      setSubmitted(true)
      window.open(PDF_URL, '_blank', 'noopener,noreferrer')
    }
  }

  const inputBase =
    'w-full bg-white border border-sage-light/60 rounded-lg px-4 py-[13px] font-body text-[14px] text-ink font-normal outline-none transition-all duration-200 placeholder:text-ink-light focus:border-sage-dark focus:bg-white focus:shadow-[0_0_0_3px_rgba(122,158,135,0.15)]'

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-[160px] pb-[100px] overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          y: blob1Y,
          willChange: 'transform',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(184,212,192,0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: -100,
          right: -150,
        }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          y: blob2Y,
          willChange: 'transform',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(232,180,154,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: -80,
          left: -80,
        }}
      />

      <div className="max-w-container mx-auto px-12 w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-16 items-center">
          {/* LEFT — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center bg-sage-pale border border-sage-light text-sage-dark text-[12px] font-medium tracking-[0.08em] uppercase px-[14px] py-[6px] rounded-full mb-7"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-sage mr-2 flex-shrink-0" />
              Free guide for health practitioners
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-normal leading-[1.05] text-ink mb-6"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
            >
              <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>5</motion.span>{' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>website</motion.span>{' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>mistakes</motion.span>{' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#4a6e57' }}>costing</motion.span>{' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#4a6e57' }}>health</motion.span>{' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#4a6e57' }}>practitioners</motion.span>{' '}
              <motion.span variants={wordVariants} style={{ display: 'inline-block', fontStyle: 'italic', color: '#4a6e57' }}>clients</motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              className="text-[17px] leading-[1.7] text-ink-mid max-w-[540px] mb-8 font-light"
            >
              The silent conversion killers on practice websites — and exactly how to fix them. Written by a naturopath who builds practice sites full-time.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
              className="flex flex-col gap-3 mb-2 max-w-[480px]"
            >
              {[
                'The 5 most common mistakes I see on practice sites',
                'Exact fixes you can implement this weekend',
                'Plain-English copy that actually converts',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-ink-mid font-light">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]"
                    style={{ background: 'var(--sage-light)' }}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 5.5l2.5 2.5L9 2.5" stroke="#4a6e57" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            className="relative"
          >
            {/* PDF cover preview */}
            <div
              className="absolute -top-8 -left-6 w-[120px] h-[160px] rounded-md hidden md:flex flex-col items-center justify-center text-center px-3 rotate-[-6deg] shadow-[0_20px_50px_rgba(74,110,87,0.25)]"
              style={{ background: 'linear-gradient(160deg, #4a6e57 0%, #2f4937 100%)', zIndex: 0 }}
              aria-hidden="true"
            >
              <span className="font-display italic text-[36px] leading-none text-sage-light">5</span>
              <span className="font-body text-[8px] tracking-[0.15em] uppercase text-white/60 mt-1">Mistakes</span>
              <span className="font-display text-[10px] text-white mt-3 leading-tight">
                Practitioner<br />Website Guide
              </span>
            </div>

            <form
              action={KIT_FORM_URL}
              method="post"
              onSubmit={handleSubmit}
              className="relative rounded-[20px] p-9 bg-white"
              style={{
                border: '1px solid var(--border-sage)',
                boxShadow: '0 30px 60px -20px rgba(74,110,87,0.18)',
                zIndex: 1,
              }}
            >
              {!submitted ? (
                <>
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-sage-dark mb-2">
                    Send me the guide
                  </p>
                  <h2 className="font-display text-[26px] leading-[1.15] text-ink mb-6">
                    Free PDF, <em className="italic text-sage-dark">10 pages</em>, no fluff.
                  </h2>

                  <div className="mb-4">
                    <label className="block text-[12px] font-medium tracking-[0.06em] uppercase text-ink-mid mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Sarah"
                      className={inputBase}
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[12px] font-medium tracking-[0.06em] uppercase text-ink-mid mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@yourpractice.com.au"
                      className={inputBase}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    id="cta-guide-download"
                    className="w-full py-[15px] rounded-full font-body text-[14px] font-medium tracking-[0.02em] border-none cursor-pointer transition-all duration-200 bg-sage-dark text-white hover:bg-ink hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,110,87,0.25)]"
                  >
                    Send me the free guide →
                  </button>

                  <p className="text-[12px] text-ink-light text-center mt-4 leading-[1.5]">
                    No spam. Unsubscribe anytime. Read our{' '}
                    <a href="/privacy" className="underline hover:text-sage-dark">
                      privacy policy
                    </a>.
                  </p>
                </>
              ) : (
                <div className="text-center py-4">
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{ background: 'var(--sage-light)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="#4a6e57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="font-display text-[24px] leading-[1.15] text-ink mb-3">
                    Your guide is downloading.
                  </h2>
                  <p className="text-[14px] text-ink-mid font-light leading-[1.7] mb-6">
                    Check your downloads folder. I've also sent a copy to <strong className="text-ink">{form.email}</strong> so you have it for later.
                  </p>
                  <a
                    href={PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sage-dark text-white px-6 py-3 rounded-full font-body text-[14px] font-medium no-underline hover:bg-ink transition-colors"
                  >
                    Download again
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2v8m0 0l-3-3m3 3l3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
