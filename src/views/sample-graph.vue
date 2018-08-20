<template>
    <div class="sample-graph maps-container d-flex flex-column flex-shrink-1">
        <div class="maps-header">
          <select name="" id="" v-model="selectMap">
            <option value="0">GIS图</option>
            <option value="1" v-show="id!=0">平面图</option>
            <option value="2">模拟图</option>
            <option value="3">运行参数</option>
          </select>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "sample-graph",
  data: function() {
    return {
      selectMap: 0,
      id: 0
    };
  },
  mounted: function() {
    this.id = this.$route.params.id;
  },
  watch: {
    $route(to, from) {
      console.log("sample-graph id:" + JSON.stringify(to.params));
      this.id = to.params.id;
    },
    id: function() {
      this.selectMap = 0;
    },
    selectMap: function(newVal) {
      let routerPath = "/sample-graph/" + this.id;
      switch (parseInt(newVal)) {
        case 0:
          routerPath += "/GIS-map";
          break;
        case 1:
          routerPath += "/plan-graph";
          break;
        case 2:
          routerPath += "/analog-line";
          break;
        case 3:
          routerPath += "/oprational-params";
          break;
        default:
          routerPath += "/GIS-map";
          break;
      }
      console.log("****************获取的跳转路径："+routerPath)
      this.$router.push(routerPath);
    }
  },
  methods: {}
};
</script>
<style scoped>
.sample-graph {
  width: 100%;
}
.maps-header {
  font-size: 24px;
}
</style>