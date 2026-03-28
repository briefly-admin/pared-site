import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Valley of the Lilies',
  description: 'How Valley of the Lilies collects, uses, and protects your personal information, including email data and cookie tracking.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="legal-header">
          <div className="legal-overline">Legal</div>
          <h1>Privacy Policy</h1>
          <p>Last updated: March 2025</p>
        </div>

        <div className="legal-body">
          <div className="legal-box">
            We respect your privacy. This policy explains what we collect, why we collect it, and how you can control it.
          </div>

          <h2>1. Information We Collect</h2>
          <p><strong>Email address.</strong> When you subscribe to our newsletter, we collect your email address. We use this solely to send you curated product recommendations and editorial content. We do not sell your email address to third parties.</p>
          <p><strong>Usage data.</strong> Like most websites, we may collect anonymous data about how you use the site — pages visited, time on page, referring URL. This is aggregated and never tied to your identity.</p>

          <h2>2. Cookies & Tracking</h2>
          <p>Valley of the Lilies uses cookies and similar tracking technologies for the following purposes:</p>
          <ul>
            <li><strong>Analytics cookies</strong> — to understand aggregate traffic and behavior (e.g., Google Analytics or similar). These are anonymized.</li>
            <li><strong>Affiliate tracking cookies</strong> — when you click a product link, the retailer may place a cookie to attribute any purchase to Valley of the Lilies for commission purposes. This is standard affiliate marketing practice and does not store personally identifying information about you.</li>
            <li><strong>Preference cookies</strong> — to remember settings like your selected product category.</li>
          </ul>
          <p>You can disable cookies in your browser settings, though some site features may not function correctly as a result.</p>

          <h2>3. Email Newsletter</h2>
          <p>If you subscribe to Valley of the Lilies's newsletter, your email is stored securely with our email service provider (Buttondown, ConvertKit, or Beehiiv, depending on our current platform). You can unsubscribe at any time by clicking the unsubscribe link in any email we send. We will process your unsubscribe request promptly.</p>
          <p>We do not send spam. We will only email you content directly related to Valley of the Lilies's mission: quality, non-toxic product curation.</p>

          <h2>4. Third-Party Links & Affiliate Disclosure</h2>
          <p>Valley of the Lilies contains links to third-party retailer websites. When you click those links and make a purchase, we may receive a commission. We are not responsible for the privacy practices of those third-party sites. Please review the privacy policy of any site you visit through our links.</p>
          <p>See our full <Link href="/disclaimer">Affiliate & Health Disclaimer</Link> for more detail.</p>

          <h2>5. Data Retention</h2>
          <p>We retain your email address for as long as you are subscribed. Upon unsubscription, your data is deleted from our active lists within 30 days. Anonymous analytics data is retained per our analytics provider's standard policies.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Know what personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time (e.g., unsubscribe from emails)</li>
          </ul>
          <p>To exercise these rights, email us at <a href="mailto:hello@valleyofthelilies.com">hello@valleyofthelilies.com</a>.</p>

          <h2>7. Children's Privacy</h2>
          <p>Valley of the Lilies is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we do, we will update the "last updated" date at the top of this page. Continued use of the site after any changes constitutes your acceptance of the new policy.</p>

          <h2>9. Contact</h2>
          <p>Questions about this privacy policy? Email us at <a href="mailto:hello@valleyofthelilies.com">hello@valleyofthelilies.com</a>.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
