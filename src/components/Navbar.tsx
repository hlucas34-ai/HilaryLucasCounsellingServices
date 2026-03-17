'use client'

import { useState } from 'react'
import Link from 'next/link'

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

  return (
    <nav className="bg-forest text-cream sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide hover:text-gold-light transition-colors">
          Hilary Lucas Counselling
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://HilaryLucas.as.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-5 py-2 rounded-full font-medium hover:bg-gold-light transition-colors"
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
              className="hover:text-gold-light transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://HilaryLucas.as.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-5 py-2 rounded-full font-medium text-center hover:bg-gold-light transition-colors mt-2"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
