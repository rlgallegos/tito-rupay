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
            'light-green': '#0C3206',
            'mid-green': '#0A230B',
            'dark-green': '#021707',
            'light-gold': '#F7F56F',
            'dark-gold': '#AC7F2E'
        },
        backgroundImage: {
            'bw-forest': "url('/images/bw-forest.jpg')",
            'bw-desk': "url('/images/bw-desk.jpg')",
            'dark-desk': "url('/images/darker-desk.jpg')",
            'green-placeholder': "url('/images/green-placeholder.png')",
            'hands-touching': "url('/images/hands-grabbing.jpg')",
            'forest-path': "url('/images/forest-path.jpg')",
            'forest-stone': "url('/images/forest-stone.jpg')",
            'brick-split': "url('/images/brick-split.jpg')",
            'green-mountains': "url('/images/green-mountains.png')",
            'blurry-gold': "url('/images/blurry-gold.jpg')",
            'park-path': "url('/images/park-path.jpg')",
            'marble': "url('/images/marble.jpg')",
        },
    },
  },
  plugins: [],
}
export default config
