import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf7f0',
          100: '#f2ead9',
          200: '#e4d3b0',
          300: '#d4b87f',
          400: '#c49a52',
          500: '#b8863a',
          600: '#9e6e2e',
          700: '#7f5526',
          800: '#694526',
          900: '#593b24',
          950: '#321e10',
        },
        secondary: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        gold: {
          50: '#fdfbf3',
          100: '#faf4d8',
          200: '#f4e6a0',
          300: '#ecd45f',
          400: '#e3c02e',
          500: '#c9a51a',
          600: '#a07e12',
          700: '#7a5d12',
          800: '#654d17',
          900: '#574019',
          950: '#322209',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
