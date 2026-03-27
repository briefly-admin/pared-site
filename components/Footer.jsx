import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="footer-logo">PARED</Link>
      <div className="footer-links">
        <Link href="/">Home</Link>
        <Link href="/collection">Collection</Link>
        <Link href="/about">About</Link>
        <a href="https://x.com/paredshop" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Pared. Pared back to what matters.
      </div>
    </footer>
  )
}
