# HAAK Solutions — Website

Premium digital agency website for HAAK Solutions, Dubai UAE.

Built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no extra config needed
4. `vercel.json` is included for headers and routing

## Project Structure

```
app/                          # Next.js App Router
  layout.tsx                  # Root layout (Navbar, Footer, structured data)
  page.tsx                    # Home page
  about/page.tsx
  services/page.tsx           # Services overview
  services/seo/page.tsx
  services/social-media/page.tsx
  services/web-development/page.tsx
  services/ui-ux/page.tsx
  services/mobile-app/page.tsx
  services/business-growth/page.tsx
  services/it-solutions/page.tsx
  portfolio/page.tsx
  contact/page.tsx
  sitemap.ts                  # Auto sitemap.xml
  robots.ts                   # robots.txt

components/
  Navbar.tsx                  # Sticky nav with mobile menu (client)
  Footer.tsx                  # Site footer
  AnimateIn.tsx               # Scroll-reveal wrapper (client)
  ContactForm.tsx             # Contact form (client)
  home/Hero.tsx               # Animated hero (client)
```

## Customisation Checklist

- [ ] Replace `+971XXXXXXXXX` with your real WhatsApp number (search across all files)
- [ ] Replace `info@haak-org.com` with your real email
- [ ] Add team member details in `app/about/page.tsx`
- [ ] Wire up `components/ContactForm.tsx` to EmailJS or your backend API
- [ ] Replace `PLACEHOLDER_GOOGLE_VERIFICATION` in `app/layout.tsx`
- [ ] Add Google Analytics 4 script in `app/layout.tsx`
- [ ] Add Meta Pixel script in `app/layout.tsx`
- [ ] Create `public/og-image.png` (1200×630px) for social sharing previews
- [ ] Update social links in `components/Footer.tsx`

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v3 | Styling |
| Framer Motion v11 | Animations |
| Vercel | Deployment |

## SEO Features

- LocalBusiness structured data (JSON-LD) in root layout
- `generateMetadata` on every page with unique title + description
- `sitemap.xml` auto-generated at `/sitemap.xml`
- `robots.txt` at `/robots.txt`
- Open Graph + Twitter card tags on every page
- Canonical URLs on all pages

## Note on Old Files

The `src/` directory contains the old Vite + React version and is ignored by Next.js.
It can be safely deleted once you verify everything works.
