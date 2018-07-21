//用电分析
<template>
    <div class="analysis-container d-flex flex-column">
        <div class="analysis-header d-flex justify-content-center">
            <select class="select-lines" name="" id="" v-model="selectLineIndex">
                <option value="0" v-bind:key="0">全部支线</option>
                <option v-for="(line,index) in lines" v-bind:key="index+1" v-bind:value="index+1">{{line.name}}</option>
            </select>
            <select class="select-meters" name="" id="" v-if="selectLineIndex>0"  v-model="selectMeterIndex">
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
      period:0
    };
  },
  mounted: function() {
    this.initCharts();
  },
  watch: {
    selectLineIndex: function(newVal) {
      if (newVal == 0) {
        this.selectLine = {};
        return;
      }
      this.selectMeterIndex = 0;
      this.selectLine = this.lines[newVal];
    },
    selectMeterIndex: function() {}
  },
  methods: {
    initCharts: function() {
      this.myChart = echarts.init(
        document.getElementById("echarts-container"),
        "light"
      );
      this.setOptions();
    },
    setOptions: function(optionData) {
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
.select-lines,.select-meters{
  background-color: transparent;
  color: white;
}
option{
  background-color: rgb(0, 0, 53);
}
.echarts-container {
  min-height: 500px;
}
.analysis-body {
  margin: 100px 40px 70px 110px;
}
.chose-period {
  color: #56fdff;
}
</style>
