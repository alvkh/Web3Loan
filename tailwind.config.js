/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    fontFamily:{
      "Oswald-Bold":"Oswald-Bold",
      "Oswald-Regular":"Oswald-Regular",
      "Oswald-Medium":"Oswald-Medium"
    },backgroundImage:{
      'Section': "url('/img/section.png')",
    }
  },
  plugins: [],
}

