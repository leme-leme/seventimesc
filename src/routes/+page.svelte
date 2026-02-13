<script>
	import { creators, projects } from '$lib/data.js';
	import FlipC from '$lib/components/FlipC.svelte';
</script>

<svelte:head>
	<title>SevenTimesC — Creative Collective</title>
	<meta name="description" content="A collective of creators with esoteric and specialized skills." />
</svelte:head>

<!-- Hero -->
<section class="max-w-7xl mx-auto px-6 py-28 sm:py-44">
	<p class="text-accent text-xs uppercase tracking-[0.4em] font-medium mb-8">Creative Collective</p>
	<h1 class="text-5xl sm:text-7xl lg:text-[7rem] font-extralight leading-[0.9] tracking-tighter">
		Seven<br /><span class="whitespace-nowrap">Times<FlipC /></span>
	</h1>
	<p class="mt-10 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed font-light">
		A collective of creators with esoteric and specialized skills. We design, direct, build, and shape — across disciplines, without borders.
	</p>
</section>

<!-- Divider -->
<div class="max-w-7xl mx-auto px-6">
	<div class="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
</div>

<!-- Creators strip -->
<section>
	<div class="max-w-7xl mx-auto px-6 py-20 sm:py-28">
		<div class="flex items-baseline justify-between mb-14">
			<h2 class="text-xs uppercase tracking-[0.4em] text-muted font-medium">The Creators</h2>
			<a href="/creators" class="text-xs text-accent tracking-[0.2em] uppercase hover:text-fg transition-colors">View all →</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-subtle">
			{#each creators as creator}
				<a href="/creators/{creator.slug}" class="group bg-bg p-8 sm:p-10 hover:bg-surface transition-colors duration-500">
					<div class="w-16 h-16 rounded-full bg-subtle border border-rose/20 mb-6 overflow-hidden">
						{#if creator.image}
							<img src={creator.image} alt={creator.name} class="w-full h-full object-cover" />
						{/if}
					</div>
					<h3 class="text-2xl sm:text-3xl font-extralight mb-2 group-hover:text-fg transition-colors duration-500">{creator.name}</h3>
					<p class="text-xs text-accent uppercase tracking-[0.3em] font-medium mb-3">{creator.discipline}</p>
					<p class="text-muted text-base leading-relaxed font-light">{creator.tagline}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Divider -->
<div class="max-w-7xl mx-auto px-6">
	<div class="h-px bg-gradient-to-r from-transparent via-blush/20 to-transparent"></div>
</div>

<!-- Work -->
<section id="work">
	<div class="max-w-7xl mx-auto px-6 py-20 sm:py-28">
		<h2 class="text-xs uppercase tracking-[0.4em] text-muted font-medium mb-14">Selected Work</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each projects as project}
				<div class="group relative aspect-[4/3] bg-surface rounded-sm overflow-hidden cursor-pointer border border-subtle hover:border-accent/20 transition-all duration-500">
					{#if project.image}
						<img src={project.image} alt={project.title} class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
					{/if}
					<div class="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
						<p class="text-xs text-accent uppercase tracking-[0.3em] font-medium mb-2">{project.category}</p>
						<h3 class="text-3xl sm:text-4xl font-extralight">{project.title}</h3>
						<p class="text-muted text-base mt-2 max-w-md font-light">{project.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Manifesto -->
<section class="bg-surface border-t border-subtle">
	<div class="max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
		<p class="text-3xl sm:text-4xl lg:text-5xl font-extralight leading-snug tracking-tight">
			We don't fit in one box.<br />
			<span class="text-blush">That's the point.</span>
		</p>
	</div>
</section>
