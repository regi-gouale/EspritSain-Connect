/** @type {import('tailwindcss').Config} */
import * as prelinePlugin from 'preline/plugin'
import * as tailwindForms from '@tailwindcss/forms'
export default {
  content: [
    './node_modules/preline/dist/*.js',
    './**/*.{js,ts,jsx,tsx,html,php,blade.php,md,mdx,css,scss,sass,less,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [prelinePlugin, tailwindForms],
}
