/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ragnarok-bg': "url('/bg-rag.jpg')",
      },
      backgroundColor: {
      },
      fontFamily: {
        'pixel': ['VT323']
      },
      cursor: {
        'ragnarok': "url('/cursor.webp'), auto",
        'ragnarok-pointer' : "url('/select.gif'), pointer"
      }
    },
  },
  plugins: [],
}