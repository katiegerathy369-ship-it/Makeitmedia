'use client'

import { motion } from 'framer-motion'

const stats = [
  { num: '2–3', label: 'week delivery' },
  { num: '6', label: 'pages, fully written' },
  { num: '✦', label: 'copy that converts' },
  { num: '100%', label: 'custom design' },
]

export default function HeroMockup() {
  return (
    <div className="relative">
      {/* Floating badge */}
      <div
        className="absolute top-[-18px] right-[-18px] bg-gold text-night rounded-full px-4 py-2 text-[12px] font-medium whitespace-nowrap z-10"
        style={{ boxShadow: '0 4px 16px rgba(201,168,76,0.3)' }}
      >
        ✦ Founding client spots open
      </div>

      {/* Browser frame */}
      <div
        className="bg-white rounded-[24px] overflow-hidden"
        style={{
          border: '1px solid var(--border)',
          boxShadow: '0 24px 64px rgba(20,20,20,0.07)',
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-2 px-5 py-3 border-b"
          style={{ background: 'var(--warm-white)', borderColor: 'var(--border)' }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff6058]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbe2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div
            className="flex-1 mx-3 rounded-full text-[11px] text-ink-light font-light text-center py-[3px]"
            style={{ background: 'var(--border)', maxWidth: 180, marginLeft: 'auto', marginRight: 'auto' }}
          >
            yourbusiness.com.au
          </div>
        </div>

        {/* Page content */}
        <div className="p-6">
          <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-light mb-4">
            What you get
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
                className="bg-warm-white rounded-lg px-5 py-[18px]"
              >
                <div className="font-display text-[36px] font-medium text-ink leading-none mb-1">
                  {stat.num}
                </div>
                <div className="text-[12px] text-ink-light font-normal">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client row */}
          <div
            className="flex items-center gap-3 px-5 py-4 bg-gold-pale rounded-lg"
            style={{ border: '1px solid rgba(201,168,76,0.25)' }}
          >
            <div className="w-9 h-9 rounded-full bg-gold-light flex items-center justify-center font-display text-[16px] font-semibold text-night flex-shrink-0">
              A
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-medium text-ink leading-[1.3]">
                Amy Angus - Naturopath
              </div>
              <div className="text-[11px] text-ink-light font-light">
                Brisbane, QLD
              </div>
            </div>
            <div className="text-[12px] font-medium text-gold text-right">
              Live ✦
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
