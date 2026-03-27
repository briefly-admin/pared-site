'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import FadeIn from './FadeIn'
import productData from '../data/products.json'

const { products, categories } = productData

export default function ProductGrid({ showHeader = true }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? products
    : products.filter(p => p.category === activeFilter)

  return (
    <section id="collection">
      {showHeader && (
        <div className="section-header">
          <FadeIn>
            <h2>The Collection</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p>Every product is tried, tested, and vetted for quality, materials, and origin.</p>
          </FadeIn>
        </div>
      )}

      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid-wrap">
        <div className="product-grid">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
