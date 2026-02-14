<script>
	import { page } from '$app/state';
	import { getCreator, projects } from '$lib/data.js';

	let slug = $derived(page.params.slug);
	let creator = $derived(getCreator(slug));
	let creatorProjects = $derived(projects.filter((p) => p.creators?.includes(slug)));
</script>

<svelte:head>
	<title>{creator?.name ?? 'Crafter'} — SevenTimesC</title>
</svelte:head>

{#if creator}
	<section class="max-w-5xl mx-auto px-6 sm:px-8 py-28 sm:py-40">
		<a href="/creators" class="text-[11px] text-muted hover:text-fg transition-colors duration-300 mb-12 inline-block uppercase tracking-[0.25em]">&larr; All crafters</a>

		<div class="flex flex-col sm:flex-row items-start gap-8 mb-16">
			<div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-subtle border border-warm shrink-0 overflow-hidden">
				{#if creator.image}
					<img src={creator.image} alt={creator.name} class="w-full h-full object-cover" />
				{/if}
			</div>

			<div>
				<p class="text-accent text-[11px] uppercase tracking-[0.4em] font-medium mb-3">{creator.discipline}</p>
				<h1 class="text-5xl sm:text-6xl font-extralight tracking-tight mb-4">{creator.name}</h1>
				<p class="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl font-light">{creator.tagline}</p>
			</div>
		</div>

		<div class="max-w-3xl mb-20">
			<p class="text-lg sm:text-xl text-fg/80 leading-relaxed font-light">{creator.bio}</p>
		</div>

		{#if creator.links?.length}
			<div class="flex gap-6 mb-20">
				{#each creator.links as link}
					<a href={link.url} target="_blank" rel="noopener" class="text-accent hover:text-fg underline underline-offset-4 text-sm tracking-wide transition-colors duration-300">
						{link.label} &nearr;
					</a>
				{/each}
			</div>
		{/if}

		{#if creatorProjects.length}
			<div class="border-t border-subtle pt-16">
				<h2 class="text-[11px] uppercase tracking-[0.4em] text-muted font-medium mb-10">Projects</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
					{#each creatorProjects as project}
						<div class="bg-surface p-8 border border-subtle/60 hover:border-accent/30 transition-all duration-500">
							<p class="text-[10px] text-accent uppercase tracking-[0.3em] font-medium mb-2">{project.category}</p>
							<h3 class="text-2xl font-extralight mb-2">{project.title}</h3>
							<p class="text-muted text-sm font-light">{project.description}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>
{:else}
	<section class="max-w-4xl mx-auto px-6 sm:px-8 py-28 text-center">
		<h1 class="text-4xl font-extralight mb-4">Crafter not found</h1>
		<a href="/creators" class="text-accent hover:text-fg underline text-sm tracking-wide transition-colors duration-300">&larr; Back to crafters</a>
	</section>
{/if}
