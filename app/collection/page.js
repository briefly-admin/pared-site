import Nav from '../../components/Nav'
import ProductGrid from '../../components/ProductGrid'
import EmailSignup from '../../components/EmailSignup'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Shop | Valley of the Lilies',
  description: 'Browse our curated collection of non-toxic, natural-material goods for women. Every product is vetted for quality, materials, and origin.',
}

export default function CollectionPage() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: '72px' }}>
        {/* Affiliate Disclosure — above the fold */}
        <div className="disclosure-bar">
          <p>
            <strong>Affiliate Disclosure:</strong>{' '}
            Valley of the Lilies may earn a commission from qualifying purchases made through our links, at no additional cost to you.
            All products are independently curated. <Link href="/disclaimer" style={{ color: 'var(--votl-accent)', borderBottom: '1px solid rgba(196,131,106,0.3)' }}>Full disclosure.</Link>
          </p>
        </div>

        {/* Section header */}
        <div className="section-header">
          <h2>The Collection</h2>
          <p>Non-toxic, plastic-free goods vetted for quality, materials, and origin. Every brand earns its place here.</p>
        </div>

        <ProductGrid showHeader={false} />

        {/* Art divider — Claude Monet, Garden at Sainte-Adresse, 1867 */}
        <div className="art-divider">
          <img
            src="/art/monet-garden.jpg"
            alt="Claude Monet, Garden at Sainte-Adresse, 1867"
          />
          <div className="art-divider-overlay" />
          <div className="art-divider-text">
            <blockquote>"Strip away the synthetic, the harmful, the disposable — and what you're left with is quality that lasts."</blockquote>
            <cite>Claude Monet, Garden at Sainte-Adresse, 1867 · The Met, CC0</cite>
          </div>
        </div>
      </div>
      <EmailSignup />
      <Footer />
    </>
  )
}
