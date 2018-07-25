<template>
    <div class="meter-container d-flex justify-content-center align-items-center">
        <div class="meter-no">{{meterNo}}</div>
    </div>
</template>
<script>
export default {
  name: "meter-item",
  data: function() {
    return {
      meterNo: "000000"
    };
  },
  mounted: function() {
    this.getRandomMeterNo();
  },
  methods: {
    getRandomMeterNo: function() {
      setTimeout(
        function() {
          this.meterNo = this.getRandomNo(100, 100000);
          this.getRandomMeterNo();
        }.bind(this),
        2000
      );
    },
    getRandomNo: function(minNo, maxNo) {
      let noStr = parseInt(Math.random() * (maxNo - minNo) + minNo).toString();
      let len=noStr.length;
      if (noStr.length < 6) {
        for (let i = 0; i < 6 - len; i++) {
          noStr = "0" + noStr;
        }
      }
      console.log("后：" + noStr);
      return noStr;
    }
  }
};
</script>
<style scoped>
.meter-container {
  min-height: 100px;
  margin: 8px 0;
  background-image: url(../assets/imgs/meter.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.meter-no {
  margin-top: -32px;
  margin-left: 10px;
  font-size: 30px;
  word-spacing: 10px;
  letter-spacing: 13px;
}
</style>
