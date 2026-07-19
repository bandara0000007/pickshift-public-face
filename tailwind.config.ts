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
        green: "#16A163",
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
          ebebeb: "#EBEBEB",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        hero: ["54px", { lineHeight: "1.08", letterSpacing: "-1.8px" }],
        "hero-sm": ["32px", { lineHeight: "1.15", letterSpacing: "-1px" }],
        "hero-md": ["44px", { lineHeight: "1.1", letterSpacing: "-1.4px" }],
      },
      borderRadius: {
        "18": "18px",
        "20": "20px",
        "22": "22px",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".4", transform: "scale(.7)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .5s ease both",
        floatY: "floatY 4s ease-in-out infinite",
        pulseDot: "pulseDot 1.5s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
