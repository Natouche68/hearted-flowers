<script lang="ts">
	import '../app.css';
	import { currentColorTheme, colorThemes, blackBackground } from '$lib/colorThemes';

	let { children, data } = $props();

	currentColorTheme.set(colorThemes[data.colorThemeId]);
	blackBackground.set(data.blackBackground);
</script>

<svelte:head>
	<title>Hearted Flowers</title>
</svelte:head>

{@render children()}
