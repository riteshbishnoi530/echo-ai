/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        '2xl': '1140px'
      },
    },
    extend: {
      colors: {
        'off-black ': '#01000B',
        'light-white': '#FFFFFF00',
        'off-white': '#FFFFFFB2',
        'lite-blue': '#3A3EF5',
        'sky-blue': '#32C8F1',

      }
    },
  },
  plugins: [],
}