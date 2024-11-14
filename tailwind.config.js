/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<components>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    fontFamily:{
      "SUSE-Bold": ["SUSE-Bold","sans-serif"],
      "SUSE-Light": ["SUSE-Light","sans-serif"],
      "SUSE-Regular": ["SUSE-Regular","sans-serif"],
    }
   },
  },
  plugins: [],
}

