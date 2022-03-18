let colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.tsx'],
  variants: {},
  theme: {
    extend: {
      boxShadow: {
        theme: `8px 8px 0 0 ${colors.gray['800']}`
      },
      fontFamily: {
        theme: '"Merriweather"'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
