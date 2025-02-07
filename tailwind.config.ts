import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
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
			},
		},
	},
	plugins: [forms, typography],
} satisfies Config;
