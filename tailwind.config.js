/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)'], // Geist Sans
        mono: ['var(--font-geist-mono)'],  // Geist Mono
        poppins: ['var(--font-poppins)'],  // Poppins
      },
    },
  },
  plugins: [],
};
