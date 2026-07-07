import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        navy: "#00227C",
        blue: "#004AAD",
        cyan: "#00C2D1",
        yellow: "#FEE202",
        ink: {
          666: "#666666",
          555: "#555555",
          444: "#444444",
          999: "#999999",
          aaa: "#AAAAAA",
        },
        surface: {
          e4e8f0: "#E4E8F0",
          e8eaf0: "#E8EAF0",
          f5f7fb: "#F5F7FB",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        hero: ["66px", { lineHeight: "1.06", letterSpacing: "-2.2px" }],
        "hero-sm": ["40px", { lineHeight: "1.1", letterSpacing: "-1.2px" }],
        "hero-md": ["52px", { lineHeight: "1.08", letterSpacing: "-1.6px" }],
      },
      borderRadius: {
        "18": "18px",
        "20": "20px",
        "22": "22px",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
