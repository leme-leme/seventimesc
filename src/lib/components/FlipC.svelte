<script lang="ts">
	import { onMount } from 'svelte';

	const words = [
		'Cintha',
		'Creativity',
		'Crafting',
		'Community',
		'Curiosity',
		'Commitment',
		'Courage',
		'Consistency',
	];

	let index = $state(-1);
	let flipping = $state(false);
	let started = $state(false);

	onMount(() => {
		const timeout = setTimeout(() => {
			started = true;
			flipping = true;
			setTimeout(() => {
				index = 0;
				flipping = false;
			}, 400);
		}, 1600);

		const interval = setInterval(() => {
			if (!started) return;
			flipping = true;
			setTimeout(() => {
				index = (index + 1) % words.length;
				flipping = false;
			}, 400);
		}, 3200);

		return () => {
			clearTimeout(timeout);
			clearInterval(interval);
		};
	});

	let suffix = $derived(index >= 0 ? words[index].slice(1) : '');
</script>

<span class="inline-flex items-baseline">
	<span class="the-c" class:has-suffix={index >= 0}>&nbsp;C</span><span class="flip-wrap"><span class="flip-text" class:flip-out={flipping}>{suffix}</span></span>
</span>

<style>
	.the-c {
		color: var(--color-accent);
		transition: letter-spacing 0.6s cubic-bezier(0.16, 1, 0.3, 1);
	}

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
