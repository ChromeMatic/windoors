/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': " 'Nunito', serif;",
      },
      colors:{
        Dark: '#202124',
        innerDark: '#191919',
        Snow:'#F5FEFD',
        OffWhite:'#FAF9F6',
      },
    },
  },
  plugins: [],
}

