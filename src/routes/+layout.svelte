<script lang="ts">
	import '../app.css';
	import { currentColorTheme, colorThemes, noAnimations } from '$lib/colorThemes';

	let { children, data } = $props();

	currentColorTheme.set(colorThemes[data.colorThemeId]);
	noAnimations.set(data.noAnimations);
</script>

<svelte:head>
	<title>Hearted Flowers</title>
</svelte:head>

{@render children()}
