<template>
    <div class="counrt-container d-flex flex-column aligin-items-center justify-content-center">
        <div class="court-name" v-bind:class="{'active':court.order==activeCourtOrder}" v-on:click="emitOrder">{{court.name}}</div>
        <div class="court-details-container" v-show="(court.order==activeCourtOrder)&&court.order>=0">
            <div class="detail-container" v-for="(item,index) in list" v-bind:key="index" v-on:click="getActiveDetail(index)" v-bind:class='{"active":index==activeIndex}'>
                {{item}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "counrt-item",
  props: {
    court: {
      default: function() {
        return {};
      },
      type: Object
    },
    activeCourtOrder: {
      default: 0,
      type: Number
    }
  },
  data: function() {
    return {
      list: [
        "模拟电路", //电路图
        "平面图",
        "视频监控", //
        "用电分析", //防偷电 漏电，用电折线图
        "线损分析", //%
        "事件预警" //表格
      ],
      activeIndex: 0 //当前页
    };
  },
  methods: {
    emitOrder: function() {
      this.$emit("selectCourtOrder", {
        order: this.court.order,
        item: this.activeIndex
      });
    },
    getActiveDetail: function(index) {
      this.activeIndex = index;
      this.emitOrder();
    }
  }
};
</script>
<style scoped>
.active {
  background-image: url();
}
.counrt-container + .counrt-container {
  margin-top: 16px;
}
.court-name {
  padding: 16px;
  font-size: 20px;
  background-image: url("../assets/imgs/option-unselect.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.court-name.active {
  background-image: url("../assets/imgs/option-selected.png");
}

.court-details-container {
  margin: 12px 36px;
  border: 5px solid transparent;
  -moz-border-image: url("../assets/imgs/extra-list.png") 8 5 5 round; /* Old Firefox */
  -webkit-border-image: url("../assets/imgs/extra-list.png") 8 5 5 round; /* Safari and Chrome */
  -o-border-image: url("../assets/imgs/extra-list.png") 8 5 5 round;
  border-image: url("../assets/imgs/extra-list.png") 8 5 5 round;
}
.detail-container.active {
  padding: 4px 0;
  background-image: url("../assets/imgs/list-item-selected.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
