//线损分析
<template>
    <div class="lineLoss-container d-flex flex-column">
        <div class="lineLoss-header">
            线损分析
        </div>
        <div class="lineLoss-body flex-grow-1 d-flex flex-column">
            <div class="d-flex align-items-center justify-content-center ">
                <div class="input-group mb-3 col-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">开始时间</span>
                  </div>
                  <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                 <div class="input-group mb-3 col-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">结束时间</span>
                  </div>
                  <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
            <div id="lineLoss-echarts" class="lineLoss-echarts flex-grow-1"></div>
        </div>
    </div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "line-loss",
  data: function() {
    return {
      lineCharts: ""
    };
  },
  mounted: function() {
    this.initCharts();
  },
  methods: {
    initCharts: function() {
      this.lineCharts = echarts.init(
        document.getElementById("lineLoss-echarts"),
        "light"
      );
      this.setOptions();
    },
    setOptions: function(optionData) {
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["实际用电量", "线损电量"],
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)"
          }
        },
        series: [
          {
            name: "线损分析",
            type: "pie",
            radius: "70%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "实际用电量" },
              { value: 110, name: "线损电量" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.lineCharts.setOption(option);
    }
  }
};
</script>
<style scoped>
.lineLoss-container {
  color: white;
}
.lineLoss-header {
  font-size: 24px;
}
.lineLoss-body {
  margin: 100px 40px 70px 110px;
}
.lineLoss-echarts {
  margin:0 20%;
  padding: 10px 0;
}
</style>
