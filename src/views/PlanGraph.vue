<template>
    <div class="plan-container d-flex flex-column align-items-center position-relative">
        <div class="plan-header">平面图</div>
        <div class="plan-body flex-grow-1">
            <img src="http://wx.dianliangliang.com/sucai/plan-graph.74a0cb6d.png" alt="">
            <img class="marginal-data position-absolute" src="http://wx.dianliangliang.com/sucai/marginal-data.png" alt="">
            <random-back-no v-for="no in 68" v-bind:key="no" v-bind:class="'no-item-'+no" v-bind:hasColor="0">
            </random-back-no>
        </div>
    </div>
</template>
<script>
import randomBakNo from "../components/random-backNo";
export default {
  name: "plan-graph",
  components: {
    "random-back-no": randomBakNo
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.plan-header {
  font-size: 24px;
  color: white;
}
.plan-body {
  margin: 60px 30px 60px 100px;
}
.marginal-data {
  width: 270px;
  left: 30px;
  bottom: 20px;
}
.no-item-1 {
  right: 1368px;
  top: 190px;
}
.no-item-2 {
  right: 1368px;
  top: 270px;
}
.no-item-3 {
  left: 190px;
  top: 190px;
}
.no-item-4 {
  left: 190px;
  top: 270px;
}
.no-item-5 {
  left: 270px;
  top: 190px;
}
.no-item-6 {
  left: 270px;
  top: 270px;
}
.no-item-7 {
  left: 325px;
  top: 190px;
}
.no-item-8 {
  left: 325px;
  top: 270px;
}
.no-item-9 {
  left: 396px;
  top: 190px;
}
.no-item-10 {
  left: 396px;
  top: 270px;
}
.no-item-11 {
  left: 450px;
  top: 190px;
}
.no-item-12 {
  left: 450px;
  top: 270px;
}
.no-item-13 {
  left: 520px;
  top: 190px;
}
.no-item-14 {
  left: 520px;
  top: 270px;
}
.no-item-15 {
  left: 574px;
  top: 190px;
}
.no-item-16 {
  left: 574px;
  top: 270px;
}
.no-item-17 {
  left: 642px;
  top: 190px;
}
.no-item-18 {
  left: 642px;
  top: 270px;
}
.no-item-19 {
  left: 696px;
  top: 190px;
}
.no-item-20 {
  left: 696px;
  top: 270px;
}
.no-item-21 {
  left: 880px;
  top: 190px;
}
.no-item-22 {
  left: 880px;
  top: 270px;
}
.no-item-23 {
  left: 936px;
  top: 190px;
}
.no-item-24 {
  left: 936px;
  top: 270px;
}
.no-item-25 {
  left: 1004px;
  top: 190px;
}
.no-item-26 {
  left: 1004px;
  top: 270px;
}
.no-item-27 {
  left:1060px;
  top: 190px;
}
.no-item-28 {
  left: 1060px;
  top: 270px;
}
.no-item-29 {
  left: 1132px;
  top: 190px;
}
.no-item-30 {
  left: 1132px;
  top: 270px;
}
.no-item-31 {
  left: 1185px;
  top: 190px;
}
.no-item-32 {
  left: 1185px;
  top: 270px;
}
.no-item-33 {
  left: 1256px;
  top: 190px;
}
.no-item-34 {
  left: 1256px;
  top: 270px;
}
.no-item-35 {
  left: 1310px;
  top: 190px;
}
.no-item-36 {
  left: 1310px;
  top: 270px;
}
.no-item-37 {
  right: 1130px;
  bottom: 110px;
}
.no-item-38 {
  right: 1130px;
  bottom: 188px;
}
.no-item-39 {
  left: 430px;
  bottom: 110px;
}
.no-item-40 {
  left: 430px;
  bottom: 188px;
}
.no-item-41 {
  left: 504px;
  bottom: 110px;
}
.no-item-42 {
  left: 504px;
  bottom: 188px;
}
.no-item-43 {
  left: 556px;
  bottom: 110px;
}
.no-item-44 {
  left: 556px;
  bottom: 188px;
}
.no-item-45 {
  left: 630px;
  bottom: 110px;
}
.no-item-46 {
  left: 630px;
  bottom: 188px;
}
.no-item-47 {
  left: 680px;
  bottom: 110px;
}
.no-item-48 {
  left: 680px;
  bottom: 188px;
}
.no-item-49 {
  left: 750px;
  bottom: 110px;
}
.no-item-50 {
  left: 750px;
  bottom: 188px;
}
.no-item-51 {
  left: 806px;
  bottom: 110px;
}
.no-item-52 {
  left: 806px;
  bottom: 188px;
}
.no-item-53 {
  right: 500px;
  bottom: 110px;
}
.no-item-54 {
  right: 500px;
  bottom: 188px;
}
.no-item-55 {
  left: 1066px;
  bottom: 110px;
}
.no-item-56 {
  left: 1066px;
  bottom: 188px;
}
.no-item-57 {
  left: 1138px;
  bottom: 110px;
}
.no-item-58 {
  left: 1138px;
  bottom: 188px;
}
.no-item-59 {
  left: 1190px;
  bottom: 110px;
}
.no-item-60 {
  left: 1190px;
  bottom: 188px;
}
.no-item-61 {
  left: 1262px;
  bottom: 110px;
}
.no-item-62 {
  left: 1262px;
  bottom: 188px;
}
.no-item-63 {
  left: 1316px;
  bottom: 110px;
}
.no-item-64 {
  left: 1316px;
  bottom: 188px;
}
.no-item-65 {
  left: 1386px;
  bottom: 110px;
}
.no-item-66 {
  left: 1386px;
  bottom: 188px;
}
.no-item-67 {
  left: 1440px;
  bottom: 110px;
}
.no-item-68 {
  left: 1440px;
  bottom: 188px;
}
</style>
