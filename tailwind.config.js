/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0D10',
        surface: '#11151B',
        'surface-light': '#1A1F26',
        'text-primary': '#F5F7FA',
        'text-secondary': '#C9D1D9',
        accent: {
          DEFAULT: '#B11226',
          hover: '#CC162D',
          glow: 'rgba(177, 18, 38, 0.4)',
        },
        'accent-secondary': '#D7A21A',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-hover': 'rgba(255, 255, 255, 0.15)',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(0, 0, 0, 0.4)',
        'accent-glow': '0 0 20px rgba(177, 18, 38, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
