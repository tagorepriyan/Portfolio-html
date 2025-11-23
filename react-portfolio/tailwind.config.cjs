/******************** Tailwind Config ********************/
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono]
      },
      colors: {
        bg: {
          light: '#f8fafc',
          dark: '#0e1113'
        },
        accent: {
          DEFAULT: '#6366f1',
          foreground: '#ffffff'
        }
      },
      boxShadow: {
        'soft': '0 2px 8px -1px rgba(0,0,0,0.08), 0 4px 16px -2px rgba(0,0,0,0.04)',
        'soft-dark': '0 2px 8px -1px rgba(0,0,0,0.5), 0 4px 16px -2px rgba(0,0,0,0.4)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      transitionTimingFunction: {
        'swift': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
}
