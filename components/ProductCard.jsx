import Link from 'next/link'
import FadeIn from './FadeIn'
import productsData from '../data/products.json'

const TAG_CLASS = {
  'plastic-free': 'tag-plastic-free',
  'non-toxic': 'tag-non-toxic',
  'made-in-usa': 'tag-made-in-usa',
  'organic': 'tag-organic',
  'artisan-made': 'tag-artisan-made',
  'glass-metal': 'tag-glass-metal',
  'fair-wage': 'tag-fair-wage',
}

export default function ProductCard({ product, index = 0 }) {
  const tagLabels = productsData.tagLabels || {}
  const tags = product.tags || []

  return (
    <FadeIn delay={index * 60}>
      <Link href={`/products/${product.slug}`} className="product-card">
        <div className="product-img-wrap">
          <img
            src={product.img}
            alt={product.name}
            className="product-img"
            loading="lazy"
          />
          <div className="product-badge">{product.badge}</div>
        </div>
        <div className="product-info">
          <div className="product-brand">{product.brand}</div>
          <div className="product-name">{product.name}</div>
          <div className="product-price">${product.price}</div>
          {tags.length > 0 && (
            <div className="product-tags">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className={`product-tag ${TAG_CLASS[tag] || ''}`}>
                  {tagLabels[tag] || tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </FadeIn>
  )
}
