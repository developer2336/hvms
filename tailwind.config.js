/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(239, 246, 255)',
          100: 'rgb(219, 234, 254)',
          200: 'rgb(191, 219, 254)',
          300: 'rgb(147, 197, 253)',
          400: 'rgb(96, 165, 250)',
          500: 'rgb(59, 130, 246)',
          600: 'rgb(37, 99, 235)',
          700: 'rgb(29, 78, 216)',
          800: 'rgb(30, 64, 175)',
          900: 'rgb(30, 58, 138)',
        },
        accent: {
          50: 'rgb(255, 247, 237)',
          100: 'rgb(255, 237, 213)',
          200: 'rgb(254, 215, 170)',
          300: 'rgb(253, 186, 116)',
          400: 'rgb(251, 146, 60)',
          500: 'rgb(249, 115, 22)',
          600: 'rgb(234, 88, 12)',
          700: 'rgb(194, 65, 12)',
          800: 'rgb(154, 52, 18)',
          900: 'rgb(124, 45, 18)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};