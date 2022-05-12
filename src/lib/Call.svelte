<script>
  export let phone = "7855554321";
</script>

<a href="tel:{phone}">
  <img src="phone.svg" alt="Call Now!" />
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
    bottom: 1em;
    right: 1em;
    height: 2em;
    width: 10em;
    text-decoration: none;
    color: black;
    background-color: blue;
    justify-content: space-evenly;
    align-items: center;
    padding: .5em .25em;
    border-radius: 2em;
    box-shadow: .4em .35em .25em lightslategrey;
 }
</style>
