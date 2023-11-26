/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'risk-of-rain-logo': "url('https://riskofrainreturns.wiki.gg/images/e/e6/Site-logo.png?aeb81')",
        'risk-of-rain': "url('src/riskofrain-1700998525367-1992.jpg')",
      },
      fontFamily: {
        minecraft: ["MINECRAFT", "sans-serif"],
      },
    },
    plugins: [],
  }
}
