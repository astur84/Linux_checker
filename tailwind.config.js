/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ubuntu: {
          blue: '#6699CC',
          brightBlue: '#2E96FF',
          lightBlue: '#99CCFF',
          green: '#0E8420',
          forestGreen: '#008013',
          errorRed: '#C7162B',
        },
        neutral: {
          charcoal: '#262626', // Fondo principal
          nearBlack: '#202020', // Navbar / Fondos alternativos
          darkGray: '#2F2F2F',  // Tarjetas
          borderDark: '#373737', // Bordes
          lightSurface: '#F5F5F5' // Inputs claros
        }
      },
      borderRadius: {
        'none': '0px', // ¡Regra estricta del DESIGN.md!
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      }
    },
  },
  plugins: [],
}
