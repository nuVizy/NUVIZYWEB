/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#222021',
        slate: '#3E424B',
        'matrix-dark': '#0b0f0a',
        neon: '#00FF41',
        'neon-dim': '#00c43a',
        cyan: '#5EEAD4'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Orbitron"', 'sans-serif'],
        monoTech: ['"Share Tech Mono"', 'monospace']
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
