import Link from 'next/link'
import FadeIn from './FadeIn'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-editorial">
        <FadeIn>
          <div className="hero-overline">A curated collection for her</div>
        </FadeIn>
        <FadeIn delay={150}>
          <h1>Quality goods made from <em>natural materials</em> in the USA</h1>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="hero-sub">
            Pared is a curated collection of non-toxic, plastic-free products for women who care
            about what they put on their bodies and in their homes.
          </p>
        </FadeIn>
        <FadeIn delay={450}>
          <div className="hero-cta">
            <Link href="/collection" className="btn-primary">Browse Collection</Link>
            <Link href="/about" className="btn-ghost">Our Story</Link>
          </div>
        </FadeIn>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>

      <div className="hero-art">
        {/* Henri Fantin-Latour — Still Life with Flowers and Fruit, 1866. The Met, CC0 */}
        <img
          src="/art/fantin-latour-still-life.jpg"
          alt="Henri Fantin-Latour, Still Life with Flowers and Fruit, 1866"
          loading="eager"
        />
        <div className="hero-art-overlay" />
        <div className="hero-art-credit">
          Henri Fantin-Latour, Still Life with Flowers and Fruit, 1866 · The Met, CC0
        </div>
      </div>
    </section>
  )
}
