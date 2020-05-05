<script>
	import Chrome from './Chrome.svelte';
	import Content from './Content.svelte';
	import Admin from './Admin.svelte';
	import {showChrome} from './stores';
</script>

<main class={`${$showChrome ? "" : "no-"}browser`}>
	{#if $showChrome}
		<Chrome/>
	{/if}
	<Content/>
	<Admin/>
</main>

<style>
main {
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background: #f9f9fa;
}

.browser {
	border-radius: 8px;
	box-shadow: 0 5px 18px rgba(12, 12, 13, .2), 0 0 0 1px rgba(12, 12, 13, .2);
	height: 90vh;
	margin: 0 auto;
	max-height: 800px;
	max-width: 1200px;
	width: 90%;
}

.no-browser {
	height: 100vh;
	width: 100%;
}
</style>