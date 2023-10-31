import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F875AA',
        secondary: '#FFDFDF',
        tertiary: '#FFF6F6',
        'light-blue': '#AEDEFC',
      }
    },
  },
  plugins: [],
}
export default config
