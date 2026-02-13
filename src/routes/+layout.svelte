<script>
	import '../app.css';

	let { children } = $props();
	let mobileOpen = $state(false);
</script>

<div class="min-h-screen flex flex-col bg-bg text-fg overflow-x-hidden">
	<header class="sticky top-0 bg-bg/90 backdrop-blur-md z-50 border-b border-subtle">
		<nav class="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex items-center justify-between">
			<a href="/" class="text-lg sm:text-xl tracking-[0.15em] uppercase font-light">
				<span class="text-accent font-normal">Seven</span>Times<span class="text-accent font-normal">C</span>
			</a>

			<!-- Desktop -->
			<ul class="hidden sm:flex items-center gap-8 text-xs font-medium tracking-[0.2em] uppercase">
				<li><a href="/creators" class="text-muted hover:text-fg transition-colors">Creators</a></li>
				<li><a href="/#work" class="text-muted hover:text-fg transition-colors">Work</a></li>
				<li><a href="/contact" class="text-muted hover:text-fg transition-colors">Contact</a></li>
			</ul>

			<!-- Hamburger -->
			<button class="sm:hidden w-8 h-8 flex flex-col items-end justify-center gap-[5px]" onclick={() => mobileOpen = !mobileOpen} aria-label="Menu">
				<span class="block h-[1.5px] bg-fg transition-all duration-300" class:w-6={!mobileOpen} class:w-5={mobileOpen} class:rotate-45={mobileOpen} class:translate-y-[6.5px]={mobileOpen}></span>
				<span class="block w-4 h-[1.5px] bg-fg transition-all duration-300" class:opacity-0={mobileOpen}></span>
				<span class="block h-[1.5px] bg-fg transition-all duration-300" class:w-6={!mobileOpen} class:w-5={mobileOpen} class:-rotate-45={mobileOpen} class:-translate-y-[6.5px]={mobileOpen}></span>
			</button>
		</nav>

		<!-- Mobile menu -->
		{#if mobileOpen}
			<div class="sm:hidden border-t border-subtle bg-bg px-5 py-8 animate-slide-down">
				<ul class="flex flex-col gap-6 text-lg font-light tracking-[0.1em]">
					<li><a href="/creators" onclick={() => mobileOpen = false} class="block text-fg hover:text-accent transition-colors">Creators</a></li>
					<li><a href="/#work" onclick={() => mobileOpen = false} class="block text-fg hover:text-accent transition-colors">Work</a></li>
					<li><a href="/contact" onclick={() => mobileOpen = false} class="block text-fg hover:text-accent transition-colors">Contact</a></li>
				</ul>
			</div>
		{/if}
	</header>

	<main class="flex-1 overflow-x-hidden">
		{@render children()}
	</main>

	<footer class="border-t border-subtle">
		<div class="max-w-7xl mx-auto px-5 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-[0.15em] uppercase text-muted">
			<p>© {new Date().getFullYear()} SevenTimesC</p>
			<div class="flex gap-8">
				<a href="/creators" class="hover:text-fg transition-colors">Creators</a>
				<a href="/contact" class="hover:text-fg transition-colors">Contact</a>
			</div>
		</div>
	</footer>
</div>

<style>
	@keyframes slide-down {
		from { opacity: 0; transform: translateY(-8px); }
		to { opacity: 1; transform: translateY(0); }
	}
	.animate-slide-down {
		animation: slide-down 0.25s ease-out;
	}
</style>
