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
    customClasses: {
      'custom-heading': 'text-5xl font-bold mb-4',
      'custom-button': 'text-white font-bold py-2 px-4 rounded',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.para': {
          backgroundColor: 'var(--tw-bg-red-700)',
          color: 'var(--tw-text-red-500)',
          width: '700px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
