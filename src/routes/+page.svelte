<script lang="ts">
	import { onMount } from "svelte";
	import { currentColorTheme } from "$lib/colorThemes";
	import Flower from "$lib/Flower.svelte";

	let leftFlower = $state<FlowerObject>();
	let centerFlower = $state<FlowerObject>();
	let rightFlower = $state<FlowerObject>();

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
</script>

<div
	class="h-dvh flex justify-center items-center"
	style="background: {$currentColorTheme.background};"
>
	<svg
		viewBox="0 0 100 100"
		class="m-6 object-contain max-w-2xl overflow-visible"
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
</div>
