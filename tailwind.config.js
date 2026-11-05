/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './servicios.html',
    './agentes.html',
    './pricing.html',
    './servicios/index.html',
    './agentes/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        vanilla: {
          50: '#FFFBF2',
          100: '#FFF3D6',
          200: '#FFE8AD',
          300: '#FFD97A'
        },
        crema: {
          50: '#F8F5F0',
          100: '#EFE7DC',
          200: '#E4D8C7',
          300: '#D6C3A9'
        },
        ink: '#111827',
        midnight: '#0F172A'
      },
      boxShadow: {
        soft: '0 12px 34px rgba(0,0,0,0.07)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  }
};
