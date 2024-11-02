<script lang="ts">
	import { onMount } from "svelte";
	import {
		currentColorTheme,
		colorThemes,
		blackBackground,
	} from "$lib/colorThemes";
	import Flower from "$lib/Flower.svelte";

	let leftFlower = $state<FlowerObject>();
	let centerFlower = $state<FlowerObject>();
	let rightFlower = $state<FlowerObject>();

	let width = $state<number>(100);
	let height = $state<number>(100);
	let pixelRatio = $state<number>(1);
	let svgElement: SVGElement;
	let canvasElement: HTMLCanvasElement;

	onMount(() => {
		leftFlower = {
			base: {
				x: 40 + Math.random() * 5,
				y: 96 + Math.random() * 4,
			},
			top: {
				x: 20 + Math.random() * 10,
				y: 30 + Math.random() * 10,
			},
			petalScale: 10,
			leafScale: 5,
		};
		centerFlower = {
			base: {
				x: 45 + Math.random() * 10,
				y: 96 + Math.random() * 4,
			},
			top: {
				x: 45 + Math.random() * 10,
				y: 15 + Math.random() * 10,
			},
			petalScale: 15,
			leafScale: 7,
		};
		rightFlower = {
			base: {
				x: 55 + Math.random() * 5,
				y: 96 + Math.random() * 4,
			},
			top: {
				x: 70 + Math.random() * 10,
				y: 30 + Math.random() * 10,
			},
			petalScale: 10,
			leafScale: 5,
		};
	});

	function getColorThemeIndex() {
		let colorThemeIndex = 0;

		colorThemes.forEach((colorTheme, i) => {
			if (
				$currentColorTheme.background === colorTheme.background &&
				$currentColorTheme.leaf === colorTheme.leaf
			) {
				colorThemeIndex = i;
			}
		});

		return colorThemeIndex;
	}

	function generateImage() {
		let size = 100;
		if (width > height) {
			size = height * pixelRatio;
		} else {
			size = width * pixelRatio;
		}

		const img = new Image();
		img.onload = () => {
			const ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D;

			if ($blackBackground) {
				ctx.fillStyle = "#000";
				ctx.fillRect(0, 0, width * pixelRatio, height * pixelRatio);
			} else {
				const gradient = ctx.createLinearGradient(0, 0, 0, height * pixelRatio);
				gradient.addColorStop(0, $currentColorTheme.background[1]);
				gradient.addColorStop(1, $currentColorTheme.background[0]);
				ctx.fillStyle = gradient;
				ctx.fillRect(0, 0, width * pixelRatio, height * pixelRatio);
			}

			ctx.drawImage(
				img,
				(width * pixelRatio - size) / 2,
				(height * pixelRatio - size) / 2,
				size,
				size
			);

			const png = canvasElement.toDataURL("image/png");
			const link = document.createElement("a");
			link.download = "flowers.png";
			link.href = png;
			link.click();
		};

		const svgString = new XMLSerializer().serializeToString(svgElement);
		var url = URL.createObjectURL(
			new Blob([svgString], { type: "image/svg+xml" })
		);
		img.src = url;
	}
</script>

<svelte:window
	bind:outerHeight={height}
	bind:outerWidth={width}
	bind:devicePixelRatio={pixelRatio}
/>

<div
	class="h-screen flex justify-center items-center overflow-hidden"
	style="background: {$blackBackground
		? '#000'
		: `linear-gradient(${$currentColorTheme.background[1]}, ${$currentColorTheme.background[0]})`};"
>
	<svg
		viewBox="0 0 100 100"
		class="object-contain max-w-2xl overflow-visible"
		bind:this={svgElement}
	>
		<linearGradient id="leaf" x1="50%" y1="0%" x2="50%" y2="100%">
			<stop offset="0%" stop-color="{$currentColorTheme.leaf}dd" />
			<stop offset="100%" stop-color="{$currentColorTheme.leaf}11" />
		</linearGradient>

		<linearGradient id="stem" x1="50%" y1="0%" x2="50%" y2="100%">
			<stop offset="0%" stop-color="{$currentColorTheme.leaf}22" />
			<stop offset="4%" stop-color="{$currentColorTheme.leaf}ee" />
			<stop offset="100%" stop-color="{$currentColorTheme.leaf}22" />
		</linearGradient>

		{#each $currentColorTheme.petals as petalColor, i}
			<linearGradient id="petal-{i}" x1="50%" y1="0%" x2="50%" y2="100%">
				<stop offset="0%" stop-color="{petalColor}ee" />
				<stop offset="100%" stop-color="{petalColor}44" />
			</linearGradient>
		{/each}

		<Flower flower={leftFlower} />
		<Flower flower={centerFlower} />
		<Flower flower={rightFlower} />
	</svg>

	<div
		class="fixed top-4 right-4 flex flex-col justify-start items-end font-serif text-md"
	>
		<a
			href="/edit?colorTheme={getColorThemeIndex()}{$blackBackground
				? '&blackBackground'
				: ''}"
			style="color: {$currentColorTheme.leaf};"
		>
			Edit
		</a>
		<button style="color: {$currentColorTheme.leaf};" onclick={generateImage}>
			Save image
		</button>
	</div>

	<canvas
		bind:this={canvasElement}
		width={width * pixelRatio}
		height={height * pixelRatio}
		class="hidden"
	></canvas>
</div>
