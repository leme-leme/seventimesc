<script>
	import { creators } from '$lib/data.js';
</script>

<svelte:head>
	<title>Crafters — SevenTimesC</title>
</svelte:head>

<section class="max-w-7xl mx-auto px-6 sm:px-8 py-28 sm:py-40">
	<p class="text-accent text-[11px] uppercase tracking-[0.4em] font-medium mb-6">The Community</p>
	<h1 class="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tight mb-6">Crafters</h1>
	<p class="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed font-light mb-20">
		Each one brings something you can't Google. Specialized craft, cultural instinct, and a way of seeing that's entirely their own.
	</p>

	<div class="space-y-0 divide-y divide-subtle">
		{#each creators as creator, i}
			<a href="/creators/{creator.slug}" class="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-7 sm:py-8 hover:pl-2 sm:hover:pl-4 transition-all duration-500">
				<span class="text-[11px] text-muted font-mono w-8 shrink-0 tracking-wider hidden sm:block">{String(i + 1).padStart(2, '0')}</span>

				<div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-subtle border border-warm shrink-0 overflow-hidden">
					{#if creator.image}
						<img src={creator.image} alt={creator.name} class="w-full h-full object-cover" />
					{/if}
				</div>

				<div class="flex-1 min-w-0">
					<h2 class="text-xl sm:text-2xl font-light group-hover:text-accent transition-colors duration-300">{creator.name}</h2>
					<p class="text-muted text-sm mt-1 font-light">{creator.tagline}</p>
				</div>

				<span class="text-[10px] text-accent uppercase tracking-[0.25em] font-medium shrink-0 hidden md:block">{creator.discipline}</span>
			</a>
		{/each}
	</div>
</section>
