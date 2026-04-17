'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'mim-guide-exit-dismissed'
const SESSION_KEY = 'mim-guide-exit-shown'
const DISMISS_DAYS = 7
const MOBILE_DELAY_MS = 30_000
const MOBILE_SCROLL_THRESHOLD = 0.5
const PDF_URL = '/downloads/5-website-mistakes-practitioners.pdf'
const KIT_FORM_URL = 'https://app.kit.com/forms/9337733/subscriptions'

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ firstName: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const shouldSuppress = useCallback(() => {
    if (typeof window === 'undefined') return true
    if (sessionStorage.getItem(SESSION_KEY)) return true
    const dismissedAt = localStorage.getItem(STORAGE_KEY)
    if (dismissedAt) {
      const days = (Date.now() - Number(dismissedAt)) / 86_400_000
      if (days < DISMISS_DAYS) return true
    }
    return false
  }, [])

  const trigger = useCallback(() => {
    if (shouldSuppress()) return
    sessionStorage.setItem(SESSION_KEY, '1')
    setOpen(true)
  }, [shouldSuppress])

  // Desktop: mouse leaves viewport from the top
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(max-width: 767px)').matches) return

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger()
    }
    document.addEventListener('mouseleave', onLeave)
    return () => document.removeEventListener('mouseleave', onLeave)
  }, [trigger])

  // Mobile: 30s + 50% scroll depth
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(max-width: 767px)').matches) return

    let scrolledEnough = false
    let timerElapsed = false

    const checkScroll = () => {
      const progress =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight
      if (progress >= MOBILE_SCROLL_THRESHOLD) {
        scrolledEnough = true
        if (timerElapsed) trigger()
      }
    }

    const timer = setTimeout(() => {
      timerElapsed = true
      if (scrolledEnough) trigger()
    }, MOBILE_DELAY_MS)

    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', checkScroll)
    }
  }, [trigger])

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()))
    setOpen(false)
  }

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
    'w-full bg-white border border-sage-light/60 rounded-lg px-4 py-[12px] font-body text-[14px] text-ink font-normal outline-none transition-all duration-200 placeholder:text-ink-light focus:border-sage-dark focus:shadow-[0_0_0_3px_rgba(122,158,135,0.15)]'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="exit-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(42,37,32,0.55)', backdropFilter: 'blur(6px)' }}
          onClick={handleClose}
        >
          <motion.div
            key="exit-modal"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-[520px] rounded-[20px] bg-white overflow-hidden"
            style={{ boxShadow: '0 40px 80px -20px rgba(74,110,87,0.35)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-transparent hover:bg-sage-pale border-none cursor-pointer transition-colors z-10"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="#5a524a" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Sage header strip */}
            <div
              className="px-10 pt-10 pb-7"
              style={{ background: 'linear-gradient(160deg, var(--sage-pale) 0%, var(--cream) 100%)' }}
            >
              {!submitted ? (
                <>
                  <h2
                    id="exit-title"
                    className="font-display font-normal leading-[1.1] text-ink"
                    style={{ fontSize: 'clamp(24px, 2.8vw, 30px)' }}
                  >
                    5 Website Mistakes{' '}
                    <em className="italic text-sage-dark">Costing Health Practitioners Clients</em>
                  </h2>
                  <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-sage-dark mt-4">
                    Free guide · 10 pages
                  </p>
                </>
              ) : (
                <div className="text-center py-2">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: 'var(--sage-light)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="#4a6e57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="font-display text-[24px] leading-[1.15] text-ink mb-2">
                    Your guide is downloading.
                  </h2>
                  <p className="text-[14px] text-ink-mid font-light">
                    I've also sent a copy to{' '}
                    <strong className="text-ink">{form.email}</strong>.
                  </p>
                </div>
              )}
            </div>

            {!submitted && (
              <form
                action={KIT_FORM_URL}
                method="post"
                onSubmit={handleSubmit}
                className="px-10 pt-6 pb-9"
              >
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className={inputBase}
                    required
                    aria-label="First name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={inputBase}
                    required
                    aria-label="Email"
                  />
                </div>

                <button
                  type="submit"
                  id="cta-exit-modal-submit"
                  className="w-full py-[13px] rounded-full font-body text-[14px] font-medium tracking-[0.02em] border-none cursor-pointer transition-all duration-200 bg-sage-dark text-white hover:bg-ink hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(74,110,87,0.25)]"
                >
                  Send me the guide →
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full mt-3 py-2 font-body text-[12px] text-ink-light bg-transparent border-none cursor-pointer hover:text-ink-mid transition-colors"
                >
                  No thanks, I'll pass
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
