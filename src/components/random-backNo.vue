<template>
    <div class="back-no d-flex flex-column justify-content-between" v-on:click='emitDiaShow()'>
        <div class="back line-using" v-bind:class="{'line-break':isUsing==0}"></div>
        <div class="no d-flex flex-column">
            <div style="text-align:left">{{dianY}}V</div>
            <div style="text-align:left">{{dianL}}A</div>
        </div>
    </div>
</template>
<script>
export default {
  name: "back-no",
  data: function() {
    return {
      isUsing: 1,
      dianY: 220.0,
      dianL: 15.07
    };
  },
  mounted: function() {
    this.randomIsUsing();
  },
  watch: {
    isUsing: function(newVal) {
      if (newVal) {
        this.dianY = this.getRandomNo(220, 230);
        this.dianL = this.getRandomNo(10, 50);
      } else {
        this.dianY = 0;
        this.dianL = 0;
      }
    }
  },
  methods: {
    randomIsUsing: function() {
      setTimeout(
        function() {
          this.isUsing = Math.round(Math.random());
          this.randomIsUsing();
        }.bind(this),
        5000
      );
    },
    getRandomNo: function(min, max) {
      return (Math.random() * (max - min) + min).toFixed(2);
    },
    emitDiaShow:function(){
      this.$emit('dialogShow');
    }
  }
};
</script>
<style scoped>
.back-no {
  position: absolute;
  color: aqua;
}
.back {
  width: 44px;
  height: 30px;
}
.no {
  font-size: 12px;
}
.line-using {
  background-color: rgba(255, 0, 0, 0.7);
}
.line-break {
  background-color: rgba(0, 128, 0, 0.5);
}
</style>

