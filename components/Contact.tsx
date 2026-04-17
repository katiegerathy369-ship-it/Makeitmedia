'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  businessType: string
  service: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessType: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const { ref: sectionRef, y: blobY } = useParallax(0.2)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const formData = new URLSearchParams()
      formData.append('form-name', 'contact')
      Object.entries(form).forEach(([key, value]) => formData.append(key, value))
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
  }

  const inputBase =
    'w-full bg-white/[0.07] border border-white/15 rounded-lg px-4 py-[13px] font-body text-[14px] text-white font-light outline-none transition-all duration-200 placeholder:text-white/30 focus:border-gold focus:bg-white/10'

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="contact"
      className="py-[120px] relative overflow-hidden"
      style={{ background: 'var(--night)', color: '#fff' }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          y: blobY,
          willChange: 'transform',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Botanical decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: -80,
          bottom: -40,
          width: 280,
          height: 360,
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <svg width="280" height="360" viewBox="0 0 280 360" fill="none">
          <path d="M140 360 C140 360 140 40 140 10" stroke="rgba(201,168,76,1)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M140 280 C100 260 60 240 50 200 C90 195 130 220 140 280Z" fill="rgba(201,168,76,1)"/>
          <path d="M140 210 C180 185 220 170 230 130 C190 128 148 155 140 210Z" fill="rgba(201,168,76,1)"/>
          <path d="M140 140 C110 115 95 80 105 50 C130 60 148 95 140 140Z" fill="rgba(201,168,76,1)"/>
        </svg>
      </div>

      <div className="max-w-container mx-auto px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p
              className="text-[11px] font-medium tracking-[0.12em] uppercase mb-4"
              style={{ color: 'var(--gold)' }}
            >
              Let's talk
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-white mb-5"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
            >
              Ready to grow{' '}
              <em className="italic" style={{ color: 'var(--gold)' }}>
                your business?
              </em>
            </h2>
            <p className="text-[15px] font-light leading-[1.7] mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Book a free 30-minute strategy call. No sales pressure, just an honest conversation about what you need and whether we're a good fit.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[14px] font-light" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <rect x="2" y="3" width="12" height="10" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                  <path d="M2 6l6 4 6-4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                </svg>
                <a href="mailto:kate@makeitmedia.io" style={{ color: 'var(--gold)', textDecoration: 'none' }}
                  className="hover:underline">
                  kate@makeitmedia.io
                </a>
              </div>
              <div className="flex items-center gap-3 text-[14px] font-light" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                  <path d="M8 4v4l3 2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Responses within 24 hours
              </div>
              <div className="flex items-center gap-3 text-[14px] font-light" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                  <circle cx="8" cy="6" r="1.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                </svg>
                Working with businesses across Australia
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="rounded-[20px] p-10"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-[12px] font-medium tracking-[0.06em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    className={inputBase}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium tracking-[0.06em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    className={inputBase}
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[12px] font-medium tracking-[0.06em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@yourbusiness.com.au"
                  className={inputBase}
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-[12px] font-medium tracking-[0.06em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="04XX XXX XXX"
                  className={inputBase}
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-[12px] font-medium tracking-[0.06em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  What type of business do you run?
                </label>
                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  className={`${inputBase} form-select-custom cursor-pointer`}
                  required
                >
                  <option value="" disabled>Select your business type</option>
                  <option>Health & wellness</option>
                  <option>Professional services</option>
                  <option>Retail & ecommerce</option>
                  <option>Hospitality & food</option>
                  <option>Trades & construction</option>
                  <option>Creative & agency</option>
                  <option>Coaching & consulting</option>
                  <option>Finance & accounting</option>
                  <option>Beauty & aesthetics</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-[12px] font-medium tracking-[0.06em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  What do you need?
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputBase} form-select-custom cursor-pointer`}
                >
                  <option value="" disabled>Select a service</option>
                  <option>New website</option>
                  <option>Website redesign</option>
                  <option>Website + marketing launch</option>
                  <option>Ongoing marketing</option>
                  <option>Not sure yet - let's chat</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-[12px] font-medium tracking-[0.06em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Tell me about your business and project
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What does your business do? What are you hoping to achieve with your website?"
                  className={`${inputBase} resize-y min-h-[110px]`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                id="cta-contact-submit"
                className="w-full mt-2 py-[15px] rounded-full font-body text-[14px] font-medium tracking-[0.02em] border-none cursor-pointer transition-all duration-200 disabled:cursor-default"
                style={
                  submitted
                    ? { background: 'var(--gold-light)', color: 'var(--night)' }
                    : { background: 'var(--gold)', color: 'var(--night)' }
                }
              >
                {submitted ? 'Message sent ✓' : 'Send my enquiry →'}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
