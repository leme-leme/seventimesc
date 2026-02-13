<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col bg-bg text-fg grain">
	<header class="sticky top-0 bg-bg/90 backdrop-blur-md z-50 border-b border-subtle">
		<nav class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
			<a href="/" class="text-xl tracking-[0.15em] uppercase font-light">
				<span class="text-accent-light font-normal">Seven</span>Times<span class="text-accent-light font-normal">C</span>
			</a>
			<ul class="flex items-center gap-8 text-xs font-medium tracking-[0.2em] uppercase">
				<li><a href="/creators" class="text-muted hover:text-accent-light transition-colors">Creators</a></li>
				<li><a href="/#work" class="text-muted hover:text-accent-light transition-colors">Work</a></li>
				<li><a href="/contact" class="text-muted hover:text-accent-light transition-colors">Contact</a></li>
			</ul>
		</nav>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t border-subtle">
		<div class="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-[0.15em] uppercase text-muted">
			<p>© {new Date().getFullYear()} SevenTimesC</p>
			<div class="flex gap-8">
				<a href="/creators" class="hover:text-accent-light transition-colors">Creators</a>
				<a href="/contact" class="hover:text-accent-light transition-colors">Contact</a>
			</div>
		</div>
	</footer>
</div>
