'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CalButton from './CalButton'

const tiers = [
  {
    tier: 'Tier 01',
    name: 'Presence',
    desc: 'Your professional home online — custom-built and conversion-ready.',
    price: 2200,
    priceNote: '+ GST · one-time · founding rate',
    monthly: true,
    features: [
      'Custom 6-page website, built from scratch',
      'Professional copywriting for all pages',
      'Online booking or contact integration',
      'On-page SEO foundations',
      'GA4 + Search Console + Clarity setup',
      'Lead magnet opt-in page',
      '2 rounds of revisions, 2–3 week delivery',
    ],
    featured: false,
    btnClass: 'btn-card-outline',
  },
  {
    tier: 'Tier 02',
    name: 'Visibility',
    desc: 'Website plus a full 30-day marketing launch to start driving leads immediately.',
    price: 3200,
    priceNote: '+ GST · one-time · founding rate',
    monthly: true,
    features: [
      'Everything in Presence',
      'Brand messaging session (60 min)',
      '30-day Instagram content calendar',
      '12 branded graphics + captions',
      'Email welcome sequence (3 emails, live)',
      'UTM tracking setup',
    ],
    featured: true,
    btnClass: 'btn-card-white',
  },
  {
    tier: 'Tier 03',
    name: 'Growth',
    desc: 'Ongoing marketing management so you can focus on running your business.',
    price: 997,
    priceNote: '+ GST · per month · founding rate',
    monthly: false,
    features: [
      '12 Instagram posts/month',
      '2 email newsletters/month',
      'Monthly analytics report',
      '1 × 30-min strategy call',
      'Website updates (up to 2 hrs/month)',
      '3-month minimum',
    ],
    featured: false,
    btnClass: 'btn-card-outline',
  },
]

const INSTALLMENTS = 4

type PaymentMode = 'upfront' | 'weekly'

function formatPrice(amount: number) {
  return amount.toLocaleString('en-AU', { maximumFractionDigits: 0 })
}

function getDisplayPrice(card: typeof tiers[0], mode: PaymentMode) {
  if (!card.monthly || mode === 'upfront') return formatPrice(card.price)
  return formatPrice(Math.ceil(card.price / INSTALLMENTS))
}

function getPriceNote(card: typeof tiers[0], mode: PaymentMode) {
  if (!card.monthly) return card.priceNote
  if (mode === 'upfront') return card.priceNote
  return `+ GST · per week × ${INSTALLMENTS} weeks · founding rate`
}

const regularVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 0px 0px rgba(20,20,20,0)',
    borderColor: 'rgba(201,168,76,0.2)',
  },
  hover: {
    y: -8,
    scale: 1,
    boxShadow: '0 20px 40px rgba(20,20,20,0.08)',
    borderColor: 'rgba(201,168,76,0.4)',
  },
}

const featuredVariants = {
  rest: {
    y: 0,
    scale: 1.03,
    boxShadow: '0 24px 56px rgba(20,20,20,0.25)',
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: '0 24px 48px rgba(20,20,20,0.22)',
  },
}

const springTransition = { type: 'spring', stiffness: 300, damping: 20 } as const

const paymentOptions: { key: PaymentMode; label: string }[] = [
  { key: 'upfront', label: 'Pay upfront' },
  { key: 'weekly', label: '4 weekly instalments' },
]

export default function Services() {
  const [paymentMode, setPaymentMode] = useState<PaymentMode>('upfront')

  return (
    <section id="services" className="py-[120px]" style={{ background: 'var(--cream)' }}>
      <div className="max-w-container mx-auto px-12">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
            Services &amp; Pricing
          </p>
          <h2
            className="font-display font-normal leading-[1.1] text-ink mb-4"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
          >
            Everything you need to<br />
            <em className="italic" style={{ color: '#c9a84c' }}>grow online</em>
          </h2>
          <p className="text-[16px] text-ink-mid font-light max-w-[520px] leading-[1.7] mb-10">
            Custom websites and marketing systems built for small businesses. No templates, no page builders — just clean, fast, conversion-focused design.
          </p>

          {/* Payment plan toggle */}
          <div className="flex items-center gap-2 mb-16">
            <div className="inline-flex rounded-full border border-[rgba(201,168,76,0.25)] bg-white p-1">
              {paymentOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setPaymentMode(opt.key)}
                  className={`relative px-5 py-2 rounded-full text-[13px] font-medium tracking-[0.01em] transition-all duration-200 ${
                    paymentMode === opt.key
                      ? 'bg-night text-white shadow-sm'
                      : 'text-ink-mid hover:text-ink'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {paymentMode !== 'upfront' && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-[12px] text-gold font-medium ml-2"
                >
                  0% interest · no credit checks
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((card, i) => {
            const displayPrice = getDisplayPrice(card, paymentMode)
            const priceNote = getPriceNote(card, paymentMode)

            return (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            >
              <motion.div
                className={`relative rounded-[20px] px-8 py-9 ${
                  card.featured ? '' : 'bg-white'
                }`}
                style={
                  card.featured
                    ? { background: 'var(--night)' }
                    : { borderWidth: '1px', borderStyle: 'solid' }
                }
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={card.featured ? featuredVariants : regularVariants}
                transition={springTransition}
              >
                <motion.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-[20px] pointer-events-none"
                  style={{
                    zIndex: 0,
                    background: card.featured
                      ? 'radial-gradient(circle at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)'
                      : 'radial-gradient(circle at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)',
                  }}
                />

                {card.featured && (
                  <div
                    className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-gold text-night text-[11px] font-medium tracking-[0.06em] uppercase px-[14px] py-[5px] rounded-full whitespace-nowrap"
                    style={{ zIndex: 2 }}
                  >
                    Most popular
                  </div>
                )}

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    className={`text-[11px] font-medium tracking-[0.1em] uppercase mb-2 ${
                      card.featured ? 'text-white/60' : 'text-ink-light'
                    }`}
                  >
                    {card.tier}
                  </div>

                  <div
                    className={`font-display text-[28px] font-medium leading-[1.1] mb-1 ${
                      card.featured ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {card.name}
                  </div>

                  <div
                    className={`text-[13px] font-light leading-[1.5] mb-6 ${
                      card.featured ? 'text-white/65' : 'text-ink-light'
                    }`}
                  >
                    {card.desc}
                  </div>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className={`text-[18px] font-normal ${
                        card.featured ? 'text-white/70' : 'text-ink-mid'
                      }`}
                    >
                      $
                    </span>
                    <motion.span
                      key={displayPrice}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`font-display text-[48px] font-medium leading-none ${
                        card.featured ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {displayPrice}
                    </motion.span>
                  </div>

                  <motion.div
                    key={priceNote}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`text-[12px] font-light mb-7 ${
                      card.featured ? 'text-white/55' : 'text-ink-light'
                    }`}
                  >
                    {priceNote}
                  </motion.div>

                  <div
                    className={`h-px mb-6 ${card.featured ? 'bg-white/15' : ''}`}
                    style={card.featured ? {} : { background: 'var(--border)' }}
                  />

                  <ul className="flex flex-col gap-3 mb-8">
                    {card.features.map((feat) => (
                      <li
                        key={feat}
                        className={`flex items-start gap-2.5 text-[13px] font-normal leading-[1.45] ${
                          card.featured
                            ? 'feature-check-white text-white/80'
                            : 'feature-check text-ink-mid'
                        }`}
                      >
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <CalButton
                    className={`block w-full text-center py-[14px] rounded-full font-body text-[14px] font-medium tracking-[0.01em] no-underline transition-all duration-200 cursor-pointer ${
                      card.featured
                        ? 'bg-gold text-night hover:bg-gold-light hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] border-none'
                        : 'bg-transparent border-[1.5px] border-gold text-night hover:bg-gold-pale'
                    }`}
                  >
                    Book a free strategy call
                  </CalButton>
                </div>
              </motion.div>
            </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
