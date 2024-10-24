<script lang="ts">
	import Heart from "./Heart.svelte";

	type Props = {
		flower?: FlowerObject;
	};
	let { flower }: Props = $props();
</script>

<line
	x1={flower?.base.x}
	y1={flower?.base.y}
	x2={flower?.top.x}
	y2={flower?.top.y}
	stroke="url(#stem)"
	stroke-width="1.5"
/>
{#each new Array(5) as _, i}
	<Heart
		x={flower?.top.x ?? 0}
		y={flower?.top.y ?? 0}
		scale={(flower?.petalScale ?? 0) + Math.random() * 5}
		rotation={i * (360 / 5) + Math.random() * 20}
		fill="petal"
	/>
{/each}
