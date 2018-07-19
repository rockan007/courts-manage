<template>
  <div id="app" class="app-container d-flex flex-column">
    <img src="./assets/imgs/back-header.png" alt="" srcset="">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view class="app-body flex-grow-1"/>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-container {
  height: 100%;
}
.app-header {
  background-image: url(./assets/imgs/back-header.png);
}
.app-body {
  margin-top: -60px;
  background-image: url(./assets/imgs/back-body.png);
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
