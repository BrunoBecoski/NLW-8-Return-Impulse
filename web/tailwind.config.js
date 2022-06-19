function setCssVar({opacityVariable, opacityValue, cssVarName}) {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVarName}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVarName}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${cssVarName}))`
}

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
        pink: '#eb3187',

        onSurface: "#FFFFFF",

        headline: ({ opacityVariable, opacityValue }) => 
          setCssVar({ opacityVariable, opacityValue, cssVarName: '--headline'}),

        paragraph: ({ opacityVariable, opacityValue }) => 
          setCssVar({ opacityVariable, opacityValue, cssVarName: '--paragraph'}),

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

        brand: {
          100: ({ opacityVariable, opacityValue }) => 
            setCssVar({ opacityVariable, opacityValue, cssVarName: '--brand_100'}),
          200: ({ opacityVariable, opacityValue }) => 
            setCssVar({ opacityVariable, opacityValue, cssVarName: '--brand_200'}),
          500: ({ opacityVariable, opacityValue }) => 
            setCssVar({ opacityVariable, opacityValue, cssVarName: '--brand_500'}),
          900: ({ opacityVariable, opacityValue }) =>
            setCssVar({ opacityVariable, opacityValue, cssVarName: '--brand_900'}),
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
