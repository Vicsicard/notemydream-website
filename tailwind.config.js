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
        'dream-blue': '#5063FF',
        'dawn-peach': '#F8D3B3',
        'lavender-mist': '#E7E6FF',
        'morning-fog': '#EFF1F5',
        'warm-sand': '#F4E8DA',
        'soft-grey': '#6B7280',
        'muted-grey': '#9CA3AF',
        'border-grey': '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
