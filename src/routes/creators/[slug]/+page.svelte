<script>
	import { page } from '$app/state';
	import { getCreator, projects } from '$lib/data.js';

	let slug = $derived(page.params.slug);
	let creator = $derived(getCreator(slug));
	let creatorProjects = $derived(projects.filter((p) => p.creators?.includes(slug)));
</script>

<svelte:head>
	<title>{creator?.name ?? 'Creator'} — SevenTimesC</title>
</svelte:head>

{#if creator}
	<section class="max-w-5xl mx-auto px-6 py-24 sm:py-36">
		<a href="/creators" class="text-xs text-muted hover:text-accent-light transition-colors mb-10 inline-block uppercase tracking-[0.2em]">← All creators</a>

		<div class="flex flex-col sm:flex-row items-start gap-8 mb-16">
			<div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-subtle border border-rose/20 shrink-0 overflow-hidden">
				{#if creator.image}
					<img src={creator.image} alt={creator.name} class="w-full h-full object-cover" />
				{/if}
			</div>

			<div>
				<p class="text-accent text-xs uppercase tracking-[0.4em] font-medium mb-3">{creator.discipline}</p>
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
					<a href={link.url} target="_blank" rel="noopener" class="text-accent hover:text-accent-light underline underline-offset-4 text-sm tracking-wide">
						{link.label} ↗
					</a>
				{/each}
			</div>
		{/if}

		{#if creatorProjects.length}
			<div class="border-t border-subtle pt-16">
				<h2 class="text-xs uppercase tracking-[0.4em] text-muted font-medium mb-10">Projects</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					{#each creatorProjects as project}
						<div class="bg-surface rounded-sm p-8 border border-subtle hover:border-accent/20 transition-all duration-500">
							<p class="text-xs text-accent uppercase tracking-[0.3em] font-medium mb-2">{project.category}</p>
							<h3 class="text-2xl font-extralight mb-2">{project.title}</h3>
							<p class="text-muted text-base font-light">{project.description}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>
{:else}
	<section class="max-w-4xl mx-auto px-6 py-24 text-center">
		<h1 class="text-4xl font-extralight mb-4">Creator not found</h1>
		<a href="/creators" class="text-accent hover:text-accent-light underline text-sm tracking-wide">← Back to creators</a>
	</section>
{/if}
