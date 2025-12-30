import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#8b5cf6',
          dark: '#6d28d9',
        },
        accent: '#f472b6',
        dark: {
          DEFAULT: '#1a1b1e',
          card: '#25262b',
        },
        light: {
          DEFAULT: '#ffffff',
          card: '#f8f9fa',
        },
        'kemet-gold': '#FFD700',
        'kemet-blue': '#0047AB',
        'kemet-red': '#DC143C',
        'sand': {
          50: '#FDFCFB',
          100: '#FAF5E9',
          200: '#F5EAD3',
          300: '#E6D5B8',
          400: '#D4BC96',
          500: '#C2A374',
          600: '#B08B52',
          700: '#8C6D3F',
          800: '#634D2C',
          900: '#3A2E1A',
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
      fontFamily: {
        sans: ['var(--font-kufi)'],
        kufi: ['var(--font-kufi)'],
        arabic: ['var(--font-amiri)'],
      },
      animation: {
        shine: 'shine 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hieroglyphs': "url('/images/hieroglyphs-pattern.png')",
      },
    },
  },
  plugins: [],
}

export default config