import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ url }) => {
	const colorThemeId = Number(url.searchParams.get("colorTheme")) ?? 0;

	return {
		colorThemeId,
	};
};
