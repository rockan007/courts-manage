<template>
    <div class="operational-params flex-grow-1 d-flex flex-wrap position-relative" style="overflow-y:auto;">
        <info-card class="col-6" v-for="(card,index) in cardList" v-bind:cardData="card" v-bind:order="index" v-on:showTrans="showInfo" v-bind:key="index"></info-card>
        <modal v-bind:diaInfo="modalDia"></modal>
    </div>
</template>
<script>
import $ from "jquery";
import 'bootstrap/dist/js/bootstrap.min.js'
import infoCard from "@/components/utils/info-card";
import modal from "@/components/utils/modal";
export default {
  name: "operational-parameters",
  components: {
    infoCard,
    modal
  },
  data: function() {
    return {
      modalDia: {
        id: "operational-params",
        title: "变压器详情",
        html: `<img src="http://wx.dianliangliang.com/sucai/byq.jpg" class='img-fluid'/>`
      },
      infoHtml: `<img src="http://wx.dianliangliang.com/sucai/byq.jpg"/>`,
      cardList: [
        {
          title: "监测信息",
          subTitles: [
            {
              title: "环境温度",
              info: "28℃"
            },
            {
              title: "烟感",
              info: "正常"
            },
            {
              title: "水浸",
              info: "无"
            }
          ],
          infoList: [
            {
              title: "环境湿度",
              info: "41%"
            }
          ],
          isEle: 0
        },
        {
          title: "台区基本信息",
          subTitles: [
            {
              title: "容量",
              info: "1200kVA"
            },
            {
              title: "负载率",
              info: "78.356%"
            },
            {
              title: "总表数",
              info: "238个"
            }
          ],
          infoList: [
            {
              title: "总用户数",
              info: "358"
            },
            {
              title: "高压用户数",
              info: "41"
            },
            {
              title: "低压用户数",
              info: "304"
            }
          ],
          isEle: 0
        },
        {
          title: "2#变压器",
          subTitles: [
            {
              title: "A相电电压",
              info: "219.80V"
            },
            {
              title: "B相电电压",
              info: "221.08V"
            },
            {
              title: "C相电电压",
              info: "220.12V"
            }
          ],
          infoList: [
            {
              title: "母排温度",
              info: "60℃"
            },
            {
              title: "负载率",
              info: "78%"
            },
            {
              title: "容量",
              info: "400kVA"
            },
            {
              title: "低压用户数",
              info: "102"
            }
          ],
          isEle: 1
        },
        {
          title: "3#变压器",
          subTitles: [
            {
              title: "A相电电压",
              info: "219.80V"
            },
            {
              title: "B相电电压",
              info: "221.08V"
            },
            {
              title: "C相电电压",
              info: "220.12V"
            }
          ],
          infoList: [
            {
              title: "母排温度",
              info: "54℃"
            },
            {
              title: "负载率",
              info: "78%"
            },
            {
              title: "容量",
              info: "400kVA"
            },
            {
              title: "低压用户数",
              info: "106"
            }
          ],
          isEle: 1
        },
        {
          title: "6#变压器",
          subTitles: [
            {
              title: "A相电电压",
              info: "219.80V"
            },
            {
              title: "B相电电压",
              info: "221.08V"
            },
            {
              title: "C相电电压",
              info: "220.12V"
            }
          ],
          infoList: [
            {
              title: "母排温度",
              info: "58℃"
            },
            {
              title: "负载率",
              info: "78%"
            },
            {
              title: "容量",
              info: "400kVA"
            },
            {
              title: "低压用户数",
              info: "99"
            }
          ],
          isEle: 1
        }
      ],
      tableList: [
        {
          title: "基本信息",
          params: [
            {
              title: "电压",
              param: "400V"
            },
            {
              title: "电流",
              param: "1000A"
            },
            {
              title: "功率因数",
              param: 0.8
            },
            {
              title: "负载率",
              param: 0.9
            }
          ]
        },
        {
          title: "用户信息",
          params: [
            {
              title: "用户数",
              param: 156
            },
            {
              title: "光伏用户数",
              param: 12
            },
            {
              title: "高压用户数",
              param: 6
            },
            {
              title: "低压用户数",
              param: 106
            }
          ]
        },
        {
          title: "基本信息",
          params: [
            {
              title: "电压",
              param: "400V"
            },
            {
              title: "电流",
              param: "1000A"
            },
            {
              title: "功率因数",
              param: 0.8
            },
            {
              title: "负载率",
              param: 0.9
            }
          ]
        }
      ]
    };
  },
  created: function() {
    this.randomCardList();
  },
  watch: {
    cardList: {
      deep: true,
      handler: function(newVal) {
        console.log("台区内容新数据：" + JSON.stringify(newVal));
      }
    }
  },
  methods: {
    showInfo: function() {
      console.log("*****************展示信息***************"+this.modalDia.id);
      $('#' + this.modalDia.id).modal("show");
    },
    randomCardList: function() {
      this.cardList[0].subTitles[0].info = this.getRandomNo(22, 26) + "℃";
      this.cardList[0].infoList[0].info = this.getRandomNo(40, 50) + "%";
      this.cardList[1].subTitles[1].info = this.getRandomNo(70, 80) + "%";
      this.cardList[2].subTitles[0].info = this.getRandomNo(220, 230) + "V";
      this.cardList[2].subTitles[1].info = this.getRandomNo(220, 230) + "V";
      this.cardList[2].subTitles[2].info = this.getRandomNo(220, 230) + "V";
      this.cardList[2].infoList[0].info = this.getRandomNo(50, 70) + "℃";
      this.cardList[2].infoList[1].info = this.getRandomNo(70, 80) + "%";
      this.cardList[3].subTitles[0].info = this.getRandomNo(220, 230) + "V";
      this.cardList[3].subTitles[1].info = this.getRandomNo(220, 230) + "V";
      this.cardList[3].subTitles[2].info = this.getRandomNo(220, 230) + "V";
      this.cardList[3].infoList[0].info = this.getRandomNo(50, 70) + "℃";
      this.cardList[3].infoList[1].info = this.getRandomNo(70, 80) + "%";
      this.cardList[4].subTitles[0].info = this.getRandomNo(220, 230) + "V";
      this.cardList[4].subTitles[1].info = this.getRandomNo(220, 230) + "V";
      this.cardList[4].subTitles[2].info = this.getRandomNo(220, 230) + "V";
      this.cardList[4].infoList[0].info = this.getRandomNo(50, 70) + "℃";
      this.cardList[4].infoList[1].info = this.getRandomNo(70, 80) + "%";
      setTimeout(this.randomCardList, 1000);
    },
    getRandomNo: function(minNo, maxNo) {
      return (Math.random() * (maxNo - minNo) + minNo).toFixed(2);
    }
  }
};
</script>
<style scoped>
.operational-params {
  margin: 70px 0px 70px 10px;
  color: black;
}
.table-container + .table-container {
  margin-top: 50px;
}
.table-body {
  width: 80%;
  margin: 0 10%;
}
</style>
