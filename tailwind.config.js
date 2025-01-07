/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        'scroll-bounce': {
          '0%': { top: '10px' },
          '90%': { top: '25px' },
          '100%': { top: '10px' },
        },
      },
      animation: {
        'scroll-bounce': 'scroll-bounce 1s infinite',
      },
      
    },
  },
  plugins: [],
}

