/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#123456", // Example primary color
        secondary: "#C1D5A4", // Green
        accentPrimaryDark: "#E4D6A7",
        accentPrimary: "#E7DFC6",
        accentSecondary: "#2A3843",
        accentTertiary: "#F2F5F7",
        accentQuaternary: "#CB769E",
        statusError: "#FF3E04",
        statusSuccess: "#3FA30A",
        statusWarning: "#D0D806",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.primary"),
            // ... other styles
            h1: {
              color: theme("colors.secondary"),
              // ... other styles
            },
            h2: {
              color: theme("colors.primary"),
              // ... other styles
            },
            // ... other typography styles
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
