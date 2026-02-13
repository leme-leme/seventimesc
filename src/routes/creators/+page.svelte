<script>
	import { creators } from '$lib/data.js';
</script>

<svelte:head>
	<title>Creators — SevenTimesC</title>
	<meta name="description" content="The creators of SevenTimesC. Esoteric skills, specialized craft." />
</svelte:head>

<section class="max-w-7xl mx-auto px-6 py-24 sm:py-36">
	<p class="text-accent text-sm uppercase tracking-[0.3em] font-semibold mb-6">The Collective</p>
	<h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">Creators</h1>
	<p class="text-xl sm:text-2xl text-muted max-w-2xl leading-relaxed mb-20">
		Each one brings something you can't Google. Specialized skills, esoteric knowledge, and a way of seeing that's entirely their own.
	</p>

	<div class="space-y-0 divide-y divide-subtle">
		{#each creators as creator, i}
			<a href="/creators/{creator.slug}" class="group flex flex-col sm:flex-row items-start sm:items-center gap-6 py-10 hover:pl-4 transition-all">
				<!-- Number -->
				<span class="text-sm text-muted font-mono w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>

				<!-- Avatar -->
				<div class="w-14 h-14 rounded-full bg-subtle shrink-0 overflow-hidden">
					{#if creator.image}
						<img src={creator.image} alt={creator.name} class="w-full h-full object-cover" />
					{/if}
				</div>

				<!-- Info -->
				<div class="flex-1 min-w-0">
					<h2 class="text-2xl sm:text-3xl font-bold group-hover:text-accent transition-colors">{creator.name}</h2>
					<p class="text-muted text-lg mt-1">{creator.tagline}</p>
				</div>

				<!-- Discipline tag -->
				<span class="text-xs text-accent uppercase tracking-widest font-semibold shrink-0">{creator.discipline}</span>
			</a>
		{/each}
	</div>
</section>
