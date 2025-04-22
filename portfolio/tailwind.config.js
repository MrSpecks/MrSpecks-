// tailwind.config.js
  /** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // important for your toggle
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }