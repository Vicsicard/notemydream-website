/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-indigo': '#13172A',
        'dream-purple': '#6B5CE7',
        'lavender-mist': '#E7E6FF',
        'soft-purple': '#A99FF5',
        'dark-bg': '#1a1a2e',
        'soft-grey': '#6B7280',
        'muted-grey': '#9CA3AF',
        'border-grey': '#D1D5DB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
