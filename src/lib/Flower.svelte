<script lang="ts">
	import Heart from "./Heart.svelte";

	type Props = {
		flower?: FlowerObject;
	};
	let { flower }: Props = $props();

	let angle = $derived(
		Math.atan2(
			(flower?.top.y ?? 0) - (flower?.base.y ?? 0),
			(flower?.top.x ?? 0) - (flower?.base.x ?? 0)
		)
	);
	let stemLength = $derived(
		Math.sqrt(
			Math.pow((flower?.top.x ?? 0) - (flower?.base.x ?? 0), 2) +
				Math.pow((flower?.top.y ?? 0) - (flower?.base.y ?? 0), 2)
		)
	);
</script>

<g
	transform-origin="{flower?.base.x ?? 0} {flower?.base.y ?? 0}"
	class="flower"
	style="--rotation-duration: {8 + Math.random() * 4}s;"
>
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
			fill="petal-{Math.floor(Math.random() * 4)}"
			originOffset={90}
			transformOffset={90}
			apparitionDelay={2 + Math.random()}
		/>
	{/each}

	{#each new Array(3) as _, i}
		<Heart
			x={(stemLength * 0.2 * (i + 1) + Math.random() * 5) * Math.cos(angle) +
				(flower?.base.x ?? 0)}
			y={(stemLength * 0.2 * (i + 1) + Math.random() * 5) * Math.sin(angle) +
				(flower?.base.y ?? 0)}
			scale={(flower?.leafScale ?? 0) + Math.random() * 3}
			rotation={angle * (180 / Math.PI) + 45 + Math.random() * 20}
			fill="leaf"
			apparitionDelay={1 + Math.random() * 2}
		/>
		<Heart
			x={(stemLength * 0.2 * (i + 1) + Math.random() * 5) * Math.cos(angle) +
				(flower?.base.x ?? 0)}
			y={(stemLength * 0.2 * (i + 1) + Math.random() * 5) * Math.sin(angle) +
				(flower?.base.y ?? 0)}
			scale={(flower?.leafScale ?? 0) + Math.random() * 3}
			rotation={angle * (180 / Math.PI) + 125 + Math.random() * 20}
			fill="leaf"
			apparitionDelay={1 + Math.random() * 2}
		/>
	{/each}
</g>

<style>
	.flower {
		animation:
			flower-appearing calc(var(--rotation-duration) / 2) 0.4s ease,
			flower-rotating var(--rotation-duration)
				calc(var(--rotation-duration) / 2 + 0.4s) ease infinite;
	}

	@keyframes flower-appearing {
		from {
			transform: rotate(0deg) scale(0);
		}

		to {
			transform: rotate(-1deg) scale(1);
		}
	}

	@keyframes flower-rotating {
		0%,
		100% {
			transform: rotate(-1deg);
		}

		50% {
			transform: rotate(1deg);
		}
	}
</style>
