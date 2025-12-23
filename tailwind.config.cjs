/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#222021',
        slate: '#3E424B',
        accent: '#C7B9A6'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        subtle: '6px'
      },
      boxShadow: {
        'soft': '0 14px 40px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
