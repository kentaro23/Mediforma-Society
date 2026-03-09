import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#13223D",
        teal: "#1F9993",
        offwhite: "#FAFBFC",
        border: "#E5E7EB",
        text: "#374151",
        textsub: "#6B7280",
        textlight: "#9CA3AF"
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "4px"
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)"
      },
      fontSize: {
        base: ["15px", "1.7"]
      }
    }
  },
  plugins: []
};

export default config;
