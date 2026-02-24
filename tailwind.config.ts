import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#2563eb',
          700: '#1d4ed8'
        }
      },
      fontFamily: {
        sans: ['"Noto Sans Arabic"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
