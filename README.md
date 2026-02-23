# Site Template

This is a Next.js 14 template with a locked architecture. It comes pre-configured with Tailwind CSS, TypeScript, and a set of reusable components.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Architecture

This template follows strict architectural rules defined in `ARCHITECTURE.md`. Please read and follow these rules when making changes.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Structure

```
app/               - Pages and layouts
components/
  ui/              - Reusable UI components
  layout/          - Header, Footer
  sections/        - Page sections (Hero, Features, etc.)
lib/               - Utility functions
public/            - Static assets
```

## Locked Files

The following files cannot be modified:
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `app/layout.tsx` (structure only)
- `app/globals.css` (base styles)

You can freely edit:
- `tailwind.config.ts` (theme customization)
- All component files
- Page files
- Add new components and pages
