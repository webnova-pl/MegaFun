import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				primaryc: "var(--primaryc)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				gray: "var(--gray)",
			},
			boxShadow: {
				footer: "0px -7px 20.9px 0px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [forms, typography],
} satisfies Config;
