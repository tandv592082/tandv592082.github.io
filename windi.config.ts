import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

const themeColor = {
  'gray-700': '#24292f',
  black: '#0d1117',
  'gray-200': '#c9d1d9'
}

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: themeColor,
      fontFamily: {
        sans: [ 'Bitter', 'sans-serif' ],
        serif: [ 'Merriweather', 'serif' ],
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      }
      addUtilities(newUtilities)
    }),
    plugin(({ addComponents }) => {
      const link = {
        'a[rel="noopener"]': {
          color: 'black',
          borderBottom: '1px solid rgba(125,125,125,.3)',
          transition: 'border .3s ease-in-out',
          textDecoration: 'none',
          '&:hover': {
            borderBottom: '1px solid rgba(125,125,125, 1)',
          }
        },
      }
      addComponents(link)
    }),
    plugin(({ addDynamic, variants }) => {
      addDynamic('skew', ({ Utility, Style }) => {
        return Utility.handler
          .handleStatic(Style('skew'))
          .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
          .createProperty('transform')
      }, variants('skew'))
    }),
  ],
})