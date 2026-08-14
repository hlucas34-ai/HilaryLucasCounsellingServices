'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/* Watches every element marked `.reveal` and settles it into view the
   first time it appears on screen. Runs again after each navigation so
   newly mounted pages are covered too. If IntersectionObserver is
   missing, everything is simply shown. */
export default function Revealer() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
