module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'uxl': '16rem',
      }
    },
    fontFamily: {
      'sans': ['neue-haas-grotesk-text', 'sans-serif'],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
