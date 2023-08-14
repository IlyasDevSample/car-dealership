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
        'white-fg-primary': '#F2F4F7',
        'dark-fg-primary': '#021E35',
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}