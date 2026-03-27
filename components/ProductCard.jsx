import FadeIn from './FadeIn'

export default function ProductCard({ product, index = 0 }) {
  return (
    <FadeIn delay={index * 80}>
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="product-card"
      >
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
        </div>
      </a>
    </FadeIn>
  )
}
