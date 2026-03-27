import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">PARED</Link>
          <p>A curated collection of non-toxic, plastic-free goods made from natural materials in the USA. Pared back to what matters.</p>
        </div>

        <nav className="footer-nav">
          <h4>Explore</h4>
          <ul className="footer-nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/collection">Collection</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><a href="https://x.com/paredshop" target="_blank" rel="noopener noreferrer">Twitter</a></li>
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
          PARED may earn a commission from purchases made through our links at no extra cost to you.{' '}
          <Link href="/disclaimer">Learn more.</Link>
        </p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Pared. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
