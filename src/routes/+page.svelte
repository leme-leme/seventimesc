<script>
	import { creators, projects } from '$lib/data.js';
	import FlipC from '$lib/components/FlipC.svelte';
	import CSymbol from '$lib/components/CSymbol.svelte';
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

<!-- Services — 4 cards with rotated C -->
<section>
	<div class="max-w-7xl mx-auto px-6 sm:px-8 pb-4">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
			{#each [
				{ label: 'creative direction', rotate: -25 },
				{ label: 'content creation', rotate: 135 },
				{ label: 'collaborations', rotate: 210 },
				{ label: 'community', rotate: 70 },
			] as card}
				<div class="card-service relative bg-surface overflow-hidden aspect-square flex flex-col justify-end p-6 sm:p-8">
					<div class="absolute inset-0 flex items-center justify-center">
						<CSymbol rotation={card.rotate} size="clamp(10rem, 22vw, 18rem)" color="var(--color-accent)" opacity={0.10} />
					</div>
					<p class="relative z-10 text-[11px] sm:text-xs text-fg/70 uppercase tracking-[0.25em] font-medium">{card.label}</p>
				</div>
			{/each}
		</div>
	</div>
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
			Through craft, context, content, contrast and community, we bring worlds together, let differences collide and push disciplines into unexpected dialogue.
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

<!-- Dark manifesto — "The best things in life start with a C" -->
<section class="bg-dark text-white relative overflow-hidden">
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-28 sm:py-40 relative z-10">
		<p class="manifesto-text text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight max-w-3xl">
			The best things in life<br />start with a
		</p>
	</div>
	<!-- Large C bleeding off the right edge -->
	<div class="absolute right-[-6%] sm:right-[-3%] top-1/2 -translate-y-1/2 pointer-events-none">
		<span class="giant-c block text-[28rem] sm:text-[36rem] lg:text-[44rem] leading-none text-white/[0.06]" aria-hidden="true">C</span>
	</div>
</section>

<!-- Curating the clash statement -->
<section class="bg-surface">
	<div class="max-w-5xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
		<p class="clash-statement text-2xl sm:text-4xl lg:text-5xl font-extralight leading-snug tracking-tight text-fg">
			We believe in<br /><span class="text-accent">curating the clash.</span>
		</p>
		<p class="mt-10 text-base sm:text-lg text-muted max-w-2xl leading-relaxed font-light">
			Connect with the craftsmanship behind every project and explore the carefully curated objects, materials and ideas that define our universe.
		</p>
	</div>
</section>

<!-- Bold seventimes C branding band -->
<section class="bg-dark overflow-hidden">
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
		<div class="flex items-baseline gap-0">
			<span class="brand-text text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-white uppercase leading-none">seventimes</span>
			<span class="brand-c text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-accent leading-none">C</span>
			<span class="brand-line flex-1 h-[2px] bg-accent ml-3 sm:ml-5 self-center translate-y-[0.1em]"></span>
		</div>
	</div>
</section>

<style>
	.card-service {
		transition: background-color 0.5s ease;
	}
	.card-service:hover {
		background-color: var(--color-subtle);
	}

	.manifesto-text {
		font-family: var(--font-serif);
		font-style: italic;
	}

	.giant-c {
		font-family: var(--font-serif);
		font-style: italic;
		font-weight: 300;
	}

	.clash-statement {
		font-family: var(--font-sans);
	}

	.brand-text,
	.brand-c {
		font-family: var(--font-sans);
	}
</style>
