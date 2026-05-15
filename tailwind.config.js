/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f9fdf6',
          100: '#f0fae9',
          200: '#dff5d5',
          300: '#c7eab5',
          400: '#a8d984',
          500: '#8bc863',
          600: '#6ba84d',
          700: '#558a3f',
          800: '#457035',
          900: '#38592b',
        },
        forest: {
          50: '#f0f5f0',
          100: '#e0eae1',
          200: '#c1d5c3',
          300: '#a2c0a5',
          400: '#83ab87',
          500: '#649669',
          600: '#4d7a51',
          700: '#365e39',
          800: '#1f4221',
          900: '#0a2611',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(107, 168, 77, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(107, 168, 77, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
