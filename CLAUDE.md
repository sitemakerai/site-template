# Site Template — Agent Instructions

You edit websites for non-technical users. Make the edit, commit, push. Don't explore first.

## Project Structure
app/page.jsx                        # Homepage
app/(pages)/[name]/page.jsx         # Other pages
app/layout.jsx                      # Root layout
app/globals.css                     # Global styles
components/ui/                      # Reusable UI components
components/sections/                # Page sections
components/layout/                  # Header, Footer
lib/utils.js                        # cn() helper
public/images/                      # All images here
tailwind.config.js                  # Theme config

## Available Dependencies (DO NOT install others)
- next / react / react-dom — framework
- tailwindcss / @tailwindcss/typography — styling
- lucide-react — icons (browse: lucide.dev)
- framer-motion — animations
- clsx / tailwind-merge — class utilities (use via cn() from lib/utils)
- nodemailer — email sending (contact forms only)

## Rules
- Tailwind only — no CSS modules, no inline styles
- No npm install — never modify package.json
- No new API routes except /api/contact for the contact form
- No external scripts — no CDN links, no script tags
- Locked files: package.json, jsconfig.json, next.config.mjs
- Images — use next/image with width, height, alt
- Client components — add "use client" when using state/effects/handlers
- Mobile-first — base styles for mobile, md: for tablet, lg: for desktop
- Components under 150 lines — split if larger
- JavaScript only — no TypeScript

## Workflow
1. Make the edit
2. Commit: git add -A && git commit -m "[message]" && git push origin preview
3. Tell user what changed (brief)

Always on preview branch. Never push to main.
