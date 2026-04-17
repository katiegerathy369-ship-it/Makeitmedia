'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: "Why should I choose a designer who's also a naturopath?",
    a: [
      "Because I don't need you to explain what a naturopath does, how patients find you, or why your copy needs to sound clinical but approachable. I've lived it. Six years of study, clinical practice, and building my own marketing from scratch.",
      "<strong>I write copy that sounds like you, not like a marketing agency guessing at your profession.</strong> Your patients will feel the difference.",
    ],
  },
  {
    q: "Do you only work with naturopaths?",
    a: [
      "No. I work with any health or wellness practitioner. Naturopaths, nutritionists, herbalists, health coaches, women's coaches, integrative GPs, and more.",
      "My background is in naturopathy, which gives me a deep understanding of the broader health practitioner world: the patient relationship, the language, the way your clients search for help online. <strong>If you work in health and wellness, I can help you.</strong>",
    ],
  },
  {
    q: "Can you integrate with my clinic management software?",
    a: [
      "Yes. I integrate with Cliniko, Simple Clinic, Go High Level, and Cal.com. If you use a different booking platform, I'll work with it, or recommend the best option for your practice.",
    ],
  },
  {
    q: "How long does it take?",
    a: [
      "2–3 weeks from our first call to your site going live. That includes copy, design, two rounds of revisions, and full launch setup with analytics and booking integration.",
      "Most agencies take 6–10 weeks. Because you approve the Canva design before I start building, there's no wasted time.",
    ],
  },
  {
    q: "Do you write the copy or do I need to?",
    a: [
      "I write all of it. Every page, every heading, every call to action, using my clinical background to make it sound like you, not a template.",
      "All I need is a 60-minute brand messaging session and answers to a short questionnaire. <strong>You don't need to write a single word.</strong>",
    ],
  },
  {
    q: "Is there a student or new grad discount?",
    a: [
      "Yes. 20% off all packages for current students and practitioners within their first 12 months of practice. Mention it when you enquire and I'll ask for brief verification.",
    ],
  },
]

function FaqItem({ q, a }: { q: string; a: string[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-lg overflow-hidden bg-white transition-colors duration-200"
      style={{ border: open ? '1px solid var(--sage)' : '1px solid var(--border-sage)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 font-body text-left cursor-pointer border-none transition-colors duration-200"
        style={{ background: open ? 'var(--sage-pale)' : 'transparent' }}
      >
        <span className="text-[15px] font-medium text-ink leading-[1.4] flex-1">{q}</span>
        <span
          className="text-sage-dark flex-shrink-0 flex items-center transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 flex flex-col gap-2.5 text-[14px] text-ink-mid font-light leading-[1.8]">
              {a.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PractitionersFAQ() {
  return (
    <section className="py-[100px]" style={{ background: 'var(--warm-white)' }}>
      <div className="max-w-container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:sticky md:top-[100px]"
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-4">
              Practitioner questions
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-ink"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              Common questions<br />
              from <em className="italic text-sage-dark">practitioners</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-0.5"
          >
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
