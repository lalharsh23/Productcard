/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#272727',
        'custom-black-65': 'rgba(0, 0, 0, 0.65)', // Adding custom color
      },
    },
  },
  plugins: [],
}

