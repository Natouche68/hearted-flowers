<script lang="ts">
	import { noAnimations } from "./colorThemes";

	type Props = {
		x: number;
		y: number;
		scale: number;
		rotation: number;
		fill: string;
		originOffset?: number;
		transformOffset?: number;
		apparitionDelay?: number;
	};
	let {
		x,
		y,
		scale,
		rotation,
		fill,
		originOffset = 97,
		transformOffset = 95,
		apparitionDelay = 2,
	}: Props = $props();
</script>

<g
	transform-origin="50% {originOffset}%"
	transform="translate({x - 50} {y - transformOffset}) scale({scale /
		100}) rotate({rotation})"
>
	<path
		d="M50 28.3902V23.5923ZM50 24.8415C50 11.1195 61.1905 0 75 0C88.8095 0 100 11.2709 100 24.9929C100 32.3743 96.7286 39.4482 91.0476 44.2131L64.1095 66.8117C59.689 70.5206 56.1363 75.1434 53.6994 80.3574C51.2624 85.5714 49.9999 91.2511 50 97C50.0001 91.2511 48.7376 85.5714 46.3006 80.3574C43.8637 75.1434 40.311 70.5206 35.8905 66.8117L8.95238 44.2131C6.14698 41.8459 3.89323 38.9008 2.34738 35.582C0.801526 32.2632 0.000557215 28.6499 0 24.9929C0 11.2709 11.1905 0 25 0C38.8095 0 50 11.1195 50 24.8415Z"
		fill="url(#{fill})"
		transform-origin="50 97"
		class={$noAnimations ? "" : "heart"}
		style="--rotation-duration: {4 +
			Math.random() * 6}s; --apparition-delay: {apparitionDelay}s;"
	/>
</g>

<style>
	.heart {
		animation:
			heart-appearing calc(var(--rotation-duration) / 2) var(--apparition-delay)
				ease backwards,
			heart-rotating var(--rotation-duration)
				calc(var(--rotation-duration) / 2 + var(--apparition-delay)) ease
				infinite;
	}

	@keyframes heart-appearing {
		from {
			transform: rotate(0deg) scale(0);
		}

		to {
			transform: rotate(-3deg) scale(1);
		}
	}

	@keyframes heart-rotating {
		0%,
		100% {
			transform: rotate(-3deg);
		}

		50% {
			transform: rotate(3deg);
		}
	}
</style>
