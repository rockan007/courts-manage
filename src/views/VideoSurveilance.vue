//视频监控
<template>
    <div class="videoes-container d-flex flex-column">
        <div class="videoes-header d-flex">
            <div class="video-selector" v-bind:class='{"active":activeVideoIndex==index}' 
              v-for="(video,index) in videoes" v-bind:key="index" v-on:click="activeVideoIndex=index">
              {{video.name}}
            </div>
        </div>
        <div class="videoes-body  flex-grow-1 d-flex justify-content-center align-items-center">
            <img v-if="activeVideoIndex==0" class="video-image" src="http://wx.dianliangliang.com/sucai/1.2473581c.png" alt="">
            <img v-else-if="activeVideoIndex==1" class="video-image" src="http://wx.dianliangliang.com/sucai/2.fd59d2ea.png" alt="">
            <img v-else-if="activeVideoIndex==2" class="video-image" src="http://wx.dianliangliang.com/sucai/3.0a4812b3.png" alt="">
            <img v-else class="video-image" src="http://wx.dianliangliang.com/sucai/4.d3d25328.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
  name: "video-surveilance",
  data: function() {
    return {
      videoes: [
        { name: "监控1", url: "http://wx.dianliangliang.com/sucai/1.2473581c.png" },
        { name: "监控2", url: "http://wx.dianliangliang.com/sucai/2.fd59d2ea.png" },
        { name: "监控3", url: "http://wx.dianliangliang.com/sucai/3.0a4812b3.png" },
        { name: "监控4", url: "http://wx.dianliangliang.com/sucai/4.d3d25328.png" }
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
  margin: 60px 30px 60px 100px;
}
.video-image {
  height: 100%;
}
</style>
