<script>
  import Call from "$lib/Call.svelte";
  import Nav from "$lib/Nav.svelte";
  import "../app.css";

  import { assets } from "$app/paths";

  console.log(assets);
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
