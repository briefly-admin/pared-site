import Nav from '../../components/Nav'
import FadeIn from '../../components/FadeIn'
import EmailSignup from '../../components/EmailSignup'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Our Story | Valley of the Lilies',
  description: 'Valley of the Lilies was built on one conviction: the things you reach for every day should be made right. Real materials, no compromise.',
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
            color: 'var(--votl-forest)',
            marginBottom: '1.5rem',
            fontWeight: 500,
          }}>
            Our Story
          </div>
          <h2>The things you reach for every day should be worth reaching for.</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p style={{ marginTop: '2rem' }}>
            Most goods weren't made to last. They were made to sell — and designed to go
            unquestioned. Plastic packaging, synthetic fillers, offshore labor, ingredient lists
            written to confuse. We decided to refuse all of it.
          </p>
          <p>
            Valley of the Lilies is a curated edit of everyday goods made from{' '}
            <em>real materials, by real makers</em>, without toxic shortcuts. Everything here
            has earned its place — through what it's made of, where it comes from, and how long
            it will last.
          </p>
          <p>
            This isn't about perfection or purity. It's about raising the floor on what you
            accept into your daily rituals. Your skin, your home, your table — none of it
            should come with a warning label.
          </p>
          <p>
            Questions, recommendations, or just want to say hello —{' '}
            <a href="mailto:hello@valleyofthelilies.com" style={{ color: 'var(--votl-accent)', borderBottom: '1px solid rgba(196,131,106,0.4)' }}>
              hello@valleyofthelilies.com
            </a>
          </p>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="values-grid">
          <div className="value-item">
            <h3>Against the synthetic</h3>
            <p>Nothing plastic. Nothing that off-gases. Nothing you can't pronounce on an ingredient list. Real materials only.</p>
          </div>
          <div className="value-item">
            <h3>For the ritual</h3>
            <p>Everything you reach for daily should be worth the gesture. The right object, made right, changes how a day feels.</p>
          </div>
          <div className="value-item">
            <h3>Made to last</h3>
            <p>American craftsmanship and honest materials. We prefer things that get better with age over things built to be replaced.</p>
          </div>
        </div>
      </FadeIn>

      <EmailSignup heading="Your finds, delivered." subtext="Real finds, real materials, real makers. No synthetics in the products or the editorial." />
      <Footer />
    </>
  )
}
