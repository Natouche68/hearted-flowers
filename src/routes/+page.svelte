<script lang="ts">
	import { onMount } from "svelte";

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
	<svg viewBox="0 0 100 100" class="m-6 object-contain max-w-xl border-2">
		<line
			x1={leftFlower?.base.x}
			y1={leftFlower?.base.y}
			x2={leftFlower?.top.x}
			y2={leftFlower?.top.y}
			stroke="#37d278"
			stroke-width="2"
		/>

		<line
			x1={centerFlower?.base.x}
			y1={centerFlower?.base.y}
			x2={centerFlower?.top.x}
			y2={centerFlower?.top.y}
			stroke="#37d278"
			stroke-width="2"
		/>

		<line
			x1={rightFlower?.base.x}
			y1={rightFlower?.base.y}
			x2={rightFlower?.top.x}
			y2={rightFlower?.top.y}
			stroke="#37d278"
			stroke-width="2"
		/>
	</svg>
</div>
