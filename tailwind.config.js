/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend:{
    spacing:{
                128: '32rem',
                140: '40rem',
                124:'31rem',
                224:'56rem',
                106:'26.5rem'
    }
   },
    screens: {
      mobile: "640px",
      tablet: "960px",
      desktop: "1140px",
    },
  },
  plugins: [require("daisyui")],
}
