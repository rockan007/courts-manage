//线损分析
<template>
    <div class="lineLoss-container d-flex flex-column">
        <div class="lineLoss-header d-flex">
            <div class="lineLoss-title flex-grow-1">
              线损分析
            </div>
            <button class="btn btn-outline-primary" v-on:click="exportLineLoss()">导出表格</button>
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
            <div  class="lineLoss-echarts flex-grow-1 d-flex flex-column align-items-stretch">
              <div style="height:0"  class="flex-grow-1 d-flex">
                  <div id="lineLoss-echarts" style="width:0;" class="flex-grow-1 border border-info"></div>
                  <div id="select-line-container" style="width:0;" class="flex-grow-1 border border-info d-flex align-items-stretch">
                    <div class="select-container">
                      <select name="" id="" v-model="selectMeterBoxNo">
                        <option v-for="no in 34" v-bind:key="no" :value="no">表箱{{no}}#</option>
                      </select>
                    </div>
                    <div id="select-line" class="flex-grow-1"></div>
                  </div>
                  
              </div>
              <div style="height:0" class="flex-grow-1 d-flex ">
                <div id="line-1" style="width:0;" class="flex-grow-1 border border-info"></div>
                <div id="line-2" style="width:0;" class="flex-grow-1 border border-info"></div>
                <div id="line-3" style="width:0;" class="flex-grow-1 border border-info"></div>
                <div id="line-4" style="width:0;" class="flex-grow-1 border border-info"></div>
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
      selectMeterBoxNo: 1,
      startLLDate: "2018-08-13",
      endLLDate: "2018-08-20",
      lineCharts: "",
      line1Charts: "",
      line2Charts: "",
      line3Charts: "",
      line4Charts: "",
      selectCharts: "",
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
        title: "东线",
        data: [
          { value: 2000, name: "实际用电量" },
          { value: 200, name: "线损电量" }
        ]
      },
      line2Data: {
        title: "西线",
        data: [
          { value: 1500, name: "实际用电量" },
          { value: 100, name: "线损电量" }
        ]
      },
      line3Data: {
        title: "东线东支",
        data: [
          { value: 1500, name: "实际用电量" },
          { value: 100, name: "线损电量" }
        ]
      },
      line4Data: {
        title: "东线西支",
        data: [
          { value: 1500, name: "实际用电量" },
          { value: 100, name: "线损电量" }
        ]
      },
      lineSelect: {
        title: "",
        data: [
          { value: 1500, name: "实际用电量" },
          { value: 100, name: "线损电量" }
        ]
      }
    };
  },
  mounted: function() {
    this.initCharts(this.lineCharts, "lineLoss-echarts", this.lineData);
    this.initCharts(this.selectCharts, "select-line", this.lineSelect);
    this.initCharts(this.line1Charts, "line-1", this.line1Data);
    this.initCharts(this.line2Charts, "line-2", this.line2Data);
    this.initCharts(this.line3Charts, "line-3", this.line3Data);
    this.initCharts(this.line4Charts, "line-4", this.line4Data);
  },
  methods: {
    exportLineLoss: function() {
      window.open(
        "http://wx.dianliangliang.com/sucai/courts-manage/courts-manage/%E7%BA%BF%E6%8D%9F%E5%88%86%E6%9E%90.xlsx"
      );
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
          },
          selectedMode: false
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
            },
            label: {
              normal: {
                formatter: "{b}\n{c}\n{d}%",
                textStyle: {
                  fontWeight: "normal",
                  fontSize: 12
                }
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
.select-container {
  font-size: 20px;
  line-height: 36px;
}
.lineLoss-container {
  color: white;
}
.lineLoss-title {
  font-size: 24px;
}
.lineLoss-body {
  margin: 60px 30px 60px 100px;
}
.lineLoss-echarts {
}
</style>
