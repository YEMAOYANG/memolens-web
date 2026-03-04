import type { Config } from 'tailwindcss'

export default {
  content: ['./components/**/*.{vue,js,ts}','./pages/**/*.{vue,js,ts}','./layouts/**/*.vue','./app.vue'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#5B5FEF', 50: '#EEF2FF', 100: '#E0E7FF', 500: '#5B5FEF', 600: '#4F46E5' },
        accent: { DEFAULT: '#8B5CF6', 500: '#8B5CF6' },
        dark: { DEFAULT: '#0C0C18', surface: '#12121F', border: '#1E1E30' },
      },
      fontFamily: {
        sans: ['-apple-system', 'SF Pro Display', 'Inter', 'PingFang SC', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #5B5FEF, #8B5CF6)',
        'gradient-hero': 'linear-gradient(160deg, #0C0C18, #12121F, #1A0F2E)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
