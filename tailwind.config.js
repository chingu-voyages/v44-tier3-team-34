const plugin = require('tailwindcss/plugin') // eslint-disable-line no-undef


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'green': '#1EB88D',
      'page-color': 'efeeee',
      'light-green': '#C0E862',
      'light-blue': '#2F4858',
      'dark-blue': '#0D1C2E',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/pet-hero.jpg')",
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px rgba(0,0,0,0.5)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}