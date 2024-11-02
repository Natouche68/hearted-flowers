import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ url }) => {
	const colorThemeId = Number(url.searchParams.get("colorTheme")) ?? 0;
	const blackBackground = url.searchParams.get("blackBackground") !== null;

	return {
		colorThemeId,
		blackBackground,
	};
};
