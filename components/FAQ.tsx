'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: "Why don't you build on WordPress, Wix, or Squarespace?",
    a: [
      "I've used them. Most business owners have tried them too — opened the builder, stared at 400 templates, felt overwhelmed, and closed the laptop. That's not a design process. That's a guessing game.",
      "The sites I build are custom-designed from scratch. I start by designing your entire site in Canva so you can see exactly what it will look like before anything gets built. Once you're happy, I code it. The result loads faster, ranks better in Google, and looks nothing like a template. <strong>Your clients notice the difference even if they can't name it.</strong>",
      "The short version: I don't use those platforms because I can build something better, and better is what you're paying for.",
    ],
  },
  {
    q: "Can I update the site myself once it's live?",
    a: [
      "Yes, for most content changes — updating your bio, adding a new service, swapping a photo. I'll walk you through how to do this and leave you with clear documentation.",
      "For bigger structural changes or new sections, that's what the Growth monthly retainer is for. It includes up to 2 hours of site updates per month so you're never stuck.",
    ],
  },
  {
    q: "Do you write all the copy or do I need to provide it?",
    a: [
      "I write all of it. Every page, every heading, every call to action — written specifically for your business and your ideal clients.",
      "All I need from you is a 60-minute brand messaging session and answers to a short questionnaire. <strong>You don't need to write a single word.</strong> I'll send you a draft and you tell me what to tweak.",
    ],
  },
  {
    q: "How long does the whole process take?",
    a: [
      "2–3 weeks from our first call to your site going live. That includes copy, design, two rounds of revisions, and full launch setup with analytics and booking integration.",
      "Most agencies take 6–10 weeks for the same thing. Because you approve the Canva design before I start building, there's no wasted time going back and forth in code.",
    ],
  },
  {
    q: "I'm not very tech-savvy. Is this going to be complicated?",
    a: [
      "Not at all. I handle everything technical — hosting, domain setup, analytics, booking systems, the lot. You never need to log into a cPanel or touch a DNS record.",
      "<strong>Your only job is to show up to a couple of calls and give feedback on drafts.</strong> Everything else is on me.",
    ],
  },
  {
    q: "Do you use AI to build websites?",
    a: [
      "Yes — and I'm upfront about it. I use AI tools to write cleaner code faster, research search terms your clients actually use, and draft copy that's structured to rank in Google. It's why I can deliver a custom site in 2–3 weeks at a price that would be impossible for a traditional agency.",
      "What I don't do is hand everything to a chatbot and call it done. <strong>Every design, every word of copy, and every strategy decision is made by me.</strong> AI handles the heavy lifting. I handle the thinking. You approve everything before it goes live.",
    ],
  },
  {
    q: "What industries do you work with?",
    a: [
      "I work with small businesses across all industries — health & wellness, professional services, hospitality, trades, coaching, retail, and more.",
      "I also have a <strong><a href='/health-practitioners' style='color: #c9a84c; text-decoration: underline;'>dedicated service for health practitioners</a></strong> built on my background as a qualified naturopath. If you're a naturopath, nutritionist, health coach, or integrative practitioner, that page has everything you need.",
    ],
  },
]

function FaqItem({ q, a }: { q: string; a: string[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-lg overflow-hidden bg-white transition-colors duration-200"
      style={{ border: open ? '1px solid var(--gold)' : '1px solid var(--border)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 font-body text-left cursor-pointer border-none transition-colors duration-200"
        style={{ background: open ? 'var(--gold-pale)' : 'transparent' }}
      >
        <span className="text-[15px] font-medium text-ink leading-[1.4] flex-1">
          {q}
        </span>
        <span
          className="text-gold flex-shrink-0 flex items-center transition-transform duration-300"
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

export default function FAQ() {
  return (
    <section id="faq" className="py-[100px]" style={{ background: 'var(--cream)' }}>
      <div className="max-w-container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-start">

          {/* Sticky left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:sticky md:top-[100px]"
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
              Common questions
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-ink"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              Things people<br />
              ask me <em className="italic" style={{ color: '#c9a84c' }}>first</em>
            </h2>
            <p className="text-[15px] text-ink-mid font-light leading-[1.7] mt-4">
              Honest answers — no fluff.
            </p>
          </motion.div>

          {/* FAQ list */}
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
