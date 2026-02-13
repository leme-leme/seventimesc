<script>
	import { creators, projects } from '$lib/data.js';
	import FlipC from '$lib/components/FlipC.svelte';
</script>

<svelte:head>
	<title>SevenTimesC — Creative Collective</title>
	<meta name="description" content="A collective of creators with esoteric and specialized skills. Design, sound, space, code." />
</svelte:head>

<!-- Hero -->
<section class="max-w-7xl mx-auto px-6 py-28 sm:py-44">
	<p class="text-accent text-sm uppercase tracking-[0.3em] font-semibold mb-6">Creative Collective</p>
	<h1 class="text-6xl sm:text-7xl lg:text-[8rem] font-bold leading-[0.9] tracking-tighter max-w-6xl">
		Seven<br />Times<FlipC />
	</h1>
	<p class="mt-10 text-xl sm:text-2xl text-muted max-w-2xl leading-relaxed">
		A collective of creators with esoteric and specialized skills. We design, direct, build, and shape — across disciplines, without borders.
	</p>
</section>

<!-- Creators strip -->
<section class="border-t border-subtle">
	<div class="max-w-7xl mx-auto px-6 py-20 sm:py-28">
		<div class="flex items-baseline justify-between mb-14">
			<h2 class="text-sm uppercase tracking-[0.3em] text-muted font-semibold">The Creators</h2>
			<a href="/creators" class="text-sm text-accent hover:underline underline-offset-4">View all →</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-subtle">
			{#each creators as creator}
				<a href="/creators/{creator.slug}" class="group bg-bg p-8 sm:p-10 hover:bg-surface transition-colors">
					<!-- Avatar placeholder -->
					<div class="w-16 h-16 rounded-full bg-subtle mb-6 overflow-hidden">
						{#if creator.image}
							<img src={creator.image} alt={creator.name} class="w-full h-full object-cover" />
						{/if}
					</div>
					<h3 class="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-accent transition-colors">{creator.name}</h3>
					<p class="text-sm text-accent uppercase tracking-wider font-medium mb-3">{creator.discipline}</p>
					<p class="text-muted text-lg leading-relaxed">{creator.tagline}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Work -->
<section id="work" class="border-t border-subtle">
	<div class="max-w-7xl mx-auto px-6 py-20 sm:py-28">
		<h2 class="text-sm uppercase tracking-[0.3em] text-muted font-semibold mb-14">Selected Work</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each projects as project}
				<div class="group relative aspect-[4/3] bg-surface rounded-sm overflow-hidden cursor-pointer hover:ring-1 hover:ring-accent/30 transition-all">
					{#if project.image}
						<img src={project.image} alt={project.title} class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
					{/if}
					<div class="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
						<p class="text-xs text-accent uppercase tracking-widest font-semibold mb-2">{project.category}</p>
						<h3 class="text-3xl sm:text-4xl font-bold">{project.title}</h3>
						<p class="text-muted text-lg mt-2 max-w-md">{project.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Manifesto strip -->
<section class="border-t border-subtle bg-surface">
	<div class="max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
		<p class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
			We don't fit in one box.<br />
			<span class="text-muted">That's the point.</span>
		</p>
	</div>
</section>
