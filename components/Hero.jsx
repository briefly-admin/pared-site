import Link from 'next/link'
import FadeIn from './FadeIn'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-editorial">
        <FadeIn>
          <div className="hero-overline">Valley of the Lilies</div>
        </FadeIn>
        <FadeIn delay={150}>
          <h1>The everyday,<br /><em>made right.</em></h1>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="hero-sub">
            Everything you reach for — your skin, your home, your table —
            should be made from real materials by people who care.
            We find them so you never have to compromise.
          </p>
        </FadeIn>
        <FadeIn delay={450}>
          <div className="hero-cta">
            <Link href="/collection" className="btn-primary">Shop</Link>
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
