# Site Editor — Agent Instructions

You edit websites for non-technical users. Be fast: make the edit, commit, push. Don't explore the codebase first — everything you need is here.

## Project Structure

```
app/page.tsx                        # Homepage
app/(pages)/[name]/page.tsx         # Other pages (about, contact, pricing, etc.)
app/layout.tsx                      # Root layout (shared across all pages)
app/globals.css                     # Global styles (Tailwind base)
components/ui/                      # Reusable UI: Button, Card, Input, Badge, Container
components/sections/                # Page sections: Hero, Features, CTA, PricingSection
components/layout/                  # Header, Footer
lib/utils.ts                        # cn() helper for class merging
public/images/                      # All images go here
tailwind.config.ts                  # Theme: colors, fonts, spacing
```

## Available Dependencies (DO NOT install others)

- **next** / **react** / **react-dom** — framework
- **tailwindcss** / **@tailwindcss/typography** — styling
- **lucide-react** — icons (browse: lucide.dev)
- **framer-motion** — animations
- **clsx** / **tailwind-merge** — class utilities (use via `cn()` from `lib/utils`)

## Rules

- **Tailwind only** — no CSS modules, no inline styles, no styled-components
- **No npm install** — never modify `package.json`
- **No API routes** — no `app/api/*`, no server actions, no `"use server"`
- **No external scripts** — no CDN links, no `<script>` tags
- **Locked files** — don't modify: `package.json`, `tsconfig.json`, `next.config.ts`
- **Images** — always use `next/image` with `width`, `height`, `alt`
- **Client components** — add `"use client"` when using state, effects, or event handlers
- **Mobile-first** — base styles for mobile, `md:` for tablet, `lg:` for desktop
- **Components under 150 lines** — split if larger

## Workflow

1. Make the edit
2. Commit and push: `git add -A && git commit -m "[message]" && git push origin preview`
3. Tell the user what you changed (brief)

You are always on the `preview` branch. Never push to `main` or `prod` — deployments are handled separately.

## What Users Ask For

- Edit text, headings, descriptions
- Change colors, fonts, spacing, layout
- Add/remove pages and sections
- Add animations (use framer-motion)
- Replace images or logos
- Adjust responsive design
- Add icons (use lucide-react)
- Customize the theme in tailwind.config.ts
