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
          50:  '#fdf2f4',
          100: '#fce4e8',
          200: '#f9ccd4',
          300: '#f4a3b0',
          400: '#ed6f84',
          500: '#e03d5a',
          600: '#C8102E', // rich crimson red — main accent
          700: '#a30d25',
          800: '#870f22',
          900: '#711022',
          950: '#3e040e',
        },
        secondary: {
          50:  '#f0f4ff',
          100: '#dde6ff',
          200: '#c2d0ff',
          300: '#9db2ff',
          400: '#7389f5',
          500: '#4f63e8',
          600: '#3a4dcc',
          700: '#1D3461', // royal blue — secondary accent
          800: '#162650',
          900: '#0e1a3a',
          950: '#0A0F1E', // near-black navy — background
        },
        gold: {
          50:  '#fdfbf3',
          100: '#faf4d8',
          200: '#f4e6a0',
          300: '#ecd45f',
          400: '#E8C87A', // warm gold highlight
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
