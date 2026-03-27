import './globals.css'

export const metadata = {
  title: 'PARED | Quality Goods for Her',
  description: 'A curated collection of non-toxic, plastic-free goods for women, made from natural materials in the USA. Pared back to what matters.',
  keywords: ['non-toxic', 'natural materials', 'made in USA', 'women', 'organic', 'plastic-free', 'curated', 'quality goods'],
  openGraph: {
    title: 'PARED | Quality Goods for Her',
    description: 'A curated collection of non-toxic, plastic-free goods for women, made from natural materials in the USA.',
    url: 'https://pared.shop',
    siteName: 'PARED',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PARED | Quality Goods for Her',
    description: 'A curated collection of non-toxic, plastic-free goods for women, made from natural materials in the USA.',
    creator: '@paredshop',
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
