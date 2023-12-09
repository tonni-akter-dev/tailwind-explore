/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add any other theme extensions here if needed
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    customClasses: {
      'custom-heading': 'text-5xl font-bold mb-4',
      'custom-button': 'text-white font-bold py-2 px-4 rounded',
    },
  },
  plugins: [],
}
