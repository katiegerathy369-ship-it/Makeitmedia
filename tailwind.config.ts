import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette — black + gold (homepage / general)
        night: {
          DEFAULT: '#141414',
          light: '#1e1e1e',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8d5a3',
          pale: '#faf6eb',
          dark: '#a8892e',
        },
        // Secondary palette — sage (health practitioners page)
        sage: {
          DEFAULT: '#7a9e87',
          light: '#b8d4c0',
          dark: '#4a6e57',
          pale: '#edf4ef',
        },
        terra: {
          DEFAULT: '#c4714a',
          light: '#e8b49a',
          pale: '#faf0eb',
        },
        cream: '#faf8f4',
        'warm-white': '#f5f2ec',
        ink: {
          DEFAULT: '#2a2520',
          mid: '#5a524a',
          light: '#8a8078',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        xl2: '24px',
        DEFAULT: '16px',
        sm: '8px',
      },
      maxWidth: {
        container: '1120px',
      },
    },
  },
  plugins: [],
}

export default config
