<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col bg-bg text-fg">
	<header class="sticky top-0 bg-bg/95 backdrop-blur-sm z-50 border-b border-subtle">
		<nav class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
			<a href="/" class="text-2xl font-bold tracking-tight">SevenTimesC</a>
			<ul class="flex items-center gap-8 text-base font-medium">
				<li><a href="/#work" class="text-muted hover:text-fg transition-colors">Work</a></li>
				<li><a href="/about" class="text-muted hover:text-fg transition-colors">About</a></li>
				<li><a href="/contact" class="text-muted hover:text-fg transition-colors">Contact</a></li>
			</ul>
		</nav>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t border-subtle">
		<div class="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between text-base text-muted">
			<p>© {new Date().getFullYear()} SevenTimesC</p>
			<a href="/contact" class="hover:text-fg transition-colors">Get in touch</a>
		</div>
	</footer>
</div>
