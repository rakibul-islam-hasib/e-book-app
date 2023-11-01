import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F875AA',
        secondary: '#FFDFDF',
        tertiary: '#FFF6F6',
        'light-blue': '#AEDEFC',
        blue: '#3B82F6',
      },
      fontFamily: {
        teko: 'var(--teko)',
        Bebas_Neue: 'var(--bebas-neue)',
      }
    },
  },
  plugins: [nextui({})],
}
export default config
