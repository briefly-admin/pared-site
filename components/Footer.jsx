import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="nav-logo-main">Valley</span>
            <span className="nav-logo-sub" style={{ color: 'rgba(247,243,238,0.4)' }}>of the Lilies</span>
          </Link>
          <p>The everyday, made right. Real materials, non-toxic formulas, and American craftsmanship — for the rituals that define your days.</p>
        </div>

        <nav className="footer-nav">
          <h4>Explore</h4>
          <ul className="footer-nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/collection">Shop</Link></li>
            <li><Link href="/about">Our Story</Link></li>
            <li><a href="https://x.com/valleylilies" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </nav>

        <nav className="footer-legal">
          <h4>Legal</h4>
          <ul className="footer-legal-links">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
            <li><Link href="/disclaimer">Health Disclaimer</Link></li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <p className="footer-ftc">
          <strong style={{ color: 'rgba(247,243,238,0.6)', fontWeight: 500 }}>Affiliate Disclosure:</strong>{' '}
          Valley of the Lilies may earn a commission from purchases made through our links at no extra cost to you.{' '}
          <Link href="/disclaimer">Learn more.</Link>
        </p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Valley of the Lilies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
