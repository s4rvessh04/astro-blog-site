/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			// body: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
			// sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
			body: ["Mona Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
			sans: ["Mona Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
			number: [
				"Hubot Sans",
				"sans-serif",
				...defaultTheme.fontFamily.mono,
			],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
