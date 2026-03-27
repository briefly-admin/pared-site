import Nav from '../../components/Nav'
import ProductGrid from '../../components/ProductGrid'
import EmailSignup from '../../components/EmailSignup'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Browse Collection | PARED',
  description: 'Browse our curated collection of non-toxic, natural-material goods for women. Every product is vetted for quality, materials, and origin.',
}

export default function CollectionPage() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: '72px' }}>
        <ProductGrid />
      </div>
      <EmailSignup />
      <Footer />
    </>
  )
}
