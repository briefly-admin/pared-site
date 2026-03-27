# PARED

**A curated collection of quality goods for her — natural materials, non-toxic, made in the USA.**

Website: [pared.shop](https://pared.shop)
Twitter: [@paredshop](https://x.com/paredshop)

---

## Quick Start (Deploy in 5 minutes)

### Prerequisites
- [Node.js 18+](https://nodejs.org/)
- A [Vercel account](https://vercel.com) (free)
- [Git](https://git-scm.com/)

### Step 1: Install dependencies

```bash
cd pared-site
npm install
```

### Step 2: Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Step 3: Deploy to Vercel

**Option A — Git + Vercel (recommended):**

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create a GitHub repo (via github.com or CLI)
gh repo create pared-site --private --push

# Connect to Vercel
# Go to vercel.com → New Project → Import "pared-site"
# Vercel auto-detects Next.js — click Deploy
```

**Option B — Vercel CLI:**

```bash
npm i -g vercel
vercel
# Follow prompts, select Next.js
# Your site is live at a .vercel.app URL
```

### Step 4: Custom domain

1. Buy `pared.shop` from [Namecheap](https://namecheap.com) (~$3-5/year for .shop)
2. In Vercel dashboard → Your project → Settings → Domains
3. Add `pared.shop`
4. Vercel shows DNS records to add — go to Namecheap DNS settings and add them:
   - **A record:** `@` → `76.76.21.21`
   - **CNAME record:** `www` → `cname.vercel-dns.com`
5. Wait 5-30 minutes for DNS propagation
6. SSL certificate is automatic

### Step 5: Set up email collection

1. Sign up for [Buttondown](https://buttondown.email) (free up to 100 subscribers)
2. Get your API key from Buttondown Settings → API
3. Create `.env.local` in the project root:
   ```
   BUTTONDOWN_API_KEY=your_key_here
   ```
4. Open `app/api/subscribe/route.js` and uncomment the Buttondown section
5. Redeploy: `vercel --prod` or push to GitHub

### Step 6: Set up email forwarding

To receive email at hello@pared.shop:
1. Use [ImprovMX](https://improvmx.com) (free) — forwards to your personal email
2. Add MX records to your domain as ImprovMX instructs
3. Set up a forwarding alias: `hello@pared.shop` → `your-personal@email.com`

---

## Project Structure

```
pared-site/
├── app/
│   ├── layout.js              # Root layout, metadata, fonts
│   ├── page.js                # Home page
│   ├── sitemap.js             # Auto-generated sitemap
│   ├── globals.css            # All styles
│   ├── about/
│   │   └── page.js            # About page
│   ├── collection/
│   │   └── page.js            # Browse collection page
│   └── api/
│       └── subscribe/
│           └── route.js       # Newsletter API endpoint
├── components/
│   ├── Nav.jsx                # Navigation bar
│   ├── Hero.jsx               # Hero section
│   ├── Marquee.jsx            # Scrolling value props
│   ├── ProductGrid.jsx        # Filterable product grid
│   ├── ProductCard.jsx        # Individual product card
│   ├── EmailSignup.jsx        # Newsletter signup form
│   ├── FadeIn.jsx             # Scroll-triggered animation
│   └── Footer.jsx             # Footer
├── data/
│   └── products.json          # Product database
├── content/
│   └── tweets-30-days.md      # 30 pre-written tweets
├── public/
│   ├── logo.svg               # Full logo
│   ├── favicon.svg            # Favicon
│   ├── og-image.svg           # Social share image
│   └── robots.txt             # SEO
├── .env.example               # Environment variable template
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## Adding New Products

Open `data/products.json` and add a new entry:

```json
{
  "id": 19,
  "slug": "your-product-slug",
  "brand": "Brand Name",
  "name": "Product Name",
  "price": 99,
  "category": "Clothing",
  "badge": "Editor's Pick",
  "url": "https://brand-website.com/product",
  "img": "https://images.unsplash.com/photo-xxxxx?w=600&h=600&fit=crop",
  "description": "Why this product meets PARED criteria."
}
```

**Finding product images:**
- Best: use the brand's official product images (ask permission in your partnership email)
- Alternative: use Unsplash photos as placeholders, replace as brands provide assets
- Image should be square (1:1) or close to it

**Categories available:** Clothing, Accessories, Body Care, Home, Kitchen, Provisions

**Badge options:** Editor's Pick, Best Seller, Under $25, Investment Piece, Artisan Made, New

---

## Replacing Placeholder Images

The site currently uses Unsplash placeholders. To replace with real product images:

1. Download the product image from the brand's website (or request high-res from your brand contact)
2. Save to `public/products/` as `brand-product.jpg`
3. Update the `img` field in `products.json`:
   ```json
   "img": "/products/brand-product.jpg"
   ```
4. Recommended: optimize images with [Squoosh](https://squoosh.app) — export as WebP, 600px wide

---

## Converting to Affiliate Links

Once brands approve your partnership:

1. Get your unique affiliate link from ShareASale, Impact, or the brand's own program
2. Replace the `url` field in `products.json` with your affiliate link:
   ```json
   "url": "https://shareasale.com/r.cfm?b=XXXXX&u=YYYYY&m=ZZZZZ"
   ```
3. Add disclosure to the footer (already space for it in Footer.jsx)

---

## Analytics Setup

### Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (starts with `G-`)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Add the script to `app/layout.js` inside `<head>`:
   ```html
   <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
   <script dangerouslySetInnerHTML={{ __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
   `}} />
   ```

### Simpler alternative: Plausible or Fathom

Privacy-friendly, no cookie banner needed:
- [Plausible](https://plausible.io) ($9/mo) — add one script tag
- [Fathom](https://usefathom.com) ($14/mo) — same idea

---

## Twitter/X Setup Checklist

- [ ] Create account with handle @paredshop
- [ ] Upload profile image (use `twitter-profile.svg` → export as PNG 400x400)
- [ ] Upload header image (use `twitter-header.svg` → export as PNG 1500x500)
- [ ] Set display name: PARED
- [ ] Set bio: `Curated quality goods for her. Natural materials. Non-toxic. Made in USA. Pared back to what matters. ✦ pared.shop`
- [ ] Add website link: pared.shop
- [ ] Pin the launch tweet (Day 1 from tweets-30-days.md)
- [ ] Schedule first 2 weeks of tweets using TweetDeck or Buffer
- [ ] Follow 50 relevant accounts (clean beauty, sustainable fashion, slow living)

### Converting SVG Assets to PNG for Social Media

Open each SVG in a browser, screenshot at the right dimensions, or use this free tool:
- [CloudConvert](https://cloudconvert.com/svg-to-png) — upload SVG, set dimensions, download PNG

**Dimensions needed:**
| Asset | Size | File |
|-------|------|------|
| Profile pic | 400x400 px | twitter-profile.svg |
| Header | 1500x500 px | twitter-header.svg |
| OG image | 1200x630 px | og-image.svg |

---

## Future Roadmap

As the site grows, consider:

1. **Individual product pages** — `/collection/[slug]` pages with full descriptions, brand story, why it made the cut
2. **Blog/Journal** — Weekly posts about materials, brand stories, non-toxic living tips (great for SEO)
3. **Instagram** — Same handle @paredshop, visual platform is perfect for product photography
4. **Newsletter** — Weekly email with one featured product, one brand story, one tip
5. **Brand partnerships** — Exclusive discounts for your audience (negotiate once you have 1000+ subscribers)
6. **Expanded categories** — Wellness, Baby, Fitness, Travel

---

## License

This project was built for private use. All brand names and trademarks belong to their respective owners.
