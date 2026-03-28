import './globals.css'

export const metadata = {
  title: 'Valley of the Lilies — The everyday, made right.',
  description: 'Real materials. Non-toxic formulas. Made in America. Valley of the Lilies finds the goods worth reaching for every day — and refuses everything else.',
  keywords: ['non-toxic', 'natural materials', 'made in USA', 'women', 'organic', 'plastic-free', 'real materials', 'everyday goods'],
  openGraph: {
    title: 'Valley of the Lilies — The everyday, made right.',
    description: 'Real materials. Non-toxic formulas. Made in America. The goods worth reaching for every day.',
    url: 'https://valleyofthelilies.com',
    siteName: 'Valley of the Lilies',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valley of the Lilies — The everyday, made right.',
    description: 'Real materials. Non-toxic formulas. Made in America.',
    creator: '@valleylilies',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
