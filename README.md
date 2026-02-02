# Customer Site Template

A clean, modern website template built with Next.js and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Customization

### 📝 Change Text Content

Edit `src/site.config.ts` to update all text across the site:
- Business name and tagline
- Contact information
- Navigation links
- Page content (hero, features, about, etc.)
- Footer text

### 🎨 Change Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #3b82f6;      /* Main brand color */
  --color-primary-dark: #2563eb; /* Hover states */
  --color-secondary: #64748b;    /* Supporting color */
  --color-accent: #f59e0b;       /* Accent highlights */
  --color-background: #ffffff;   /* Page background */
  --color-foreground: #1e293b;   /* Main text */
  --color-muted: #64748b;        /* Secondary text */
}
```

### Pages

- `/` - Homepage with hero, features, and CTA sections
- `/about` - About page with story, mission, and values
- `/contact` - Contact page with form and info

## Project Structure

```
src/
├── app/
│   ├── globals.css      # CSS variables and base styles
│   ├── layout.tsx       # Root layout with header/footer
│   ├── page.tsx         # Homepage
│   ├── about/page.tsx   # About page
│   └── contact/page.tsx # Contact page
├── components/
│   ├── Header.tsx       # Navigation header
│   └── Footer.tsx       # Site footer
└── site.config.ts       # All customizable content
```

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety

## Deployment

Build for production:

```bash
npm run build
npm start
```

Or deploy to Vercel, Netlify, or any platform that supports Next.js.
