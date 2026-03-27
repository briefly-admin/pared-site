import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import ProductGrid from '../components/ProductGrid'
import EmailSignup from '../components/EmailSignup'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <ProductGrid />
      <EmailSignup />
      <Footer />
    </>
  )
}
