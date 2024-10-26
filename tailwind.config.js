/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      main: ['"roboto", "Afacad Flux"']
    },
    extend: {
      colors: {
        'azul-100' : '#4d80a3',
        'azul-200' : '#3a607a',
        'azul-300' : '#274052',
        'azul-400' : '#132029',
        'dourado' : 'FFCC00',
      }
    },
  },
  plugins: [],
}

