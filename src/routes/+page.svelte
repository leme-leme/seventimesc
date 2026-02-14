<script>
	import { creators, projects } from '$lib/data.js';
	import FlipC from '$lib/components/FlipC.svelte';
</script>

<svelte:head>
	<title>SevenTimesC — Creative House</title>
	<meta name="description" content="Crafting character since day one. A creative house where culture, curiosity and collaboration shape everything we build." />
</svelte:head>

<!-- Hero -->
<section class="max-w-7xl mx-auto px-6 sm:px-8 py-32 sm:py-48">
	<p class="text-accent text-[11px] uppercase tracking-[0.4em] font-medium mb-10">Creative House</p>
	<h1 class="text-5xl sm:text-7xl lg:text-[7rem] font-extralight leading-[0.9] tracking-tighter">
		Seven<br /><span class="whitespace-nowrap">Times<FlipC /></span>
	</h1>
	<p class="mt-12 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed font-light">
		Crafting character since day one, Seven Times C is a creative house where culture, curiosity and collaboration shape everything we build. Step into our world, a place where concepts become communities and spaces turn into conversations.
	</p>
</section>

<!-- Divider -->
<div class="max-w-7xl mx-auto px-6 sm:px-8">
	<div class="h-px bg-subtle"></div>
</div>

<!-- Crafters -->
<section>
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
		<div class="flex items-baseline justify-between mb-16">
			<h2 class="text-[11px] uppercase tracking-[0.4em] text-muted font-medium">The Crafters</h2>
			<a href="/creators" class="text-[11px] text-accent tracking-[0.25em] uppercase hover:text-fg transition-colors duration-300">View all &rarr;</a>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-subtle">
			{#each creators.slice(0, 4) as creator}
				<a href="/creators/{creator.slug}" class="group bg-bg p-6 sm:p-8 hover:bg-surface transition-colors duration-500">
					<div class="w-12 h-12 rounded-full bg-subtle border border-warm mb-5 overflow-hidden">
						{#if creator.image}
							<img src={creator.image} alt={creator.name} class="w-full h-full object-cover" />
						{/if}
					</div>
					<h3 class="text-lg sm:text-xl font-light mb-1 group-hover:text-accent transition-colors duration-300">{creator.name}</h3>
					<p class="text-[10px] text-accent uppercase tracking-[0.3em] font-medium mb-2">{creator.discipline}</p>
					<p class="text-muted text-sm leading-relaxed font-light">{creator.tagline}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Divider -->
<div class="max-w-7xl mx-auto px-6 sm:px-8">
	<div class="h-px bg-subtle"></div>
</div>

<!-- Work -->
<section id="work">
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
		<h2 class="text-[11px] uppercase tracking-[0.4em] text-muted font-medium mb-4">Curating the Clash</h2>
		<p class="text-muted text-base leading-relaxed font-light max-w-2xl mb-16">
			Through craft, context, content, contrast and community, we bring worlds together, let differences collide and push disciplines into unexpected dialogue. It's where tension becomes power, and bold ideas take shape.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
			{#each projects as project}
				<div class="group relative aspect-[4/3] bg-surface overflow-hidden cursor-pointer border border-subtle/60 hover:border-accent/30 transition-all duration-500">
					{#if project.image}
						<img src={project.image} alt={project.title} class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
					{/if}
					<div class="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
						<p class="text-[10px] text-accent uppercase tracking-[0.3em] font-medium mb-2">{project.category}</p>
						<h3 class="text-2xl sm:text-3xl font-extralight">{project.title}</h3>
						<p class="text-muted text-sm mt-2 max-w-md font-light">{project.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Connect -->
<section class="bg-surface border-t border-subtle/60">
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
		<div class="max-w-3xl mx-auto text-center">
			<p class="text-[11px] text-accent uppercase tracking-[0.4em] font-medium mb-8">Connect</p>
			<p class="text-muted text-base sm:text-lg leading-relaxed font-light mb-10">
				Connect with the craftsmanship behind every project and explore the carefully curated objects, materials and ideas that define our universe.
			</p>
		</div>
	</div>
</section>

<!-- Manifesto -->
<section class="border-t border-subtle/60">
	<div class="max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
		<p class="text-3xl sm:text-4xl lg:text-5xl font-extralight leading-snug tracking-tight">
			The best things in life<br />
			<span class="text-blush">start with a C.</span>
		</p>
		<p class="mt-10 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed font-light">
			Join us in our ongoing quest to create experiences that challenge convention, celebrate culture and carry a story worth remembering.
		</p>
	</div>
</section>
