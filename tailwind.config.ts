import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      backgroundImage: {
        heroDepoiments: "url('/imgBackgrounds/depo.jpg')",
      },
      fontFamily: {
        bodyFont: ['space-grotesk', 'sans-serif'],
        titleFont: ['Exo', 'sans-serif'],
      },
      colors: {
        bodyColorDark: '#212428',
        bodyColorligth: '#cfcfcf',
        lightText: '#c4cfde',
        darkText: '#2d302f',
        boxBg: 'linear-gradient(145deg, #1e2024, #23272b)',
        btnContato: '#3DD856',
        colorDetails: '#1BBD73',
        bgPicture: '#1e293b',
        bgFundo: '#040013',
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
    },
  },
  plugins: [],
};
export default config;
