import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        sans: ['var(--font-dm-sans)'],
      },
      colors: {
        gold: '#c9a84c',
        'gold-light': '#e8c96a',
        cream: '#e8dfc8',
        dark: '#0a0a0a',
      },
    },
  },
  plugins: [],
}
export default config
