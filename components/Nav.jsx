'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="nav-logo">PARED</Link>
      <ul className="nav-links">
        <li><Link href="/">Discover</Link></li>
        <li><Link href="/collection">Browse</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
      <button
        className="nav-mobile-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
      </button>
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          background: 'var(--pared-bg)',
          padding: '2rem',
          borderBottom: '1px solid var(--pared-subtle)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 99,
        }}>
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pared-muted)' }}
          >Discover</Link>
          <Link
            href="/collection"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pared-muted)' }}
          >Browse</Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pared-muted)' }}
          >About</Link>
        </div>
      )}
    </nav>
  )
}
