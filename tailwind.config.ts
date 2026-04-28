import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        ink: "#0D0D0D",
        paper: "#F7F5F0",
        mist: "#E8E4DC",
        fog: "#C4BFB6",
        signal: "#1A6B4A",
        "signal-light": "#E8F5EE",
        "signal-dark": "#0F3D2A",
        accent: "#E8622A",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#0D0D0D",
            fontFamily: "var(--font-body)",
            "h1,h2,h3,h4": {
              fontFamily: "var(--font-display)",
              fontWeight: "600",
            },
            a: {
              color: "#1A6B4A",
              textDecoration: "underline",
              textDecorationColor: "#1A6B4A",
              "&:hover": { color: "#0F3D2A" },
            },
            code: {
              backgroundColor: "#E8E4DC",
              padding: "0.15em 0.3em",
              borderRadius: "3px",
              fontFamily: "var(--font-mono)",
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
