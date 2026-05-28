/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#050817',
          blue: '#2E7BFF',
          cyan: '#6FFFE0',
          purple: '#8C5CFF',
          pink: '#D65BFF',
        },
        background: {
          white: '#FFFFFF',
          soft: '#F7FAFF',
          tint: '#EEF5FF',
          dark: '#050817',
        },
        text: {
          primary: '#070B1A',
          secondary: '#4B5563',
          muted: '#6B7280',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #6FFFE0 0%, #2E7BFF 42%, #8C5CFF 75%, #D65BFF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #050817 0%, #071A3D 55%, #111827 100%)',
        'gradient-button': 'linear-gradient(90deg, #2E7BFF 0%, #8C5CFF 100%)',
      }
    },
  },
  plugins: [],
}
