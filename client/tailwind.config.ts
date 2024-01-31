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
            'primary': '#F6F6F6',
            'secondary': '#EBEAEA',
            'green-1': '#14362A',
            'green-2': '#1C4837',
            'accent': '#006400',
        },
        backgroundImage: {
            'bw-forest': "url('/images/bw-forest.jpg')",
            'bw-desk': "url('/images/bw-desk.jpg')",
            'dark-desk': "url('/images/darker-desk.jpg')",
            'green-placeholder': "url('/images/green-placeholder.png')",
            'hands-touching': "url('/images/hands-grabbing.jpg')",
            'forest-path': "url('/images/forest-path.jpg')",
            'forest-stone': "url('/images/forest-stone.jpg')",

        },
    },
  },
  plugins: [],
}
export default config
