import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  content: ['./src-nuxt/pages/**/*.vue', './src-nuxt/components/**/*.vue', './src-nuxt/layouts/**/*.vue', './app.vue'],
  theme: {
    extend: {},
  },
  plugins: [],
}
