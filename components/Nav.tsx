'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import CalButton from './CalButton'
import { usePathname } from 'next/navigation'
import { useAnimate } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isWork = pathname === '/work'
  const practitionerExactPaths = ['/work/amy-angus', '/work/vitalis-naturopathy']
  const isPractitioners =
    pathname.startsWith('/health-practitioners') || practitionerExactPaths.includes(pathname)
  const s = isWork || isPractitioners ? '/' : ''
  const accent = isPractitioners ? '#7a9e87' : '#c9a84c'
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sequence = async () => {
      await animate('#logo-circle', { strokeDashoffset: [157, 0] }, { duration: 0.9, ease: [0.4, 0, 0.2, 1] })
      animate('#logo-stem', { strokeDashoffset: [74, 0] }, { duration: 0.7, ease: [0.4, 0, 0.2, 1] })
      await animate('#logo-leaf1', { opacity: [0, 1] }, { duration: 0.5, delay: 0.1 })
      await animate('#logo-leaf2', { opacity: [0, 1] }, { duration: 0.5 })
      animate('#logo-dot', { opacity: [0, 1], scale: [0, 1] }, { duration: 0.35 })
    }
    sequence()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const linkClass =
    'font-body text-[14px] font-normal text-ink-mid tracking-[0.02em] no-underline hover:text-gold transition-colors duration-200'
  const activeLinkClass =
    'font-body text-[14px] font-medium text-ink tracking-[0.02em] no-underline'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between backdrop-blur-md border-b border-gold/20 transition-all duration-300"
      style={{
        padding: scrolled ? '14px clamp(16px, 4vw, 48px)' : '20px clamp(16px, 4vw, 48px)',
        background: 'rgba(250,248,244,0.85)',
      }}
    >
      <Link href="/" className="flex-shrink-0">
        <div
          ref={scope}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          {/* Botanical mark — plant/grow logo */}
          <svg
            width={52}
            height={62}
            viewBox="0 0 56 68"
            fill="none"
            aria-hidden="true"
          >
            <circle
              id="logo-circle"
              cx="28"
              cy="28"
              r="22"
              stroke={accent}
              strokeWidth="2.2"
              strokeDasharray="157"
              strokeDashoffset="157"
            />
            <line
              id="logo-stem"
              x1="28"
              y1="66"
              x2="28"
              y2="2"
              stroke="#141414"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeDasharray="74"
              strokeDashoffset="74"
            />
            <path
              id="logo-leaf1"
              d="M28 36 C18 29 10 25 10 14 C18 14 28 22 28 36Z"
              fill="#141414"
              opacity={0}
            />
            <path
              id="logo-leaf2"
              d="M28 22 C38 14 46 11 48 2 C40 3 28 11 28 22Z"
              fill={accent}
              opacity={0}
            />
            <circle
              id="logo-dot"
              cx="28"
              cy="2"
              r="4"
              fill={accent}
              style={{ opacity: 0, transform: 'scale(0)', transformOrigin: '28px 2px' }}
            />
          </svg>

          {/* Vertical divider */}
          <div style={{ width: '1px', height: '40px', background: 'rgba(42,37,32,0.15)' }} />

          {/* Wordmark */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 600,
                color: '#2a2520',
                letterSpacing: '0.02em',
              }}
            >
              make it
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 600,
                fontStyle: 'italic',
                color: accent,
                letterSpacing: '0.02em',
              }}
            >
              media
            </span>
          </div>
        </div>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        <li>
          <a href={`${s}#services`} className={linkClass}>
            Services
          </a>
        </li>
        <li>
          <Link href="/work" className={isWork ? activeLinkClass : linkClass}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/health-practitioners"
            className={isPractitioners ? activeLinkClass : `${linkClass} text-gold`}
          >
            For Practitioners
          </Link>
        </li>
        <li>
          <CalButton className="font-body text-[13px] font-medium tracking-[0.03em] no-underline px-[22px] py-[10px] rounded-full bg-night text-white hover:bg-gold hover:text-night hover:-translate-y-px transition-all duration-200 border-none cursor-pointer">
            Book a call
          </CalButton>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className="block w-5 h-[2px] bg-ink transition-all duration-300"
          style={mobileOpen ? { transform: 'rotate(45deg) translate(2.5px, 2.5px)' } : {}}
        />
        <span
          className="block w-5 h-[2px] bg-ink transition-all duration-300"
          style={mobileOpen ? { opacity: 0 } : {}}
        />
        <span
          className="block w-5 h-[2px] bg-ink transition-all duration-300"
          style={mobileOpen ? { transform: 'rotate(-45deg) translate(2.5px, -2.5px)' } : {}}
        />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[99]"
          style={{ top: scrolled ? '56px' : '68px' }}
        >
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileOpen(false)}
          />
          <ul
            className="relative flex flex-col gap-1 list-none p-6"
            style={{ background: 'rgba(250,248,244,0.98)', backdropFilter: 'blur(12px)' }}
          >
            <li>
              <a
                href={`${s}#services`}
                className={`${linkClass} block py-3 text-[16px]`}
                onClick={() => setMobileOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <Link
                href="/work"
                className={`${isWork ? activeLinkClass : linkClass} block py-3 text-[16px]`}
                onClick={() => setMobileOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/health-practitioners"
                className={`${linkClass} block py-3 text-[16px] text-gold`}
                onClick={() => setMobileOpen(false)}
              >
                For Practitioners
              </Link>
            </li>
            <li className="pt-3">
              <CalButton className="font-body text-[14px] font-medium tracking-[0.03em] no-underline px-[22px] py-[12px] rounded-full bg-night text-white border-none cursor-pointer w-full text-center block">
                Book a call
              </CalButton>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
