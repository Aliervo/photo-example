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
  <img src="phone.svg" alt="Phone icon" />
  Call or Text:<br/>
  <a href="tel:{phone}">{`(${phone.slice(0,3)})${phone.slice(3,6)}-${phone.slice(6)}`}</a>
</footer>

<style>
  footer {
    position: fixed;
    right: 1em;
    bottom: 1em;
    background-color: blue;
    display: flex;
    align-items: center;
    width: 13em;
    height: 3em;
  }

  img {
    height: inherit;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>
