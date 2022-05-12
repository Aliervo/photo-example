<script>
  import Call from "$lib/Call.svelte";
  import Nav from "$lib/Nav.svelte";
  import "../app.css";
</script>

<Nav />

<main>
  <slot />
</main>

<footer>
  <Call />
</footer>

<style>
</style>
