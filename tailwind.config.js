/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        pared: {
          bg: '#F7F3EE',
          text: '#2C2420',
          accent: '#C4836A',
          sage: '#8B9E7E',
          subtle: '#E8E0D6',
          cream: '#FAF8F5',
          muted: '#9B9188',
          dark: '#1A1614',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
