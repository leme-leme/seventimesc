<svelte:head>
	<title>SevenTimesC — Creative Studio</title>
	<meta name="description" content="SevenTimesC is a creative studio specializing in branding, digital design, and visual identity." />
</svelte:head>

<!-- Hero -->
<section class="max-w-7xl mx-auto px-6 py-24 sm:py-40">
	<h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-4xl">
		Creative direction<br />& digital design
	</h1>
	<p class="mt-8 text-xl sm:text-2xl text-muted max-w-2xl leading-relaxed">
		Branding, visual identity, and digital experiences. We craft work that stands out and sticks around.
	</p>
</section>

<!-- Work grid -->
<section id="work" class="max-w-7xl mx-auto px-6 pb-24 sm:pb-40">
	<h2 class="text-sm uppercase tracking-widest text-muted font-semibold mb-12">Selected work</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<!-- Placeholder project cards — Cintha will fill these with her visuals -->
		{#each [
			{ title: 'Project One', category: 'Branding' },
			{ title: 'Project Two', category: 'Digital Design' },
			{ title: 'Project Three', category: 'Visual Identity' },
			{ title: 'Project Four', category: 'Art Direction' },
		] as project}
			<div class="group relative aspect-[4/3] bg-subtle rounded-lg overflow-hidden cursor-pointer">
				<div class="absolute inset-0 flex items-end p-8">
					<div>
						<h3 class="text-2xl sm:text-3xl font-bold">{project.title}</h3>
						<p class="text-muted text-lg mt-1">{project.category}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
