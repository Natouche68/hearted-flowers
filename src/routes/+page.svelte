<script lang="ts">
	import { onMount } from "svelte";
	import Heart from "$lib/Heart.svelte";

	type Flower = {
		base: {
			x: number;
			y: number;
		};
		top: {
			x: number;
			y: number;
		};
	};

	let leftFlower = $state<Flower>();
	let centerFlower = $state<Flower>();
	let rightFlower = $state<Flower>();

	onMount(() => {
		leftFlower = {
			base: {
				x: 40 + Math.random() * 10,
				y: 96 + Math.random() * 4,
			},
			top: {
				x: 20 + Math.random() * 10,
				y: 25 + Math.random() * 15,
			},
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
		};
		rightFlower = {
			base: {
				x: 50 + Math.random() * 10,
				y: 96 + Math.random() * 4,
			},
			top: {
				x: 70 + Math.random() * 10,
				y: 25 + Math.random() * 15,
			},
		};
	});
</script>

<div class="h-dvh flex justify-center items-center bg-[#272932]">
	<svg
		viewBox="0 0 100 100"
		class="m-6 object-contain max-w-2xl overflow-visible"
	>
		<linearGradient id="stem" x1="50%" y1="0%" x2="50%" y2="100%">
			<stop offset="0%" stop-color="#37d278ee" />
			<stop offset="100%" stop-color="#37d27822" />
		</linearGradient>
		<linearGradient id="petal" x1="50%" y1="0%" x2="50%" y2="100%">
			<stop offset="0%" stop-color="#f49097ee" />
			<stop offset="100%" stop-color="#f4909744" />
		</linearGradient>

		<line
			x1={leftFlower?.base.x}
			y1={leftFlower?.base.y}
			x2={leftFlower?.top.x}
			y2={leftFlower?.top.y}
			stroke="url(#stem)"
			stroke-width="2"
		/>
		{#each new Array(5) as _, i}
			<Heart
				x={leftFlower?.top.x ?? 0}
				y={leftFlower?.top.y ?? 0}
				scale={10 + Math.random() * 5}
				rotation={i * (360 / 5) + Math.random() * 20}
			/>
		{/each}

		<line
			x1={centerFlower?.base.x}
			y1={centerFlower?.base.y}
			x2={centerFlower?.top.x}
			y2={centerFlower?.top.y}
			stroke="url(#stem)"
			stroke-width="2"
		/>
		{#each new Array(5) as _, i}
			<Heart
				x={centerFlower?.top.x ?? 0}
				y={centerFlower?.top.y ?? 0}
				scale={15 + Math.random() * 5}
				rotation={i * (360 / 5) + Math.random() * 20}
			/>
		{/each}

		<line
			x1={rightFlower?.base.x}
			y1={rightFlower?.base.y}
			x2={rightFlower?.top.x}
			y2={rightFlower?.top.y}
			stroke="url(#stem)"
			stroke-width="2"
		/>
		{#each new Array(5) as _, i}
			<Heart
				x={rightFlower?.top.x ?? 0}
				y={rightFlower?.top.y ?? 0}
				scale={10 + Math.random() * 5}
				rotation={i * (360 / 5) + Math.random() * 20}
			/>
		{/each}
	</svg>
</div>
