'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Page = 'home' | 'about' | 'booking' | 'contact'
type Viewport = 'desktop' | 'mobile'
type Side = 'before' | 'after'

const BASE = '/images/portfolio/amy-angus-naturopathy'

const images: Record<Side, Record<Viewport, Record<Page, string | null>>> = {
  before: {
    desktop: {
      home:    `${BASE}/desktop-before/desktop-before-amy-angus-home.png`,
      about:   `${BASE}/desktop-before/desktop-before-amy-angus-about.png`,
      booking: `${BASE}/desktop-before/desktop-before-amy-angus-booking.png`,
      contact: `${BASE}/desktop-before/desktop-before-amy-angus-contact.png`,
    },
    mobile: {
      home:    `${BASE}/mobile-before/mobile-before-home.jpeg`,
      about:   `${BASE}/mobile-before/mobile-before-about.jpeg`,
      booking: `${BASE}/mobile-before/mobile-before-book.jpeg`,
      contact: `${BASE}/mobile-before/mobile-before-contact.jpeg`,
    },
  },
  after: {
    desktop: {
      home:    `${BASE}/desktop-after/desktop-after-home.png`,
      about:   `${BASE}/desktop-after/desktop-after-about.png`,
      booking: `${BASE}/desktop-after/desktop-after-booking.png`,
      contact: `${BASE}/desktop-after/desktop-after-contact.png`,
    },
    mobile:  { home: null, about: null, booking: null, contact: null },
  },
}

const pageLabels: Record<Page, string> = {
  home: 'Home', about: 'About', booking: 'Booking', contact: 'Contact',
}

const MonitorIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="2" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="5" y1="10" x2="9" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="7" y1="10" x2="7" y2="12" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="3.5" y="1" width="7" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="7" cy="11" r="0.8" fill="currentColor"/>
  </svg>
)

function BACard({
  side,
  activePage,
  onPageChange,
  viewport,
  onViewportChange,
}: {
  side: Side
  activePage: Page
  onPageChange: (p: Page) => void
  viewport: Viewport
  onViewportChange: (v: Viewport) => void
}) {
  const isBefore = side === 'before'
  const imgSrc = images[side][viewport][activePage]
  const dotColor = isBefore ? 'var(--terra)' : 'var(--sage)'
  const labelColor = isBefore ? 'var(--terra)' : 'var(--sage-dark)'
  const cardLabel = isBefore ? 'Before — old site' : 'After — Make It Media'

  return (
    <div
      className="rounded-[20px] overflow-hidden bg-white"
      style={{ border: '1px solid var(--border)' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between gap-3 px-4 py-3"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-2">
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: dotColor, flexShrink: 0 }} />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: labelColor }}>
            {cardLabel}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Page selector */}
          <select
            value={activePage}
            onChange={(e) => onPageChange(e.target.value as Page)}
            className="font-body cursor-pointer outline-none"
            style={{
              fontSize: 12, color: 'var(--ink-mid)',
              background: 'var(--warm-white)',
              border: '1px solid var(--border)', borderRadius: 100,
              padding: '5px 28px 5px 12px',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238a8078' stroke-width='1.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 10px center',
              minWidth: 120,
            }}
          >
            {(Object.entries(pageLabels) as [Page, string][]).map(([val, label]) => (
              <option key={val} value={val}>{label}</option>
            ))}
          </select>

          {/* Viewport toggle */}
          <div
            className="flex items-center gap-0.5"
            style={{
              background: 'var(--warm-white)', border: '1px solid var(--border)',
              borderRadius: 100, padding: 3,
            }}
          >
            {(['desktop', 'mobile'] as Viewport[]).map((vp) => (
              <button
                key={vp}
                onClick={() => onViewportChange(vp)}
                title={`${vp} view`}
                style={{
                  width: 28, height: 26, borderRadius: 100,
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: viewport === vp ? '#fff' : 'transparent',
                  boxShadow: viewport === vp ? '0 1px 4px rgba(42,37,32,0.1)' : undefined,
                  color: viewport === vp ? 'var(--ink)' : 'var(--ink-light)',
                }}
              >
                {vp === 'desktop' ? <MonitorIcon /> : <PhoneIcon />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Screen */}
      {viewport === 'desktop' ? (
        <div style={{ height: 520, overflowY: imgSrc ? 'scroll' : 'hidden', background: 'var(--warm-white)', scrollbarWidth: 'thin', scrollbarColor: 'rgba(122,158,135,0.3) transparent' }}>
          {imgSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imgSrc} alt={`${side} ${activePage} desktop`} style={{ width: '100%', height: 'auto', display: 'block' }} />
          ) : (
            <div
              className="flex flex-col items-center justify-center gap-2"
              style={{ height: '100%', background: isBefore ? 'linear-gradient(155deg,#f5f0ea 0%,#ede8e2 100%)' : 'linear-gradient(155deg,#f0f7f2 0%,#e6f2ea 100%)' }}
            >
              <div style={{ fontSize: 28, opacity: 0.3 }}>{isBefore ? '📸' : '✦'}</div>
              <div className="font-display italic" style={{ fontSize: 13, color: 'var(--ink-light)', opacity: 0.7 }}>
                {pageLabels[activePage]} — desktop
              </div>
              <div style={{ fontSize: 10, color: 'var(--ink-light)', opacity: 0.45, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Add screenshot to activate
              </div>
              <div
                style={{
                  marginTop: 8, fontSize: 10,
                  color: 'var(--terra)', opacity: 0.5,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  background: 'var(--terra-pale)', border: '1px solid var(--terra-light)',
                  padding: '3px 10px', borderRadius: 100,
                }}
              >
                {isBefore ? 'Upload before images' : 'Upload after images'}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="flex items-center justify-center"
          style={{ height: 520, background: '#e8e5e0', padding: 20 }}
        >
          <div
            style={{
              width: 200, background: '#1a1a1a',
              borderRadius: 28, padding: 10,
              boxShadow: '0 20px 48px rgba(0,0,0,0.3)',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: 60, height: 18, background: '#1a1a1a',
                borderRadius: '0 0 12px 12px',
                position: 'absolute', top: 0, left: '50%',
                transform: 'translateX(-50%)', zIndex: 2,
              }}
            />
            <div
              style={{
                background: 'var(--warm-white)', borderRadius: 20,
                overflow: 'hidden', aspectRatio: '9/19', position: 'relative',
              }}
            >
              {imgSrc ? (
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgSrc} alt={`${side} ${activePage} mobile`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <div className="font-display italic" style={{ fontSize: 11, color: 'var(--ink-light)', opacity: 0.7 }}>
                    {pageLabels[activePage]} — mobile
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function BeforeAfter() {
  const [activePage, setActivePage] = useState<Page>('home')
  const [beforeViewport, setBeforeViewport] = useState<Viewport>('desktop')
  const [afterViewport, setAfterViewport] = useState<Viewport>('desktop')

  return (
    <section style={{ padding: '100px 0', background: 'var(--warm-white)' }}>
      <div className="max-w-container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-3">
            Before &amp; after
          </p>
          <h2
            className="font-display font-normal text-ink mb-14"
            style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.12 }}
          >
            The <em className="italic text-sage-dark">difference</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          <BACard
            side="before"
            activePage={activePage}
            onPageChange={setActivePage}
            viewport={beforeViewport}
            onViewportChange={setBeforeViewport}
          />
          <BACard
            side="after"
            activePage={activePage}
            onPageChange={setActivePage}
            viewport={afterViewport}
            onViewportChange={setAfterViewport}
          />
        </motion.div>

        <p className="text-center mt-4" style={{ fontSize: 12, color: 'var(--ink-light)', fontWeight: 300, fontStyle: 'italic' }}>
          Page selectors are synced — changing one updates both sides simultaneously.
        </p>

        {/* Comparison list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12"
        >
          <div>
            <div
              className="text-[11px] font-medium tracking-[0.1em] uppercase mb-4 pb-3"
              style={{ color: 'var(--terra)', borderBottom: '1px solid var(--border)' }}
            >
              Before
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                'Outdated platform, slow load times',
                'Generic template design',
                'No online booking system',
                'Copy written without clinical context',
                'No SEO foundations or analytics',
                'Not optimised for mobile',
                'No clear patient journey',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5" style={{ fontSize: 13, color: 'var(--ink-mid)', fontWeight: 300, lineHeight: 1.5 }}>
                  <span
                    style={{
                      width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                      background: '#faf0eb', border: '1.5px solid var(--terra-light)',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='2' viewBox='0 0 8 2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h6' stroke='%23c4714a' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              className="text-[11px] font-medium tracking-[0.1em] uppercase mb-4 pb-3"
              style={{ color: 'var(--sage-dark)', borderBottom: '1px solid var(--border)' }}
            >
              After
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                'Custom-built — fast, modern, scalable',
                'Unique brand identity and visual design',
                'Simple Clinic booking integration',
                'Practitioner-written copy that speaks to patients',
                'GA4 + Google Search Console live',
                'Fully responsive across all devices',
                'Clear path from landing to booking',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5" style={{ fontSize: 13, color: 'var(--ink-mid)', fontWeight: 300, lineHeight: 1.5 }}>
                  <span
                    style={{
                      width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                      background: 'var(--sage-pale)', border: '1.5px solid var(--sage)',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3l2 2 4-4' stroke='%234a6e57' stroke-width='1.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
