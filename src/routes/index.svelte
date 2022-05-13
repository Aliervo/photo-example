<div class="page" id="top">
  <img src="logo.svg" class= "logo" alt="Company Logo" />

  <h1>Welcome to Example Photography!</h1>

  <div class="quiver">
    <div class="arrow" />
  </div>
</div>

<div class="page" id="bottom">
  <div class="gallery">
   <img class="pic" id="first" src="https://picsum.photos/id/110/600">
   <img class="pic" src="https://picsum.photos/id/19/600">
   <img class="pic" src="https://picsum.photos/id/1025/600">
   <img class="pic" src="https://picsum.photos/id/1003/600">
   <img class="pic" src="https://picsum.photos/id/1020/600">
   <img class="pic" src="https://picsum.photos/id/1022/600">
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
    background: darkorange;
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
    background: lightblue;
  }

  .gallery {
    width: 5440px;
    height: 605px;
  }

  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #top {
    justify-content: space-around;
  }

  #bottom {
    width: 80vw;
    margin: auto;
    overflow: hidden;
    justify-content: center;
  }

  #first {
    -webkit-animation: bannermove 30s linear infinite;
    animation: bannermove 30s linear infinite;
  }

  @keyframes "bannermove" {
    from {
      margin-left: 0px;
    }
    to {
      margin-left: -7247px;
    }
  }

  @-webkit-keyframes "bannermove" {
    from {
      margin-left: 0px;
    }
    to {
      margin-left: -7247px;
    }
  }
</style>
