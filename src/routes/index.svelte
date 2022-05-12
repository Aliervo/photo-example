<img src="logo.svg" alt="Company Logo" />

<h1>Welcome to Example Photography!</h1>

<div class="quiver">
  <div class="arrow" />
</div>

<!-- TODO Add gallery below -->

<style>
  img {
    display: block;
    width: 35vh;
    margin: 0 auto;
  }

  .quiver{
    width: 5em;
    margin: 0 auto;
  }

  .arrow {
    background: #ff0000;
    display: block;
    float: left;
    width: 3em;
    height: 3em;
    margin: 2em;
    -webkit-transform: rotate(225deg);
    -moz-transform: rotate(225deg);
    transform: rotate(225deg);
    -o-transform: rotate(225deg);
    position: relative;
    right: 1em;
  }

  .arrow::after {
    content: '';
    position: absolute;
    left: 1em;
    top: 1em;
    width: 3em;
    height: 3em;
    background: #fff;
  }
</style>
