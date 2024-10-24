import { writable } from "svelte/store";

export const colorThemes: ColorTheme[] = [
	{
		background: "#272932",
		leaf: "#37D278",
		petals: ["#F49097", "#F590A8", "#F59B90", "#F1767F"],
	},
];

export const currentColorTheme = writable(colorThemes[0]);
