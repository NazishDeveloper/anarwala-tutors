/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily : {
      'sans': ['Roboto', 'sans-serif'],
      'heading': ['Roboto', 'sans-serif'],
      'body': ['Robot', 'sans-serif'],
      'display': ['Roboto', 'sans-serif'],
      'paragraph': ['Robot', 'sans-serif'],
      'custom': ['Roboto', 'sans-serif'],
    }


  },
  plugins: [],
}