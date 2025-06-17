/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#b9ddfe',
          300: '#7cc2fd',
          400: '#36a3fa',
          500: '#0c87eb',
          600: '#0069c9',
          700: '#0055a3',
          800: '#004986',
          900: '#003e70',
          950: '#00264a',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dbe5',
          300: '#acbccf',
          400: '#8197b3',
          500: '#637b9b',
          600: '#4e6182',
          700: '#3f4e6a',
          800: '#364158',
          900: '#30394a',
          950: '#1e2433',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
