<template>
    <div class="eventAlert-container d-flex flex-column">
        <div class="eventAlert-header d-flex">
            <div class="eventAlert-title flex-grow-1">事件预警</div> 
            <button class="btn btn-outline-primary" v-on:click="exportAlert">导出表格</button>
        </div>
        <div class="eventAlert-body flex-shrink-1" style="overflow-y:auto;">
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th v-for="(col,index) in cols" v-bind:key="index" scope="col">{{col}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,order) in alertList" v-bind:key="'tr-'+order">
                  <th scope="row">{{order+1}}</th>
                  <td v-for="(key,index) in Object.keys(item)" v-bind:key="'tr-'+order+index">{{item[key]}}</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  name: "event-alert",
  data: function() {
    return {
      cols: [
        "#",
        "事件名称",
        "故障级别",
        "故障设备",
        "故障原因",
        "故障时间",
        "修复时间",
        "处理时间"
      ],
      alertList: [
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "东线东支",
          reason: "单相接地（漏电）",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "表箱异常打开",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: ""
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "过载",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "表箱异常打开",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "用户侧过负荷",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "断电",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "单相接地（漏电）",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "用户侧过负荷",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "表箱异常打开",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: ""
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "用户侧过负荷",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 4,
          equipment: "1#变压器",
          reason: "过负荷",
          errTime: "2018-07-21 17:52:00",
          repairTime: "2018-07-21 18:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "JP柜",
          reason: "三相不平衡",
          errTime: "2018-07-20 12:00:53",
          repairTime: "2018-07-20 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 8,
          equipment: "18#表箱06#表",
          reason: "断电",
          errTime: "2018-07-19 12:12:00",
          repairTime: "2018-07-19 14:52:00",
          repairDuration: "1h"
        },
        {
          title: "故障警报",
          level: 1,
          equipment: "54#表箱",
          reason: "表箱异常打开",
          errTime: "2018-07-18 12:12:00",
          repairTime: "",
          repairDuration: ""
        },
        {
          title: "故障警报",
          level: 6,
          equipment: "54#表箱2#表",
          reason: "用户侧过负荷",
          errTime: "2018-07-17 12:12:00",
          repairTime: "2018-07-17 14:52:00",
          repairDuration: "1h"
        }
      ]
    };
  },

  methods: {
    exportAlert: function() {
      window.open(
        "http://wx.dianliangliang.com/sucai/courts-manage/courts-manage/事件警报.xlsx"
      );
    }
  }
};
</script>
<style scoped>
.eventAlert-container {
  color: white;
}
.eventAlert-title {
  font-size: 24px;
}
.btn-outline-primary{
  min-height: 40px;
}
.eventAlert-body {
  margin: 60px 30px 60px 100px;
}
</style>
