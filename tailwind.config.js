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
          bg: '#F3F6FB',
          text: '#222838',
          accent: '#C4A0BA',
          sage: '#72ADA0',
          subtle: '#D8E0EE',
          cream: '#F9FBFE',
          muted: '#8494AB',
          dark: '#181C2C',
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
