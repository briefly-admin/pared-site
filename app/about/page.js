import Nav from '../../components/Nav'
import FadeIn from '../../components/FadeIn'
import EmailSignup from '../../components/EmailSignup'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About | PARED',
  description: 'PARED is a curated collection of quality, non-toxic goods for women, made from natural materials in the USA. Pared back to what matters.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* John Singer Sargent — Carnation, Lily, Lily, Rose, 1885-86. Tate Britain, Public Domain */}
      <div className="about-art-banner">
        <img
          src="/art/sargent-carnation-lily.jpg"
          alt="John Singer Sargent, Carnation, Lily, Lily, Rose, 1885-86"
        />
        <div className="about-art-banner-overlay" />
        <div className="about-art-banner-credit">
          John Singer Sargent, Carnation, Lily, Lily, Rose, 1885–86 · Tate Britain, Public Domain
        </div>
      </div>

      <div className="about-content">
        <FadeIn>
          <div style={{
            fontSize: '0.68rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--pared-accent)',
            marginBottom: '1.5rem',
            fontWeight: 500,
          }}>
            About Us
          </div>
          <h2>We've become numb to the noise of low-quality, uninspired products.</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p style={{ marginTop: '2rem' }}>
            I started Pared to give conscious women a guide to finding quality, life-tested,
            non-toxic products made with intention. Every item featured contains{' '}
            <em>zero plastic or synthetic materials</em>, and we prioritize products made in the USA.
          </p>
          <p>
            This isn't an exhaustive list. These are products I've tried, my friends have tried,
            or things I've researched extensively. Most come from brands with many items meeting
            our criteria, so I encourage you to explore them fully.
          </p>
          <p>
            <em>Pared back to what matters.</em> That's the whole philosophy. Strip away the
            synthetic, the harmful, the disposable — and what you're left with is quality that lasts.
          </p>
          <p>
            If you have questions, product recommendations, or just want to chat — reach out at{' '}
            <a href="mailto:hello@pared.shop" style={{ color: 'var(--pared-accent)', borderBottom: '1px solid rgba(196,131,106,0.4)' }}>
              hello@pared.shop
            </a>
          </p>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="values-grid">
          <div className="value-item">
            <h3>Natural</h3>
            <p>Zero plastic. Zero synthetics. Only products made from materials the earth intended.</p>
          </div>
          <div className="value-item">
            <h3>Non-Toxic</h3>
            <p>Free from harmful chemicals, endocrine disruptors, and ingredients you can't pronounce.</p>
          </div>
          <div className="value-item">
            <h3>American</h3>
            <p>Made in the USA, or at minimum from American companies with transparent practices.</p>
          </div>
        </div>
      </FadeIn>

      <EmailSignup heading="Come along for the ride" />
      <Footer />
    </>
  )
}
