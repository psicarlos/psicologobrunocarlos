/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-light': '#E6D8C8',
        'beige-sand': '#DCCBB5',
        'beige-dark': '#CBB79E',
        'gray-warm': '#8A857D',
        'brown-dark': '#2E2A26',
        'gold': '#B08D57',
        'divisor': "#9C8B6F",
        'card': "#DDD0C0",
      },
      fontFamily: {
        'serif-title': ['Playfair Display', 'serif'],
        'eb-garamond': ['EB Garamond', 'serif'],
        'serif-subtitle': ['Cormorant Garamond', 'Libre Baskerville', 'serif'],
        'sans': ['Lato', 'Source Sans Pro', 'sans-serif'],
      },
      boxShadow: {
        'panel': '0 4px 8px rgba(0, 0, 0, 0.55), 0 12px 24px rgba(0, 0, 0, 0.45), 0 24px 48px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
