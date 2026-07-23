# Markvt Krash — Studio Website

Marketing + legal site for **Markvt Krash LLC**, maker of the PikMe app.
Built with Next.js (App Router) + TypeScript, plain global CSS (no Tailwind config).

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build
npm start
```

## Structure
```
app/
  page.tsx              Homepage (hero, flagship product, work grid, contact)
  layout.tsx            Header + Footer + site metadata
  globals.css           All styles (design tokens at top)
  legal/                Consolidated legal & agreement pages
    privacy/
    terms/
    food-disclaimer/
    support/
    delete-account/
components/              Header, Footer, LegalPage, LegalNav, PikMeIcon
lib/products.ts         Product list — ADD FUTURE APPS (e.g. entertainment) HERE
public/icon.svg         Favicon
```

## Adding a new product (e.g. entertainment)
Edit `lib/products.ts` and add an entry to the `products` array. Set
`status: "live"` when it ships. It appears automatically in the homepage grid.

## Deploy (Vercel from GitHub)
1. Push this folder to a GitHub repo.
2. In Vercel: **New Project** → import the repo → framework auto-detects **Next.js** → Deploy.
3. Add your custom domain (e.g. markvtkrash.com) in Vercel → Project → Domains.

## TODO before launch
- Replace `hello@markvtkrash.com` with the real company email.
- Replace the App Store button `href="#"` with the real listing URL once live.
- The Privacy page URL (`/legal/privacy`) is what you enter in App Store Connect.
- Keep legal text in sync with the app's in-app copy.
