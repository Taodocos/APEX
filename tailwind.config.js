/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf7f1',
          100: '#d5eedf',
          200: '#aee0c2',
          300: '#7ac99e',
          400: '#46ad76',
          500: '#1b8a4b',
          600: '#146b3a', // Nexus Ethiopia Primary Green
          700: '#0f522c',
          800: '#0a3a1f',
          900: '#062514',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbb034',
          500: '#f4a623', // Nexus Ethiopia Secondary Gold
          600: '#d98207',
          700: '#b45309',
        },
        dark: {
          800: '#2d2c2d',
          900: '#222222',
          950: '#181818',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
