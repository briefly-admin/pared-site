import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Disclaimer | Valley of the Lilies',
  description: 'Health-related disclosures, sourcing standards, affiliate compensation disclosure, and product liability information for Valley of the Lilies.',
}

export default function DisclaimerPage() {
  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="legal-header">
          <div className="legal-overline">Legal</div>
          <h1>Disclaimer</h1>
          <p>Last updated: March 2025 — A centralized hub for all Valley of the Lilies disclosures.</p>
        </div>

        <div className="legal-body">
          <div className="legal-box">
            Valley of the Lilies is an independent editorial site. We are not doctors, licensed health professionals, certified safety testers, or product manufacturers. Everything here is offered as curated information only.
          </div>

          <h2>Affiliate & FTC Disclosure</h2>
          <p>Valley of the Lilies participates in affiliate marketing programs with brands featured on this site. <strong>When you click a link and make a purchase, Valley of the Lilies may earn a commission at no additional cost to you.</strong> This is how we sustain the site and continue independent curation.</p>
          <p>Our editorial decisions are made independently. Affiliate relationships do not influence which products we feature or how we describe them. We only recommend products that genuinely meet our criteria for natural materials, non-toxic ingredients, and domestic production.</p>
          <p>This disclosure is provided in compliance with Federal Trade Commission (FTC) guidelines on endorsements and testimonials.</p>

          <h2>Health & Medical Disclaimer</h2>
          <p>Nothing on Valley of the Lilies — including product descriptions, editorial copy, badge labels, or newsletter content — constitutes medical advice, diagnosis, or treatment recommendations.</p>
          <p>Labels such as "Non-Toxic," "No Toxic Ingredients," "Organic," and "Plastic Free" on this site reflect the claims and certifications of the brands themselves, based on our research at the time of publication. Valley of the Lilies does not independently test products in a laboratory setting.</p>
          <ul>
            <li>If you have known allergies or sensitivities, always read the full ingredient list on the product before use.</li>
            <li>If you are pregnant, nursing, or have an underlying health condition, consult a qualified healthcare professional before introducing new products to your routine.</li>
            <li>Reactions to natural products can still occur. Discontinue use immediately if you experience irritation.</li>
          </ul>
          <p>Valley of the Lilies makes no representation that any product featured will produce specific health outcomes.</p>

          <h2>Sourcing & Certification Disclosures</h2>
          <p>Valley of the Lilies applies its own editorial criteria when evaluating products. Our standards include:</p>
          <ul>
            <li><strong>Plastic Free</strong> — product and packaging contain no plastic components, based on brand representation.</li>
            <li><strong>No Toxic Ingredients</strong> — brand claims to exclude synthetic fragrances, parabens, phthalates, PFAS, and similar substances associated with health concerns.</li>
            <li><strong>Made in USA</strong> — brand represents that the product is manufactured domestically. We do not independently verify country-of-origin claims.</li>
            <li><strong>Certified Organic</strong> — brand holds USDA Organic, GOTS, MADE SAFE, or equivalent third-party certification at time of publication.</li>
            <li><strong>Artisan Made</strong> — product is produced in small batches by skilled craftspeople, based on brand representation.</li>
            <li><strong>Fair Wage</strong> — brand publishes wage transparency data or holds B Corp / Fair Trade certification, based on public records at time of publication.</li>
          </ul>
          <p>Certifications and sourcing claims can change. Valley of the Lilies cannot guarantee that every claim remains accurate after publication. Always verify directly with the brand before purchase.</p>

          <h2>Public Domain Artwork</h2>
          <p>All paintings displayed on Valley of the Lilies are in the public domain, sourced primarily from The Metropolitan Museum of Art Open Access program (CC0 — Creative Commons Zero) and other qualifying museum programs. CC0 means no copyright restrictions apply. Attribution is provided as a matter of good editorial practice and cultural respect, though it is not legally required.</p>
          <p>A full log of artworks used, including source URLs and CC0 status, is maintained internally. For questions about a specific painting, contact us at <a href="mailto:hello@valleyofthelilies.com">hello@valleyofthelilies.com</a>.</p>

          <h2>Product Liability</h2>
          <p>Valley of the Lilies is a curator and editorial voice — not a manufacturer, retailer, distributor, or fulfillment service. We have no involvement in the production, quality control, safety testing, or sale of any product featured on this site.</p>
          <p>All product liability for any featured item rests solely with the product's manufacturer and seller. Valley of the Lilies expressly disclaims all product liability. Your use of any product discovered through Valley of the Lilies is entirely at your own discretion and risk.</p>

          <h2>Pricing & Availability</h2>
          <p>Product prices and availability are accurate at time of publication but may change. Valley of the Lilies is not responsible for pricing discrepancies between what is listed here and what a brand charges at checkout. Always confirm pricing directly with the retailer.</p>

          <h2>Contact</h2>
          <p>Questions about any of these disclosures? We're transparent by design. Email us at <a href="mailto:hello@valleyofthelilies.com">hello@valleyofthelilies.com</a>.</p>

          <p style={{ marginTop: '2rem' }}>
            <Link href="/privacy">Privacy Policy</Link> &nbsp;·&nbsp; <Link href="/terms">Terms of Use</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
