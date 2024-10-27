<script lang="ts">
	import '../app.css';
	import { currentColorTheme, colorThemes } from '$lib/colorThemes';

	let { children, data } = $props();

	currentColorTheme.set(colorThemes[data.colorThemeId]);
</script>

<svelte:head>
	<title>Hearted Flowers</title>
</svelte:head>

{@render children()}
