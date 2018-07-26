<template>
    <div class="meter-container d-flex justify-content-center align-items-center" v-bind:class='[{"meter-stopping":type==1},{"meter-noUsing":type==2}]'>
        <div class="meter-no-container flex-grow-1">
            <div class="meter-no">{{filterMeterNo}}</div>
        </div>
        <div class="meter-info d-flex flex-column">
          <div class="name">
            姓名:{{type==2?'无':familyNames[getrandomInt(0,99)]+getRandomCCharacter()+getRandomCCharacter()}}
          </div>
          <div>
            户号：{{type==2?'无':'*****'+getRandomNo(100,10000,4)}}
          </div>
          <div class="">
            电压：{{type==1||type==2?0:getRandomFloat(220,230)}}V
            
          </div>
          <div>
            电流：{{type==1||type==2?0:getRandomFloat(10,100)}}A
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "meter-item",
  props: {
    type: {
      default: 0, //0正常 1 欠费 2 未安装
      type: Number
    }
  },
  data: function() {
    return {
      meterNo: "000000",
      familyNames: [
        "赵",
        "钱",
        "孙",
        "李",
        "周",
        "吴",
        "郑",
        "王",
        "冯",
        "陈",
        "褚",
        "卫",
        "蒋",
        "沈",
        "韩",
        "杨",
        "朱",
        "秦",
        "尤",
        "许",
        "何",
        "吕",
        "施",
        "张",
        "孔",
        "曹",
        "严",
        "华",
        "金",
        "魏",
        "陶",
        "姜",
        "戚",
        "谢",
        "邹",
        "喻",
        "柏",
        "水",
        "窦",
        "章",
        "云",
        "苏",
        "潘",
        "葛",
        "奚",
        "范",
        "彭",
        "郎",
        "鲁",
        "韦",
        "昌",
        "马",
        "苗",
        "凤",
        "花",
        "方",
        "俞",
        "任",
        "袁",
        "柳",
        "酆",
        "鲍",
        "史",
        "唐",
        "费",
        "廉",
        "岑",
        "薛",
        "雷",
        "贺",
        "倪",
        "汤",
        "滕",
        "殷",
        "罗",
        "毕",
        "郝",
        "邬",
        "安",
        "常",
        "乐",
        "于",
        "时",
        "傅",
        "皮",
        "卞",
        "齐",
        "康",
        "伍",
        "余",
        "元",
        "卜",
        "顾",
        "孟",
        "平",
        "黄",
        "和",
        "穆",
        "萧",
        "尹"
      ]
    };
  },
  mounted: function() {
    this.getRandomMeterNo();
    console.log(this.getRandomCCharacter());
    console.log("百家姓的长度：" + this.familyNames.length);
  },
  filters: {},
  computed: {
    filterMeterNo: function() {
      switch (parseInt(this.type)) {
        case 0:
          return this.meterNo;
        case 1:
          return this.meterNo;
        case 2:
          return "000000";
        default:
          return this.meterNo;
      }
    }
  },
  methods: {
    getRandomCCharacter: function() {
      let word = "%u" + this.getRandomIntStr(19968, 40869);
      return unescape(word);
    },
    getrandomInt: function(minNo, maxNo) {
      return parseInt(Math.round(Math.random() * (maxNo - minNo) + minNo));
    },
    getRandomFloat: function(minNo, maxNo) {
      return (Math.random() * (maxNo - minNo) + minNo).toFixed(2);
    },
    getRandomIntStr: function(minNo, maxNo) {
      return this.getrandomInt(minNo, maxNo).toString(16);
    },
    getRandomMeterNo: function() {
      setTimeout(
        function() {
          this.meterNo = this.getRandomNo(100, 100000, 6);
          this.getRandomMeterNo();
        }.bind(this),
        2000
      );
    },
    getRandomNo: function(minNo, maxNo, length) {
      let noStr = parseInt(Math.random() * (maxNo - minNo) + minNo).toString();
      let len = noStr.length;
      if (noStr.length < length) {
        for (let i = 0; i < length - len; i++) {
          noStr = "0" + noStr;
        }
      }
      console.log("后：" + noStr);
      return noStr;
    }
  }
};
</script>
<style scoped>
.meter-container {
  color: red;
  margin: 8px 0;
}
.meter-stopping {
  color: green;
}
.meter-noUsing {
  color: gray;
}
.meter-no-container {
  min-height: 100px;
  background-image: url(../assets/imgs/meter.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.meter-no {
  font-size: 26px;
  letter-spacing: 7px;
  margin-top: 18px;
  margin-left: 10px;
}
.meter-info {
  text-align: left;
  min-width: 114.72px;
}
</style>
