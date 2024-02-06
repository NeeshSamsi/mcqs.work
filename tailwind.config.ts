import type { Config } from "tailwindcss"
import forms from "@tailwindcss/forms"
import theme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [forms],
}
export default config
