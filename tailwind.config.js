/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        jost: ['"Jost"', 'sans-serif'],
      },  
    },
  },
  plugins: [],
}

