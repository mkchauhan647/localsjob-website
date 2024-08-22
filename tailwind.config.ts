import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3597DC",
        mprimary: "#FFDEE6",
        secondary: "#EE8E3D",
        figma_red:"#BE123C",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],

      },
      boxShadow: {
        'custom': '0px -1px 0px 0px #E4E5E8 inset'
      },
      
    },
  },
  plugins: [ require('tailwindcss-animated')],
}
export default config
