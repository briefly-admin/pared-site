import { notFound } from 'next/navigation'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import FadeIn from '../../../components/FadeIn'
import Link from 'next/link'
import productsData from '../../../data/products.json'

const TAG_CLASS = {
  'plastic-free': 'tag-plastic-free',
  'non-toxic': 'tag-non-toxic',
  'made-in-usa': 'tag-made-in-usa',
  'organic': 'tag-organic',
  'artisan-made': 'tag-artisan-made',
  'glass-metal': 'tag-glass-metal',
  'fair-wage': 'tag-fair-wage',
}

export async function generateStaticParams() {
  return productsData.products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const product = productsData.products.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.name} by ${product.brand} | Valley of the Lilies`,
    description: product.description,
  }
}

export default function ProductPage({ params }) {
  const product = productsData.products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const tagLabels = productsData.tagLabels || {}
  const tags = product.tags || []

  // Related: same category, excluding current
  const related = productsData.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <Nav />
      <div className="product-page">
        <div className="product-detail">
          <FadeIn>
            <img
              src={product.img}
              alt={product.name}
              className="product-detail-img"
            />
          </FadeIn>

          <FadeIn delay={150}>
            <div className="product-detail-info">
              <div className="product-detail-overline">{product.brand} &nbsp;·&nbsp; {product.category}</div>
              <h1 className="product-detail-name">{product.name}</h1>
              <div className="product-detail-price">${product.price}</div>

              {tags.length > 0 && (
                <div className="product-detail-tags">
                  {tags.map((tag) => (
                    <span key={tag} className={`product-tag ${TAG_CLASS[tag] || ''}`}>
                      {tagLabels[tag] || tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="product-detail-divider" />

              <p className="product-detail-desc">{product.description}</p>

              <div className="product-detail-cta">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textAlign: 'center' }}
                >
                  Shop at {product.brand}
                </a>
                <Link href="/collection" className="btn-ghost" style={{ textAlign: 'center' }}>
                  Back to Collection
                </Link>
              </div>

              <p className="product-detail-note" style={{ marginTop: '1.5rem' }}>
                <strong>Affiliate note:</strong> Valley of the Lilies may earn a commission if you purchase through our link, at no extra cost to you.{' '}
                <Link href="/disclaimer">Full disclosure.</Link>
              </p>
            </div>
          </FadeIn>
        </div>

        {related.length > 0 && (
          <div style={{
            padding: '4rem clamp(1.5rem, 4vw, 4rem)',
            borderTop: '1px solid rgba(44,36,32,0.07)',
          }}>
            <div style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--votl-muted)',
              marginBottom: '2rem',
              fontWeight: 500,
            }}>
              More in {product.category}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1px',
              background: 'rgba(44,36,32,0.06)',
            }}>
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} style={{
                  background: 'var(--votl-bg)',
                  display: 'block',
                  transition: 'background 0.3s',
                }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                  <div style={{ padding: '1rem 1.25rem 1.5rem' }}>
                    <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--votl-muted)', marginBottom: '0.35rem' }}>{p.brand}</div>
                    <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem', color: 'var(--votl-text)', marginBottom: '0.35rem' }}>{p.name}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 500 }}>${p.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
