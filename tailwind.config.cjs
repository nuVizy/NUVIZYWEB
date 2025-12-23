/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#222021',
        slate: '#3E424B'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
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
