<template>
    <div class="eventAlert-container">
        <div class="eventAlert-header">
            事件预警
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
                  <td>三项不平衡</td>
                  <td>2018-07-20 12:00</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>故障警报</td>
                  <td>母排温度过高</td>
                  <td>2018-07-19 12:00</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  name: "event-alert"
};
</script>
<style scoped>
.eventAlert-container {
  color: white;
}
.eventAlert-header {
  font-size: 24px;
}
.eventAlert-body{
  margin: 100px 40px 70px 110px;
}
</style>
