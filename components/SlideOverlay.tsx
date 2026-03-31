'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function SlideOverlay() {
  const pathname = usePathname()
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname + '-overlay'}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#faf8f4',
          zIndex: 9999,
          originX: 0,
          pointerEvents: 'none',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0, transition: { duration: 0 } }}
        exit={{ scaleX: [0, 1, 1, 0], originX: [0, 0, 1, 1] }}
        transition={{
          duration: 0.8,
          times: [0, 0.4, 0.6, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </AnimatePresence>
  )
}
