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

        brand: {
          50: '#FFFFFF',
          100: '#F7F9F9',
          200: '#DCE9E2',
          500: '#00856F',
          900: '#00453A', 
          headline: '#212529',
          paragraph: '#495057',
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
