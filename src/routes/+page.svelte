<script lang="ts">
	import { onMount } from "svelte";
	import { currentColorTheme, colorThemes } from "$lib/colorThemes";
	import Flower from "$lib/Flower.svelte";

	let leftFlower = $state<FlowerObject>();
	let centerFlower = $state<FlowerObject>();
	let rightFlower = $state<FlowerObject>();

	let width = $state<number>();
	let height = $state<number>();
	let scaleFactor = $state<number>();

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
</script>

<svelte:window
	bind:innerWidth={width}
	bind:innerHeight={height}
	bind:devicePixelRatio={scaleFactor}
/>

<div
	class="h-dvh flex justify-center items-center"
	style="background: linear-gradient({$currentColorTheme
		.background[1]}, {$currentColorTheme.background[0]});"
>
	<svg viewBox="0 0 100 100" class="object-contain max-w-2xl overflow-visible">
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
		id="to-hide"
		class="fixed top-4 right-4 flex flex-col justify-start items-end"
	>
		<a
			href="/edit?colorTheme={getColorThemeIndex()}"
			class="font-serif text-sm"
			style="color: {$currentColorTheme.leaf};"
		>
			Edit
		</a>
		<a
			href="/screenshot?colorTheme={getColorThemeIndex()}&width={width}&height={height}&deviceScaleFactor={scaleFactor}"
			download="flowers.png"
			class="font-serif text-sm"
			style="color: {$currentColorTheme.leaf};"
		>
			Save image
		</a>
	</div>
</div>
