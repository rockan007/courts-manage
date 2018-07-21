<template>
  <div id="app" class="app-container d-flex flex-column">
    <div class="app-header">

    </div>
    <div class="app-body flex-grow-1 d-flex align-items-stretch">
      <left-nav v-on:selectOrder="getSelectOrder"></left-nav>
      <router-view v-on:resize="getBodySize" v-bind:selectOrder="selectOrder" class="flex-grow-1">
      </router-view>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import LeftNav from "./components/LeftNav";
export default {
  name: "app",
  components: {
    "left-nav": LeftNav
  },
  data: function() {
    return {
      bodySize: {},
      selectOrder: {}
    };
  },
  created: function() {},
  mounted: function() {
    this.bodySize = this.getBodySize();
    console.log("this bodySize:" + JSON.stringify(this.bodySize));
  },
  watch: {
    bodySize: {
      handler: function(newVal) {
        let longWidth = 1821 / 984;

        if (newVal.width / newVal.height <= longWidth) {
          return;
        }
        document.querySelector(".app-body").style.minHeight =
          newVal.watch * (1 / longWidth);
        console.log(newVal.width / newVal.height);
      },
      deep: true
    },
    selectOrder: {
      handler: function() {
        this.routerToDetail();
      },
      deep: true
    }
  },
  methods: {
    routerToDetail: function() {
      if (this.selectOrder.order == -1) {
        this.$router.push("/");
      }
      switch (this.selectOrder.item) {
        case 0:
          this.$router.push({
            name: "analog-line",
            params: {
              id: this.selectOrder.order
            }
          });
          break;
        case 1:
          this.$router.push({
            name: "videoes",
            params: {
              id: this.selectOrder.order
            }
          });
          break;
        case 2:
          this.$router.push({
            name: "eletric-anys",
            params: {
              id: this.selectOrder.order
            }
          });
          break;
        case 3:
          this.$router.push({
            name: "line-loss",
            params: {
              id: this.selectOrder.order
            }
          });
          break;
        case 4:
          this.$router.push({
            name: "event-alert",
            params: {
              id: this.selectOrder.order
            }
          });
          break;
        default:
          break;
      }
    },
    getBodySize: function() {
      let appBody = document.querySelector(".app-body");
      return {
        width: appBody.clientWidth,
        height: appBody.clientHeight - 95
      };
    },
    getSelectOrder: function(order) {
      this.selectOrder = order;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-container {
  background-image: url(./assets/imgs/back-img.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  background-color: rgb(0, 0, 21);
}
.app-header {
  min-height: 95px;
}
.app-body {
  margin: 80px 100px;
}
</style>
