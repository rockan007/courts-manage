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
                  <input type="date" class="form-control" v-model="startLLDate">
                </div>
                 <div class="input-group mb-3 col-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">结束时间</span>
                  </div>
                  <input type="date" class="form-control" v-model="endLLDate">
                </div>
            </div>
            <div  class="lineLoss-echarts flex-grow-1 d-flex align-items-stretch">
              <div class="col-6 d-flex flex-column justify-items-center align-items-stretch align-items-center border border-info">
                  <div style="color:white;font-size:36px;">拓扑图</div>
                  <img class="flex-grow-1"  style="height:0;" src="http://wx.dianliangliang.com/sucai/top-graph.0ec46f6d.png"  alt="">
              </div>
              <div  class="flex-grow-1 d-flex flex-column">
                  <div id="lineLoss-echarts" style="height:0;" class="flex-grow-1 border border-info"></div>
                  <div id="" style="height:0" class="flex-grow-1 d-flex align-items-stretch">
                      <div id="line-1" style="width:0;" class="flex-grow-1 border border-info"></div>
                      <div id="line-2" style="width:0;" class="flex-grow-1 border border-info"></div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "line-loss",
  data: function() {
    return {
      startLLDate:'2018-07-16',
      endLLDate:'20180-07-24',
      lineCharts: "",
      line1Charts: "",
      line2Charts: "",
      line1: "",
      line: "",
      lineData: {
        title: "总线路",
        data: [
          { value: 3500, name: "实际用电量" },
          { value: 300, name: "线损电量" }
        ]
      },
      line1Data: {
        title: "线路1",
        data: [
          { value: 2000, name: "实际用电量" },
          { value: 200, name: "线损电量" }
        ]
      },
      line2Data: {
        title: "线路2",
        data: [
          { value: 1500, name: "实际用电量" },
          { value: 100, name: "线损电量" }
        ]
      }
    };
  },
  mounted: function() {
    this.initCharts(this.lineCharts, "lineLoss-echarts", this.lineData);
    this.initCharts(this.line1Charts, "line-1", this.line1Data);
    this.initCharts(this.line2Charts, "line-2", this.line2Data);
  },
  methods: {
    startLLDate:function(newVal){

    },
    initCharts: function(charts, id, optionData) {
      charts = echarts.init(document.getElementById(id), "light");
      this.setOptions(charts, optionData);
    },
    setOptions: function(charts, optionData) {
      let option = {
        title: {
          text: optionData.title,
          x: "center",
          textStyle: {
            //标题内容的样式
            color: "#fff", //京东红
            fontStyle: "normal", //主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
            fontWeight: "lighter", //可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: "san-serif", //主题文字字体，默认微软雅黑
            fontSize: 18 //主题文字字体大小，默认为18px
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: "right",
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
            data: optionData.data,
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
      charts.setOption(option);
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
  margin: 60px 30px 60px 100px;
}
.lineLoss-echarts {
}
</style>
