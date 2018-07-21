<template>
    <div class="analog-line-container d-flex flex-column">
        <div class="analog-header">
          模拟电路
        </div>
        <div class="analog-body d-flex-1">
            <img src="../assets/imgs/analog-line.png" class="analog-image" alt="">
            <dynamic-no  v-for="no in 6" v-bind:key="no" v-bind:class="'dynamic-bottom-'+no" v-bind:dynamicItem="getRandomBottom()"></dynamic-no>
        </div>
    </div>
</template>
<script>
import DynamicNo from "../components/DynamicNo";
export default {
  name: "analog-line",
  components: {
    "dynamic-no": DynamicNo
  },
  data: function() {
    return {
    };
  },
  watch: {
  },
  methods: {
    getRandomBottom: function() {
      let dianYa = this.getRandomNo(220, 235);
      let dianLiu = this.getRandomNo(1, 110);
      console.log(dianYa);
      return {
        电压: dianYa,
        电流: dianLiu 
      };
    },
    makeNoDynamic: function() {
      return setTimeout(this.getRandomBottom, 1000);
    },
    getRandomNo: function(minNo, maxNo) {
      return (Math.random() * (maxNo - minNo) + minNo).toFixed(2);
    }
  }
};
</script>
<style scoped>
.analog-line-container {
  color: white;
}
.analog-header {
  font-size: 24px;
}
.analog-body {
  position: relative;
  margin: 100px 40px 70px 110px;
}
.analog-image {
  width: 90%;
}
.dynamic-bottom-1 {
  left: 330px;
  top: 565px;
}
.dynamic-bottom-2 {
  left: 450px;
  top: 565px;
}
.dynamic-bottom-3 {
  left: 550px;
  top: 565px;
}
.dynamic-bottom-4 {
  left: 670px;
  top: 565px;
}
.dynamic-bottom-5 {
  left: 750px;
  top: 565px;
}
.dynamic-bottom-6 {
  left: 850px;
  top: 565px;
}
</style>
