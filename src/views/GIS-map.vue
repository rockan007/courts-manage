<template>
    <div id="GIS-map" class="GIS-map">

    </div>
</template>
<script>
import { events } from "../assets/scripts/events.js";
export default {
  name: "GIS-map",
  props: {},
  data: function() {
    return {
      routerId: 0,
      GISMap: "",
      facilities: "",
      points: "",
      lines: "",
      curPoint: "",
      curInfoWin: "",
      centerPos: { lat: 36.674163, lng: 117.010899 }
    };
  },
  mounted: function() {
    console.log("************^获取的to:" + JSON.stringify(this.$route.params));
    this.routerId = this.$route.params.id;
    this.initMap();
    if (this.routerId != 0) {
      this.requestData();
    } else {
      this.initGinzaWin();
    }
  },
  watch: {
    $route(to, from) {
      console.log(
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^获取的to:" +
          JSON.stringify(to.params)
      );
      this.routerId = to.params.id;
    },
    points: function(newVal) {
      console.log("获取的锚点信息：" + JSON.stringify(newVal));
      this.initPoints(newVal);
    },
    lines: function(newVal) {
      console.log("获取的线路信息：" + JSON.stringify(newVal));
      this.initLines(newVal);
    },
    routerId: function(newVal) {
      if (newVal == 1) {
        this.centerPos = { lat: 37.393872, lng: 116.344969 };
      } else {
        this.centerPos = { lat: 36.674163, lng: 117.010899 };
      }
    },
    centerPos: {
      handler: function(newVal) {
        console.log("新的中心位置：" + JSON.stringify(newVal));
        if (this.GISMap.setCenter) {
          this.GISMap.setCenter(newVal);
        } else {
          this.initMap();
        }
        if (this.routerId != 0) {
          this.requestData();
        } else {
          this.initGinzaWin();
        }
      },
      deep: true
    }
  },

  methods: {
    initLines: function(lines) {
      lines.forEach(line => {
        let coordinates = [
          {
            lat: line.P_S_Lat,
            lng: line.P_S_Lng
          },
          {
            lat: line.P_E_Lat,
            lng: line.P_E_Lng
          }
        ];
        let path = new google.maps.Polyline({
          path: coordinates,
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        path.setMap(this.GISMap);
      });
    },
    initPoints: function(points) {
      points.forEach(point => {
        let marker = new google.maps.Marker({
          position: { lat: point.Lat, lng: point.Lng },
          map: this.GISMap,
          icon:
            "http://wx.dianliangliang.com/sucai/GIS-map/" +
            point.CIDStr +
            ".png"
        });
        this.initMarkListener(marker, point);
      });
    },
    initMarkListener: function(marker, point) {
      marker.addListener(
        "click",
        function() {
          if (this.curInfoWin) {
            this.curInfoWin.close();
          }
          this.curPoint = point;
          var infowindow = new google.maps.InfoWindow({
            content: this.getWinInfo(point),
            maxWidth: 300
          });
          infowindow.open(this.GISMap, marker);
          this.curInfoWin = infowindow;
        }.bind(this)
      );
    },
    initGinzaWin: function() {
      var infowindow = new google.maps.InfoWindow({
        content: "<h5>银座好望角</h5><div>明湖西路800号</div>",
        position: this.centerPos
      });
      infowindow.open(this.GISMap);
    },
    getWinInfo: function(point) {
      console.log("要展示的位置信息：" + JSON.stringify(point));
      return point.SBMName.replace(/\./g, "");
    },
    initMap: function() {
      console.log("^^^^^^^^^^^^^^^^^^^^^^^GISMap***************");
      this.GISMap = new google.maps.Map(document.getElementById("GIS-map"), {
        center: this.centerPos,
        zoom: 18,
        mapTypeId: "hybrid"
      });
    },
    requestData: function() {
      events.request(
        function(response) {
          this.facilities = response.result.Data_Obj;
          console.log("获取的数据：" + JSON.stringify(this.facilities));
          this.points = this.changePoints(this.facilities.Arr_P);
          this.lines = this.facilities.Arr_L;
        }.bind(this)
      );
    },
    changePoints: function(points) {
      points.forEach(point => {
        point.CIDStr = events.FACILITY_MAP.get(point.CIDStr);
      });
      return points;
    }
  }
};
</script>
<style scoped>
.GIS-map {
  height: 100%;
  margin: 60px 30px 60px 100px;
}
</style>