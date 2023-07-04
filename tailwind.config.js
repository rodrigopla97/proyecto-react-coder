/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1fb6ff',
          100: '#EBF8FF',
          200: '#BEE3F8',
        },
        purple: {
          DEFAULT: '#7e5bef',
          100: '#F3EBFF',
          200: '#DBC7FF',
        },
        pink: {
          DEFAULT: '#ff49db',
          100: '#FFF5F7',
          200: '#FED7E2',
        },
        orange: {
          DEFAULT: '#ff7849',
          100: '#FFFAF0',
          200: '#FEEBC8',
        },
        green: {
          DEFAULT: '#13ce66',
          100: '#F0FFF4',
          200: '#C6F6D5',
        },
        yellow: {
          DEFAULT: '#ffc82c',
          100: '#FFFFF0',
          200: '#FEFCBF',
        },
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
};
