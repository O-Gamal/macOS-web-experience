import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        '48': 'repeat(48, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        '96': 'repeat(96, minmax(0, 1fr))',
      },
      backgroundImage: {
        wallpaper: "url('/src/assets/images/wallpaper.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
