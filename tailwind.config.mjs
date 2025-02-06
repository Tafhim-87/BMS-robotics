/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Urbanist: ["Urbanist", "serif"],
      },
    },
  },
  plugins: [],
};
