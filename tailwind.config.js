module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}',
  ], // remove unused styles in production
  theme: {
    extend: {
      fontSize: {
        'uxl': '14rem',
      },
      colors: {
        'primary': '#e30613',
      },
      aspectRatio: {
        '4/5': '4 / 5',
      }
    },
    fontFamily: {
      'sans': ['neue-haas-grotesk-text', 'sans-serif'],
    },

  },
  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
