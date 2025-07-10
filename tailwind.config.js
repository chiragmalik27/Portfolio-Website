/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Developer-centric dark theme colors
        'dev-dark': {
          bg: '#0f172a',      // Dark slate / midnight background
          'bg-secondary': '#1e293b', // Slightly lighter background
          'bg-tertiary': '#334155',  // Card/component background
        },
        'dev-accent': {
          primary: '#38bdf8',   // Sky blue
          secondary: '#6366f1', // Indigo
        },
        'dev-text': {
          primary: '#e2e8f0',   // Light slate
          secondary: '#cbd5e1', // Slightly darker text
          muted: '#94a3b8',     // Muted text
        },
        'dev-highlight': {
          success: '#22c55e',   // Green for success/icons
          warning: '#f59e0b',   // Amber for warnings
          error: '#ef4444',     // Red for errors
        }
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      }
    },
  },
  plugins: [],
};