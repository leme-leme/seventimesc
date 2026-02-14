<script lang="ts">
	interface Props {
		rotation?: number;
		size?: string;
		color?: string;
		opacity?: number;
	}

	let { rotation = 0, size = '12rem', color = 'currentColor', opacity = 0.12 }: Props = $props();
</script>

<span
	class="c-symbol select-none leading-none block"
	style="
		font-size: {size};
		color: {color};
		opacity: {opacity};
		transform: rotate({rotation}deg);
	"
	aria-hidden="true"
>C</span>

<style>
	.c-symbol {
		font-family: 'Georgia', 'Times New Roman', serif;
		font-weight: 300;
		font-style: italic;
		line-height: 0.85;
		display: block;
	}
</style>
