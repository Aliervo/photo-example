<script>
  import { base } from "$app/paths";
</script>

<nav>
  <svg viewBox="0 0 2 3" aria-hidden="true">
    <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
  </svg>
  <a href="{base}/about">About</a>
  <a href="{base}/">Gallery</a>
  <a href="{base}/packages">Packages</a>
  <svg viewBox="0 0 2 3" aria-hidden="true">
    <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
  </svg>
</nav>

<style>
  a {
    background-color: lightblue;
    padding: .75em .5em;
    text-decoration: none;
    text-align: center;
    min-width: 4em;
    color: black;
  }

  nav {
    display: flex;
    justify-content: center;
    height: 2em;
    fill: lightblue;
  }

</style>
