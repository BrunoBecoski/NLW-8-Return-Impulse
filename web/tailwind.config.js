module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: '#00856F',
        orange: '#E8590C',
        blue: '#1971C2',
        purple: '#5F3DC4',
        red: '#C92A2A',
        pink: '#F91880',

        onSurface: "#FFFFFF",

        background: {
          500: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--background_500), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--background_500), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--background_500))`
          },
          900: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--background_900), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--background_900), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--background_900))`
          }
        },

        text: {
          500: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--text_500), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--text_500), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--text_500))`
          },
          900: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--text_900), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--text_900), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--text_900))`
          }
        },
      
        brand: {
          50: '#17d4ca',
          100: '#08ff13',

          200: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--brand_200), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--brand_200), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--brand_200))`
          },

          500: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--brand_500), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--brand_500), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--brand_500))`
          },

          900: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--brand_900), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--brand_900), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--brand_900))`
          }
        }
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(40px)' },
          '100%': { transform: 'translateX(-885px)' }
        }
      },
      animation: {
        'scroll': 'scroll 10s linear infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
