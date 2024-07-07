/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary' : ['Montserrat', 'sans-serif'],
        'secondary' : ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

