<div class="page" id="top">
  <img src="logo.svg" class= "logo" alt="Company Logo" />

  <h1>Welcome to Example Photography!</h1>

  <div class="quiver">
    <div class="arrow" />
  </div>
</div>

<div class="page" id="bottom">
  <div class="gallery">
   <img class="pic" src="https://picsum.photos/id/110/600">
   <img class="pic" src="https://picsum.photos/id/19/600">
   <img class="pic" src="https://picsum.photos/id/1025/600">
  </div>
</div>

<style>
  .logo {
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

  .gallery {
    width: 80vw;
    overflow-x: scroll;
    display: flex;
    margin: auto;
  }

  .pic {
    padding: 0 .5em;
  }

  .page {
    height: 100vh;
  }

  #top {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
