'use client'

interface CalButtonProps {
  children: React.ReactNode
  className?: string
}

export default function CalButton({ children, className }: CalButtonProps) {
  return (
    <button
      className={className}
      data-cal-link="makeitmedia/strategycall"
      data-cal-namespace="strategycall"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}'
    >
      {children}
    </button>
  )
}
