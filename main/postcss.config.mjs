/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    "postcss-nested": {},
    "tailwindcss/nesting": "postcss-nested",
    tailwindcss: {},
    autoprefixer: {}
  }
};

export default config;
