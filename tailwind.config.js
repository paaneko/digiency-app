module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        xl: '3rem',
      },
      screens: {
        sm: '380px',
        md: '768px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
    },
    colors: {
      'orange-main': '#FF5300',
      white: '#FFFFFF',
      'dark-white-bg': '#FFF7F4',
      'main-bg': '#373737',
      'gray-pg': '#7B7B7B',
      'dark-bg': '#18191A',
      'dark-v-1': '#242526',
      'dark-v-2': '#3A3B3C',
      'error-red': '#FF0000',
    },
  },
  plugins: [],
};
