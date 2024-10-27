import { writable } from "svelte/store";

export const colorThemes: ColorTheme[] = [
	{
		background: ["#272932", "#414452"],
		leaf: "#37D278",
		petals: ["#F49097", "#F590A8", "#F59B90", "#F1767F"],
	},
	{
		background: ["#12355B", "#1B5089"],
		leaf: "#49D49D",
		petals: ["#5CC8FF", "#5CADFF", "#5CC0FF", "#43C0FF"],
	},
	{
		background: ["#383246", "#534A68"],
		leaf: "#23CE6B",
		petals: ["#EA7AF4", "#D67AF5", "#F57AEA", "#E663F2"],
	},
	{
		background: ["#1A4848", "#297373"],
		leaf: "#9CFC97",
		petals: ["#FF8552", "#FF6852", "#FFA352", "#FF753A"],
	},
	{
		background: ["#523447", "#724963"],
		leaf: "#BCE7FD",
		petals: ["#F7EF81", "#F7DB81", "#F7E781", "#F5EC69"],
	},
	{
		background: ["#372554", "#51367C"],
		leaf: "#F5EC69",
		petals: ["#7C9EB2", "#7DA8B3", "#7D96B3", "#6E94AA"],
	},
	{
		background: ["#365074", "#456694"],
		leaf: "#5AAB67",
		petals: ["#FCFF6C", "#FFE86B", "#FCF46C", "#FCFF51"],
	},
	{
		background: ["#001427", "#00386C"],
		leaf: "#51CB20",
		petals: ["#F2545B", "#F26855", "#F13F47", "#EF2933"],
	},
	{
		background: ["#37392E", "#565947"],
		leaf: "#FFBFA0",
		petals: ["#57CC99", "#58CCAE", "#58CC86", "#47C78F"],
	},
	{
		background: ["#D5C5C8", "#E7DDDF"],
		leaf: "#2F97C1",
		petals: ["#A428A2", "#B62CB4", "#9027A3", "#982597"],
	},
];

export const currentColorTheme = writable(colorThemes[0]);
export const noAnimations = writable(false);
