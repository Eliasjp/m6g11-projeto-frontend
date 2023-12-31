/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    padding: ['responsive', 'hover', 'focus', 'group-hover', '*'],
  },
  theme: {
    colors: {
      feedback: {
        alert_1: "#cd2b31",
        alert_2: "#fdd8d8",
        alert_3: "#ffe5e5",
        success_1: "#18794e",
        success_2: "#ccebd7",
        success_3: "#ddf3e4",
      },
      random: {
        1: "#e34d8c",
        2: "#c04277",
        3: "#7d2a4d",
        4: "#7000ff",
        5: "#6200e3",
        6: "#36007d",
        7: "#349974",
        8: "#2a7d5f",
        9: "#153d2e",
        10: "#6100ff",
        11: "#5700e3",
        12: "#30007d",
      },
      brand: {
        1: "#4529e6",
        2: "#5126ea",
        3: "#b0a6f0",
        4: "#edeafd",
      },
      grey: {
        0: "#0b0d0d",
        1: "#212529",
        2: "#495057",
        3: "#868e96",
        4: "#adb5bd",
        5: "#ced4da",
        6: "#dee2e6",
        7: "#e9ecef",
        8: "#f1f3f5",
        9: "#f8f9fa",
        10: "#fdfdfd",
      },
      colors_color_white_fixed: "#ffffff",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      padding: {
        inherit: 'inherit'
      }
    },
  },
  plugins: [],
};
