// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // important for your toggle
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow-blue': '0 0 0 3px rgba(59,130,246,0.7)',
        'glow-red': '0 0 0 3px rgba(239,68,68,0.7)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}