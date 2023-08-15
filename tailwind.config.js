/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-fg-primary': '#1A89EC',
        'gray-fg-primary': '#98A2B3',
        'gray-fg-secondary': '#E4E7EC',
        'dark-gray-fg-primary': '#667085',
        'white-fg-primary': '#F2F4F7',
        'dark-fg-primary': '#021E35',
        'light-dark-fg-primary': '#344054',
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      screens: {
        '2xl': '1920px',
        '3xl': '2860px',
        '4xl': '3840px',
      },
    },
  },
  plugins: [],
}