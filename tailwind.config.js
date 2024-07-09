/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      height: {
        '400px': '200px',
      }
    },
  },
  variants: {
    extend: {
      height: ['hover'],
    },
  },
  plugins: [],
}