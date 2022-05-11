<script>
  import Nav from "$lib/Nav.svelte";
  import "../app.css";

  const phone = "7855554321"
</script>

<Nav />

<main>
  <slot />
</main>

<footer>
  Call or Text:<br/>
  <a href="tel:{phone}">{`(${phone.slice(0,3)})${phone.slice(3,6)}-${phone.slice(6)}`}</a>
</footer>

<style>
  footer {
    position: fixed;
    right: 1em;
    bottom: 1em;
    background-color: blue;
  }
</style>
