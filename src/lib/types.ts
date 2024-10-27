type FlowerObject = {
	base: {
		x: number;
		y: number;
	};
	top: {
		x: number;
		y: number;
	};
	petalScale: number;
	leafScale: number;
};

type ColorTheme = {
	background: string[];
	leaf: string;
	petals: string[];
};
