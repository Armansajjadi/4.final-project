/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        vazir: ["sans"]
      },
      colors: {
        'twitch': {
          '100': '#772ce8',
          '200': '#9146ff',
          '300':'#2e105c'
        },
        'vibrantindigo': {
          '100': '#4c27b3',
          '200': '#2e59f9',
        },
        'royal': {
          '100': '#b74fe0',
          '200': '#65287f',
          },
          'ah':{
            '100':'#fff3ff3e'
          }
      }
    },
  },
  plugins: [],
}

