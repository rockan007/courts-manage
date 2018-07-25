//用电分析
<template>
    <div class="analysis-container d-flex flex-column">
        <div class="analysis-header d-flex justify-content-center">
            <select class="select-lines"  v-model="selectLineIndex">
                <option value="0" v-bind:key="0">全部支线</option>
                <option v-for="(line,index) in lines" v-bind:key="index+1" v-bind:value="index+1">{{line.name}}</option>
            </select>
            <select class="select-meters" v-if="selectLineIndex>0"  v-model="selectMeterIndex">
                <option value="0" v-bind:key="0">全部表箱</option>
                <option v-for="(meter,index) in selectLine.meters" v-bind:key="index+1" v-bind:value="index+1">{{meter.name}}</option>
            </select>
        </div>
        <div class="analysis-body flex-grow-1 d-flex flex-column">
             <p  style="margin-bottom:0">
              <span v-on:click="period=0" v-bind:class='{"chose-period":period==0}'>日</span>
              <span style="color:white;">/</span>
              <span v-on:click="period=1" v-bind:class='{"chose-period":period==1}'>周</span>
               <span style="color:white;">/</span>
              <span v-on:click="period=2" v-bind:class='{"chose-period":period==2}'>月</span>
            </p>
            <div id="echarts-container" class="echarts-container flex-grow-1"></div>
        </div>
    </div>
</template>
<script>
import echarts from "echarts/dist/echarts.min.js";
export default {
  name: "ele-anys",
  data: function() {
    return {
      lines: [
        {
          name: "支线1#",
          meters: [
            {
              name: "表箱1#"
            },
            {
              name: "表箱2#"
            },
            {
              name: "表箱3#"
            },
            {
              name: "表箱4#"
            },
            {
              name: "表箱5#"
            }
          ]
        },
        {
          name: "支线2#",
          meters: [
            {
              name: "表箱-村东"
            },
            {
              name: "表箱-村西"
            },
            {
              name: "表箱-村北"
            },
            {
              name: "表箱-村南"
            }
          ]
        },
        {
          name: "南线",
          meters: [
            {
              name: "南支-表箱-1"
            },
            {
              name: "南支-表箱-2"
            },
            {
              name: "南支-表箱-3"
            },
            {
              name: "南支-表箱-4"
            }
          ]
        },
        {
          name: "线路东支",
          meters: [
            {
              name: "东支-表箱-1"
            },
            {
              name: "东支-表箱-2"
            },
            {
              name: "东支-表箱-3"
            },
            {
              name: "东支-表箱-4"
            }
          ]
        }
      ],
      selectLineIndex: 0,
      selectMeterIndex: 0,
      selectLine: {},
      selectMeter: {},
      myChart: "",
      period: 0,
      dayData: {
        xLine: [
          "0:00",
          "2:00",
          "4:00",
          "6:00",
          "8:00",
          "10:00",
          "12:00",
          "14:00",
          "16:00",
          "18:00",
          "20:00",
          "22:00",
          "24:00"
        ],
        yLine: [100, 80, 90, 70, 150, 200, 150, 251, 340, 360, 380, 270, 200]
      },
      weekData: {
        xLine: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        yLine: [800, 700, 350, 600, 420, 790, 900]
      },
      monthData: {
        xLine: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        yLine: [
          5000,
          5200,
          4000,
          3000,
          2600,
          2900,
          3600,
          4700,
          3600,
          3200,
          3800,
          4200
        ]
      }
    };
  },
  mounted: function() {
    this.initCharts();
  },
  watch: {
    selectLineIndex: function(newVal) {
      console.log("选择的："+newVal)
      if (newVal == 0) {
        this.selectLine = {};
        return;
      }
      this.selectMeterIndex = 0;
      this.selectLine = this.lines[newVal];
      console.log("this.selectLine:"+JSON.stringify(this.selectLine));
    },
    selectMeterIndex: function() {}
  },
  watch: {
    period: function(newVal) {
      let optionData = "";
      switch (parseInt(newVal)) {
        case 0:
          optionData = this.dayData;
          break;
        case 1:
          optionData = this.weekData;
          break;
        case 2:
          optionData = this.monthData;
          break;
        default:
          optionData = this.dayData;
          break;
      }
      this.setOptions(optionData);
    }
  },
  methods: {
    initCharts: function() {
      this.myChart = echarts.init(
        document.getElementById("echarts-container"),
        "light"
      );
      this.setOptions(this.dayData);
    },
    setOptions: function(optionData) {
      let option = {
        xAxis: {
          type: "category",
          data: optionData.xLine,
          axisLine: {
            lineStyle: {
              color: "#56fdff" //坐标轴线颜色
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#56fdff" //坐标轴线颜色
            }
          }
        },
        series: [
          {
            data: optionData.yLine,
            type: "line"
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option);
    }
  }
};
</script>
<style scoped>
.analysis-container {
  color: white;
}
.analysis-header {
  font-size: 24px;
}
.select-lines,
.select-meters {
  background-color: transparent;
  color: white;
}
option {
  background-color: rgb(0, 0, 53);
}
.echarts-container {
  min-height: 500px;
}
.analysis-body {
  margin: 60px 30px 60px 100px;
}
.chose-period {
  color: #56fdff;
}
</style>
