'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CalButton from '@/components/CalButton'

const INSTALLMENTS = 4

type PaymentMode = 'upfront' | 'weekly'

const tiers = [
  {
    tier: 'Tier 01',
    name: 'Presence',
    desc: 'Your professional practice online, custom-built and patient-ready.',
    price: 2200,
    priceNote: '+ GST · one-time · founding rate',
    monthly: true,
    features: [
      'Custom 6-page website, built from scratch',
      'Professional copywriting using clinical language',
      'Online booking integration (Cliniko, Simple Clinic, or Go High Level)',
      'On-page SEO foundations',
      'GA4 + Search Console + Clarity setup',
      'Lead magnet opt-in page',
      '2 rounds of revisions, 2–3 week delivery',
    ],
    featured: false,
  },
  {
    tier: 'Tier 02',
    name: 'Visibility',
    desc: 'Website plus a full 30-day marketing launch to start driving bookings immediately.',
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
  },
  {
    tier: 'Tier 03',
    name: 'Growth',
    desc: 'Ongoing marketing management so you can focus on your patients.',
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
  },
]

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

const paymentOptions: { key: PaymentMode; label: string }[] = [
  { key: 'upfront', label: 'Pay upfront' },
  { key: 'weekly', label: '4 weekly instalments' },
]

export default function PractitionersServices() {
  const [paymentMode, setPaymentMode] = useState<PaymentMode>('upfront')

  return (
    <section id="practitioner-services" className="py-[120px]" style={{ background: 'var(--cream)' }}>
      <div className="max-w-container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-4">
            Practitioner packages
          </p>
          <h2
            className="font-display font-normal leading-[1.1] text-ink mb-4"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
          >
            Everything you need to<br />
            <em className="italic text-sage-dark">grow your practice</em>
          </h2>
          <p className="text-[16px] text-ink-mid font-light max-w-[520px] leading-[1.7] mb-10">
            Built specifically for health practitioners. Not by agencies that don't understand your patients, your language, or what people are actually searching for.
          </p>

          {/* Payment plan toggle */}
          <div className="flex items-center gap-2 mb-16">
            <div className="inline-flex rounded-full border border-[rgba(122,158,135,0.3)] bg-white p-1">
              {paymentOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setPaymentMode(opt.key)}
                  className={`relative px-5 py-2 rounded-full text-[13px] font-medium tracking-[0.01em] transition-all duration-200 ${
                    paymentMode === opt.key
                      ? 'bg-sage-dark text-white shadow-sm'
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
                  className="text-[12px] font-medium ml-2"
                  style={{ color: '#4a6e57' }}
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
              <div
                className={`relative rounded-[20px] px-8 py-9 ${card.featured ? '' : 'bg-white'}`}
                style={
                  card.featured
                    ? { background: 'var(--sage-dark)' }
                    : { border: '1px solid var(--border-sage)' }
                }
              >
                {card.featured && (
                  <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-terra text-white text-[11px] font-medium tracking-[0.06em] uppercase px-[14px] py-[5px] rounded-full whitespace-nowrap">
                    Most popular
                  </div>
                )}

                <div className={`text-[11px] font-medium tracking-[0.1em] uppercase mb-2 ${card.featured ? 'text-white/60' : 'text-ink-light'}`}>
                  {card.tier}
                </div>
                <div className={`font-display text-[28px] font-medium leading-[1.1] mb-1 ${card.featured ? 'text-white' : 'text-ink'}`}>
                  {card.name}
                </div>
                <div className={`text-[13px] font-light leading-[1.5] mb-6 ${card.featured ? 'text-white/65' : 'text-ink-light'}`}>
                  {card.desc}
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-[18px] font-normal ${card.featured ? 'text-white/70' : 'text-ink-mid'}`}>
                    $
                  </span>
                  <motion.span
                    key={displayPrice}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`font-display text-[48px] font-medium leading-none ${card.featured ? 'text-white' : 'text-ink'}`}
                  >
                    {displayPrice}
                  </motion.span>
                </div>
                <motion.div
                  key={priceNote}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`text-[12px] font-light mb-7 ${card.featured ? 'text-white/55' : 'text-ink-light'}`}
                >
                  {priceNote}
                </motion.div>

                <div className={`h-px mb-6 ${card.featured ? 'bg-white/15' : ''}`} style={card.featured ? {} : { background: 'var(--border-sage)' }} />

                <ul className="flex flex-col gap-3 mb-8">
                  {card.features.map((feat) => (
                    <li
                      key={feat}
                      className={`flex items-start gap-2.5 text-[13px] font-normal leading-[1.45] ${
                        card.featured
                          ? 'feature-check-white text-white/80'
                          : 'feature-check-sage text-ink-mid'
                      }`}
                    >
                      {feat}
                    </li>
                  ))}
                </ul>

                <CalButton
                  className={`block w-full text-center py-[14px] rounded-full font-body text-[14px] font-medium tracking-[0.01em] no-underline transition-all duration-200 cursor-pointer ${
                    card.featured
                      ? 'bg-white text-sage-dark hover:bg-warm-white hover:-translate-y-px border-none'
                      : 'bg-transparent border-[1.5px] border-sage text-sage-dark hover:bg-sage-pale'
                  }`}
                >
                  Book a free strategy call
                </CalButton>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
