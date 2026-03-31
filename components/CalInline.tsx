'use client'
import { useEffect } from 'react'

export default function CalInline() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const tryInit = () => {
      const Cal = (window as any).Cal
      if (!Cal?.ns?.strategycall) return false

      Cal.ns.strategycall('inline', {
        elementOrSelector: '#my-cal-inline-strategycall',
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
        calLink: 'makeitmedia/strategycall',
      })
      return true
    }

    // Cal may already be loaded from layout.tsx, or may still be loading
    if (!tryInit()) {
      const interval = setInterval(() => {
        if (tryInit()) clearInterval(interval)
      }, 200)
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div
      id="my-cal-inline-strategycall"
      style={{
        width: '100%',
        height: '500px',
        overflow: 'auto',
        borderRadius: '16px',
        border: '1px solid rgba(74,110,87,0.15)',
      }}
    />
  )
}
