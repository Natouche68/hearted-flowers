import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				serif: ["Neuton", "ui-serif", "serif"],
			},
		},
	},

	plugins: [],
} as Config;
