<template>
    <div class="left-nav-container">
        <court-nav v-for="(courtName,index) in courts" v-bind:key="index" 
        v-bind:court="{name:courtName,order:index}" v-bind:activeCourtOrder='activeOrder.order'
        v-on:selectCourtOrder="getSelectOrder"></court-nav>
    </div>
</template>
<script>
import Court from "./court-nav";
export default {
  name: "left-bar",
  components: {
    "court-nav": Court
  },
  data: function() {
    return {
      courts: [
        "银座好望角",
        "何庄一号",
        "何庄二号",
        "千玉铭城",
        "高地一号",
        "待加入",
        "待加入"
      ],
      activeOrder: {
        order: -1,
        item: 0
      }
    };
  },
  watch: {
    activeOrder: {
      handler: function(newVal) {
        this.$emit("selectOrder", newVal);
      },
      deep: true
    }
  },
  methods: {
    getSelectOrder: function(order) {
      console.log("获取的当前order:" + JSON.stringify(order));
      this.activeOrder = order;
    }
  }
};
</script>
<style scoped>
.left-nav-container {
  min-width: 220px;
  color: white;
}
</style>