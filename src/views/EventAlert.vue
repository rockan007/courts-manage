<template>
    <div class="eventAlert-container">
        <div class="eventAlert-header d-flex">
            <div class="eventAlert-title flex-grow-1">事件预警</div> 
            <button class="btn btn-outline-primary" v-on:click="exportAlert">导出表格</button>
        </div>
        <div class="eventAlert-body">
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">事件名称</th>
                  <th scope="col">故障原因</th>
                  <th scope="col">故障时间</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>故障警报</td>
                  <td>断电</td>
                  <td>2018-07-21 17:52:00</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>故障警报</td>
                  <td>三相不平衡</td>
                  <td>2018-07-20 12:00:53</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>故障警报</td>
                  <td>母排温度过高</td>
                  <td>2018-07-19 12:12:00</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>故障警报</td>
                  <td>表箱异常打开</td>
                  <td>2018-07-18 11:15:00</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>故障警报</td>
                  <td>用户侧断电</td>
                  <td>2018-07-19 12:00:53</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  name: "event-alert",
  methods:{
    exportAlert:function(){
      window.open("http://wx.dianliangliang.com/sucai/courts-manage/courts-manage/事件警报.xlsx")
    }
  }
};
</script>
<style scoped>
.eventAlert-container {
  color: white;
}
.eventAlert-title  {
  font-size: 24px;
}
.eventAlert-body{
  margin: 60px 30px 60px 100px;
}
</style>
