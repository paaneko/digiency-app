module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'orange-main': '#FF5300',
      'main-bg': '#ff49db',
      'gray-pg': '#7B7B7B',
      'dark-bg': '#18191A',
      'dark-v-1': '#242526',
      'dark-v-2': '#3A3B3C',
    },
  },
  plugins: [],
};
