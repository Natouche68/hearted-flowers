<script lang="ts">
	import {
		currentColorTheme,
		colorThemes,
		blackBackground,
	} from "$lib/colorThemes";
	import { fade } from "svelte/transition";

	function getColorThemeIndex() {
		let colorThemeIndex = 0;

		colorThemes.forEach((colorTheme, i) => {
			if (
				$currentColorTheme.background === colorTheme.background &&
				$currentColorTheme.leaf === colorTheme.leaf
			) {
				colorThemeIndex = i;
			}
		});

		return colorThemeIndex;
	}
</script>

<div
	class="min-h-dvh p-4 transition"
	style="background: {$blackBackground
		? '#000'
		: $currentColorTheme.background[0]};"
>
	<h1
		class="my-4 pb-2 font-serif font-bold text-4xl border-b-2 transition"
		style="color: {$currentColorTheme.leaf}; border-color: {$currentColorTheme.leaf};"
	>
		Customize your Hearted Flowers
	</h1>
	<div class="flex flex-row justify-start items-center gap-2">
		<input
			type="checkbox"
			id="blackBackground"
			bind:checked={$blackBackground}
			class="size-6 transition"
			style="accent-color: {$currentColorTheme.leaf};"
		/>
		<label
			for="blackBackground"
			class="font-serif text-xl trasnition"
			style="color: {$currentColorTheme.leaf};"
		>
			Black background
		</label>
	</div>
	<div class="my-8 grid grid-cols-2 gap-4">
		{#each colorThemes as colorTheme, i}
			<button
				class="relative flex flex-col justify-center items-center text-2xl text-transparent"
				onclick={() => {
					currentColorTheme.set(colorThemes[i]);
				}}
			>
				<div class="w-full flex flex-row justify-center items-center">
					<div class="w-full" style="background: {colorTheme.background[0]};">
						{i}
					</div>
					<div class="w-full" style="background: {colorTheme.leaf};">{i}</div>
				</div>
				<div class="w-full flex flex-row justify-center items-center">
					<div class="w-full" style="background: {colorTheme.petals[0]};">
						{i}
					</div>
					<div class="w-full" style="background: {colorTheme.petals[1]};">
						{i}
					</div>
					<div class="w-full" style="background: {colorTheme.petals[2]};">
						{i}
					</div>
					<div class="w-full" style="background: {colorTheme.petals[3]};">
						{i}
					</div>
				</div>

				{#if i === getColorThemeIndex()}
					<div
						class="absolute inset-0 flex justify-center items-center font-serif text-xl bg-black/50 text-white"
						transition:fade={{ duration: 200 }}
					>
						Selected
					</div>
				{/if}
			</button>
		{/each}
	</div>
	<a
		href="/?colorTheme={getColorThemeIndex()}{$blackBackground
			? '&blackBackground'
			: ''}"
		class="fixed bottom-4 left-4 right-4 p-4 font-serif font-bold text-xl text-center transition"
		style="background: {$currentColorTheme.leaf}; color: {$currentColorTheme
			.background[0]};"
	>
		See the result
	</a>
</div>
