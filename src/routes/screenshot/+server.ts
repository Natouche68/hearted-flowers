import type { RequestHandler } from "./$types";
import { launch } from "puppeteer";

export const GET: RequestHandler = async ({ url }) => {
	const width = Number(url.searchParams.get("width")) ?? 1080;
	const height = Number(url.searchParams.get("height")) ?? 1920;
	const deviceScaleFactor =
		Number(url.searchParams.get("deviceScaleFactor")) ?? 1;
	const colorThemeId = Number(url.searchParams.get("colorTheme")) ?? 0;

	const browser = await launch();
	const page = await browser.newPage();
	await page.setViewport({
		width,
		height,
		deviceScaleFactor,
	});

	await page.goto(`http://${url.host}?colorTheme=${colorThemeId}&noAnimations`);

	await page.evaluate((id) => {
		const element = document.getElementById(id);
		if (element) {
			element.style.display = "none";
		}
	}, "to-hide");

	const buffer = await page.screenshot({
		encoding: "binary",
		type: "png",
		fullPage: true,
	});

	await browser.close();

	return new Response(buffer, {
		status: 200,
		headers: {
			"Content-Type": "image/png",
			"Content-Disposition": "attachment; filename=flowers.png",
		},
	});
};
