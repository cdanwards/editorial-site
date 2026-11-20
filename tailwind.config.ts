import type { Config } from "tailwindcss";

// Tailwind is used for its base reset and a few utilities (sr-only).
// The site's own styles are in app/editorial.css.
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {} },
  plugins: [],
};
export default config;
