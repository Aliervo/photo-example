<script>
  import { assets } from "$app/paths";

  export let phone = "7855554321";
</script>

<a href="tel:{phone}">
  <img src="{assets}/phone.svg" alt="Call Now!" />
  Call or Text:<br/>
  {`(${phone.slice(0,3)})${phone.slice(3,6)}-${phone.slice(6)}`}
</a>

<style>
  img {
    height: inherit;
  }

  a {
    display: flex;
    position: fixed;
    bottom: .75em;
    right: .75em;
    height: 2em;
    width: 10em;
    text-decoration: none;
    color: black;
    background-color: royalblue;
    justify-content: space-evenly;
    align-items: center;
    padding: .5em .25em;
    border-radius: 2em;
    box-shadow: .4em .35em .25em lightslategrey;
 }
</style>
