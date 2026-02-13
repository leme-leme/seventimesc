<script lang="ts">
	import { onMount } from 'svelte';

	const words = [
		'Cintha',
		'Creativity',
		'Content',
		'Commission',
		'Concept',
		'Craft',
		'Culture',
		'Cinema',
		'Canvas',
		'Code',
	];

	let index = $state(0);
	let flipping = $state(false);

	onMount(() => {
		const interval = setInterval(() => {
			flipping = true;
			setTimeout(() => {
				index = (index + 1) % words.length;
				flipping = false;
			}, 400);
		}, 2800);
		return () => clearInterval(interval);
	});

	let suffix = $derived(words[index].slice(1));
</script>

<span class="inline-flex items-baseline">
	<span class="text-accent">C</span><span class="flip-wrap"><span class="flip-text" class:flip-out={flipping}>{suffix}</span></span>
</span>

<style>
	.flip-wrap {
		display: inline-block;
		overflow: hidden;
		vertical-align: baseline;
	}

	.flip-text {
		display: inline-block;
		transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.4s cubic-bezier(0.76, 0, 0.24, 1);
		transform: translateY(0);
		opacity: 1;
	}

	.flip-out {
		transform: translateY(-110%);
		opacity: 0;
	}
</style>
