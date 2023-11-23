/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myColor: '#219C90'
      }
    },
  },
    plugins: [require("daisyui")],
}



