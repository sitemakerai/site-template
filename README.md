# Business Website Template

A modern, responsive business website template built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Next.js 15** with App Router
- **React 19** for modern component architecture
- **Tailwind CSS v3** for styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- Fully responsive design (mobile-first)
- Clean, professional aesthetic
- Optimized for small businesses

## Pages

- **Home** - Hero, services overview, about snippet, and CTA
- **About** - Company story, team, and values
- **Services** - Service packages and benefits
- **Contact** - Contact form, business info, and map placeholder

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── page.jsx              # Homepage
├── layout.jsx            # Root layout
├── globals.css           # Global styles
└── (pages)/              # Additional pages
    ├── about/
    ├── services/
    └── contact/

components/
├── ui/                   # Reusable UI components
├── layout/               # Header & Footer
└── sections/             # Page sections

lib/
└── utils.js              # Utility functions

public/
└── images/               # Static images
```

## Customization

This template is designed to be easily customized for different types of small businesses:

1. **Brand Colors** - Edit `tailwind.config.js` to change the color palette
2. **Content** - Update text in page files and section components
3. **Images** - Replace placeholder images in `public/images/`
4. **Contact Info** - Update contact details in Footer and Contact page
5. **Business Name** - Search and replace "YourBusiness" throughout the project

## Technologies

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## License

This template is open source and available for use in commercial and personal projects.
