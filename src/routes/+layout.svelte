<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col bg-bg text-fg overflow-x-hidden">
	<header class="sticky top-0 bg-bg/90 backdrop-blur-md z-50 border-b border-subtle">
		<nav class="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex items-center justify-between">
			<a href="/" class="text-lg sm:text-xl tracking-[0.15em] uppercase font-light">
				<span class="text-accent font-normal">Seven</span>Times<span class="text-accent font-normal">C</span>
			</a>
			<ul class="flex items-center gap-5 sm:gap-8 text-xs font-medium tracking-[0.2em] uppercase">
				<li><a href="/creators" class="text-muted hover:text-fg transition-colors">Creators</a></li>
				<li><a href="/#work" class="text-muted hover:text-fg transition-colors">Work</a></li>
				<li><a href="/contact" class="text-muted hover:text-fg transition-colors">Contact</a></li>
			</ul>
		</nav>
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
