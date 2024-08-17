import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scrollLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scrollRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        parallaxLeftToRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(10%)' },
        },
        parallaxRightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-10%)' },
        },
      },
      animation: {
        scrollLeftToRight: 'scrollLeftToRight 20s linear infinite',
        scrollRightToLeft: 'scrollRightToLeft 40s linear infinite',
        parallaxLeftToRight: 'parallaxLeftToRight 10s ease-in-out infinite alternate',
        parallaxRightToLeft: 'parallaxRightToLeft 10s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
export default config;
