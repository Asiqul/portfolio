/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1rem',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
    colors: {
      primary: '#F2F5F9',
      secondary: '#FF9C1A',
      tertiary: '#EC1B09',
      cards: '#FFFFFF',
      border: '#E3E3E3',
      skill_cards: '#E1E8EF',
    },
    container: {
      center: true,
      padding: '14px',
    },
    extend: {},
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      title: ['Pacifico', 'cursive'],
      body: ['Raleway', 'sans-serif'],
    },
  },
  plugins: [],
};
