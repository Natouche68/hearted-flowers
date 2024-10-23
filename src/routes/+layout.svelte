<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Hearted Flowers</title>
</svelte:head>

{@render children()}
