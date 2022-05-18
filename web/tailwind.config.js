module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
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
