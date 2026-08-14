'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/groups', label: 'Groups & Workshops' },
  { href: '/resources', label: 'Resources' },
  { href: '/regulation', label: 'Regulation Tool' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-forest/95 backdrop-blur-md text-cream border-b border-forest-dark/70 shadow-[0_12px_32px_-16px_rgba(20,45,20,0.5)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-wide hover:text-gold-light transition-colors"
        >
          Hilary Lucas Counselling
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://HilaryLucas.as.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold px-5 py-2 text-sm"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-forest-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link w-fit py-1 ${pathname === link.href ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://HilaryLucas.as.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold px-5 py-2.5 text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
