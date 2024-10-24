<script lang="ts">
	import { onMount } from "svelte";
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
		};
	});
</script>

<div class="h-dvh flex justify-center items-center bg-[#272932]">
	<svg
		viewBox="0 0 100 100"
		class="m-6 object-contain max-w-2xl overflow-visible"
	>
		<linearGradient id="stem" x1="50%" y1="0%" x2="50%" y2="100%">
			<stop offset="0%" stop-color="#37d27822" />
			<stop offset="4%" stop-color="#37d278ee" />
			<stop offset="100%" stop-color="#37d27822" />
		</linearGradient>

		<linearGradient id="petal" x1="50%" y1="0%" x2="50%" y2="100%">
			<stop offset="0%" stop-color="#f49097ee" />
			<stop offset="100%" stop-color="#f4909744" />
		</linearGradient>

		<Flower flower={leftFlower} />
		<Flower flower={centerFlower} />
		<Flower flower={rightFlower} />
	</svg>
</div>
