//视频监控
<template>
    <div class="videoes-container d-flex flex-column">
        <div class="videoes-header d-flex">
            <div class="video-selector" v-bind:class='{"active":activeVideoIndex==index}' 
              v-for="(video,index) in videoes" v-bind:key="index" v-on:click="activeVideoIndex=index">
              {{video.name}}
            </div>
        </div>
        <div class="videoes-body flex-grow-1">
            <img v-if="activeVideoIndex==0" class="video-image" src="../assets/imgs/1.png" alt="">
            <img v-else-if="activeVideoIndex==1" class="video-image" src="../assets/imgs/2.png" alt="">
            <img v-else-if="activeVideoIndex==2" class="video-image" src="../assets/imgs/3.png" alt="">
            <img v-else class="video-image" src="../assets/imgs/4.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
  name: "video-surveilance",
  data: function() {
    return {
      videoes: [
        { name: "监控1", url: "../assets/imgs/1.png" },
        { name: "监控2", url: "../assets/imgs/2.png" },
        { name: "监控3", url: "../assets/imgs/3.png" },
        { name: "监控4", url: "../assets/imgs/4.png" }
      ],
      activeVideoIndex: 0
    };
  },
  watch: {

  },
  methods: {}
};
</script>
<style scoped>
.videoes-container {
  color: white;
}
.video-selector {
  text-align: center;
  width: 200px;
  height: 50px;
  padding-top: 16px;
  background-image: url(../assets/imgs/horizonal-unselect.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.video-selector.active {
  background-image: url(../assets/imgs/horizonal-selected.png);
}
.videoes-body {
  margin: 100px 40px 70px 110px;
}
.video-image {
  height: 100%;
}
</style>
