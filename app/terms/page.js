import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Use | PARED',
  description: 'Terms and conditions for using the PARED website, including affiliate disclaimers, product liability, and hold harmless clauses.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="legal-header">
          <div className="legal-overline">Legal</div>
          <h1>Terms of Use</h1>
          <p>Last updated: March 2025</p>
        </div>

        <div className="legal-body">
          <div className="legal-box">
            By using pared.shop, you agree to these terms. Please read them carefully. If you do not agree, please do not use the site.
          </div>

          <h2>1. About PARED</h2>
          <p>PARED (pared.shop) is an editorial product curation website. We research and recommend products that meet our criteria for natural materials, non-toxic ingredients, and domestic manufacturing. PARED does not manufacture, sell, ship, or warrant any products. All purchases are made directly through third-party brands and retailers.</p>

          <h2>2. Affiliate Relationships</h2>
          <p>PARED participates in affiliate marketing programs. This means we may earn a commission when you click a product link and subsequently make a purchase from a retailer — at no additional cost to you. Our editorial selections are made independently of these affiliate relationships. We only recommend products that genuinely meet our curation standards.</p>
          <p>This constitutes our FTC-required disclosure: <strong>PARED may earn a commission from purchases made through our links.</strong></p>

          <h2>3. No Product Warranty or Guarantee</h2>
          <p>PARED makes no warranty, express or implied, regarding any product featured on this site. All products are sold by independent third-party brands. Issues with product quality, defects, shipping, or returns must be resolved directly with the retailer or brand.</p>
          <p>Product descriptions, prices, and availability on PARED are provided in good faith but may not always reflect current information on the brand's website. Always verify details before purchasing.</p>

          <h2>4. Hold Harmless Clause</h2>
          <div className="legal-box">
            To the fullest extent permitted by applicable law, you agree to hold harmless, indemnify, and defend PARED, its owner(s), contributors, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with: (a) your use of or reliance on any content or product recommendations on this site; (b) any product purchased through a link on this site; (c) any violation of these Terms by you.
          </div>

          <h2>5. Product Liability Disclaimer</h2>
          <p>PARED is a curator and editorial voice, not a manufacturer, distributor, or seller. We have no control over the formulation, production, quality, safety testing, labeling, or fulfillment of any product featured on this site.</p>
          <p>In the event that a product causes harm, injury, or damages, all product liability claims rest solely with the manufacturer and/or seller of that product. PARED expressly disclaims any product liability whatsoever. Your use of any product recommended on this site is at your own risk.</p>

          <h2>6. Health & Medical Disclaimer</h2>
          <p>Nothing on PARED constitutes medical advice. Product descriptions and editorial commentary are for informational purposes only. Consult a qualified healthcare professional before using any new product, particularly if you have health conditions, allergies, or are pregnant or nursing.</p>
          <p>See our full <Link href="/disclaimer">Health & Sourcing Disclaimer</Link> for additional detail.</p>

          <h2>7. Intellectual Property</h2>
          <p>All original editorial content on PARED — including product descriptions, editorial copy, and design — is owned by PARED and may not be reproduced without written permission.</p>
          <p>All paintings displayed on PARED are in the public domain under Creative Commons Zero (CC0) via The Metropolitan Museum of Art Open Access program and other qualifying museum programs. Attribution is provided on each use as a matter of good practice, though not legally required under CC0.</p>

          <h2>8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, PARED's total liability to you for any claim arising from these Terms or your use of the site shall not exceed $0 — as PARED provides this site free of charge and derives no direct revenue from you as a user.</p>
          <p>PARED is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the site or any product linked from the site.</p>

          <h2>9. External Links</h2>
          <p>This site contains links to third-party websites. PARED is not responsible for the content, accuracy, or practices of those sites. Inclusion of a link does not imply endorsement of everything on that website.</p>

          <h2>10. Governing Law</h2>
          <p>These Terms are governed by the laws of the United States. Any disputes shall be resolved in the applicable courts of the United States.</p>

          <h2>11. Changes to These Terms</h2>
          <p>We reserve the right to update these Terms at any time. Continued use of the site after changes constitutes acceptance. The "last updated" date at the top of this page will always reflect the most recent version.</p>

          <h2>12. Contact</h2>
          <p>Questions about these Terms? Email us at <a href="mailto:hello@pared.shop">hello@pared.shop</a>.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
