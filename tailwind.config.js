const plugin = require('tailwindcss/plugin') // eslint-disable-line no-undef


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'green': '#1EB88D',
        'page-color': '#ebe8e8',
        'light-green': '#C0E862',
        'light-blue': '#2F4858',
        'dark-blue': '#0D1C2E',
        'white': '#FFFFFF',
      },
      backgroundImage: {
        'hero': "url('/src/assets/pet-hero.avif')",
      },
      textShadow: {
        sm: '1px 1px 6px black',
        DEFAULT: '2px 2px 4px black',
        lg: '0 8px 16px black',
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