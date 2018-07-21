<template>
    <div class="map-container d-flex flex-column">
        <div class="map-header">
            地图
        </div>
        
        <div id="g-map" class="g-map flex-grow-1">
          
        </div>
    </div>
</template>
<script>
export default {
  name: "map-view",
  data: function() {
    return {
      geocoder: "",
      positions: [
        {
          TabIDstr: "QjlFNEREOTAzODk4NTEzNQ",
          UName: "银座好望角",
          Lng: 116.4267349243164,
          Lat: 37.1721305847168,
          IdentityCard: "自动化运维",
          telInfo: "18005448781",
          SuoShuXiangMu: "平原",
          Time: "2018-07-13 17:52:13"
        },
        {
          TabIDstr: "MjE2NjdDQzU2OTlBNjk3Mg",
          UName: "何庄一号",
          Lng: 117.23218536376953,
          Lat: 37.72047805786133,
          IdentityCard: "自动化运维",
          telInfo: "13734349573",
          SuoShuXiangMu: "乐陵",
          Time: "2018-07-20 18:04:19"
        },
        {
          TabIDstr: "QUNGM0FBODEyMjBFNzA1Ng",
          UName: "何庄二号",
          Lng: 117.0107421875,
          Lat: 36.67445373535156,
          IdentityCard: "自动化运维",
          telInfo: "13376353632",
          SuoShuXiangMu: "武城",
          Time: "2018-07-16 15:04:51"
        },
        {
          TabIDstr: "NkQzMDVGNTE4N0M2MzFFRQ",
          UName: "千玉铭城",
          Lng: 117.51571655273438,
          Lat: 36.676353454589844,
          IdentityCard: "自动化运维",
          telInfo: "13616356114",
          SuoShuXiangMu: "章丘",
          Time: "2018-07-19 14:50:54"
        },
        {
          TabIDstr: "QjA4ODA2REUzRTVDQjg1Ng",
          UName: "高地一号",
          Lng: 117.0107421875,
          Lat: 36.67440414428711,
          IdentityCard: "自动化运维",
          telInfo: "13964105725",
          SuoShuXiangMu: "乐陵",
          Time: "2018-07-19 09:25:29"
        },
        {
          TabIDstr: "NkJEREZDNjQyOUVDMjIzMw",
          UName: "待加入",
          Lng: 116.63987731933594,
          Lat: 36.92803955078125,
          IdentityCard: "自动化运维",
          telInfo: "15315884564",
          SuoShuXiangMu: "禹城",
          Time: "2018-07-19 14:17:50"
        },
        {
          TabIDstr: "NjREQzAwQjM2MDY0NjVBOA",
          UName: "待加入",
          Lng: 117.09114837646484,
          Lat: 36.68140411376953,
          IdentityCard: "自动化运维",
          telInfo: "15806601951",
          SuoShuXiangMu: "历城",
          Time: "2018-07-20 14:30:07"
        }
      ],
      infoWs: [],
      curInfo: {}
    };
  },
  mounted: function() {
    this.initMap();
  },
  watch: {
    curInfo: {
      handler: function() {
        this.getLocAddress();
      },
      deep: true
    }
  },
  methods: {
    getLocAddress: function() {
      var latlng = { lat: this.curInfo.Lat, lng: this.curInfo.Lng };
      this.geocoder.geocode(
        {
          location: latlng
        },
        function(results, status) {
          if (status == "OK") {
            console.log(JSON.stringify(results));
            console.log(JSON.stringify(results[0]));
            this.$set(this.curInfo, "address", results[0].formatted_address);
          }
        }.bind(this)
      );
    },
    initMap: function() {
      var dll = { lat: 36.674163, lng: 117.010899 };
      // document.getElementById("g-map").innerHTML="地图"
      this.gMap = new google.maps.Map(document.getElementById("g-map"), {
        zoom: 7,
        center: dll,
        mapTypeId: "hybrid"
      });
      this.geocoder = new google.maps.Geocoder();
      this.setPositions();
    },

    setPositions: function() {
      this.positions.forEach(
        function(pos) {
          var marker = new google.maps.Marker({
            position: {
              lat: pos.Lat,
              lng: pos.Lng
            },
            icon:
              "https://github.com/rockan007/photos/blob/master/%E6%9C%AA%E6%A0%87%E9%A2%98-2(2).png?raw=true",
            // shape:this.getIcon(pos)[1],
            map: this.gMap
          });
          this.initMarkListener(marker, pos);
        }.bind(this)
      );
    },
    initMarkListener: function(marker, info) {
      marker.addListener(
        "click",
        function() {
          this.clearInfoWindows();
          console.log("click事件");
          console.log("要放置的信息：" + JSON.stringify(info));
          this.curInfo = info;
          var infowindow = new google.maps.InfoWindow({
            content: this.getWinInfo(info)
            // maxWidth: 300
          });
          infowindow.open(this.gMap, marker);
          this.infoWs.push(infowindow);
        }.bind(this)
      );
    },
    getWinInfo: function(info) {
      return (
        '<div class="info-container"><h6>' +
        info.UName +
        "</h6>" +
        '<p class="mb-0">项目:' +
        info.SuoShuXiangMu +
        "</p></div>"
      );
    },
    clearInfoWindows: function() {
      this.infoWs.forEach(function(infoW) {
        infoW.close();
      });
      this.infoWs = [];
    }
  }
};
</script>
<style scoped>
.map-header {
  font-size: 28px;
}
.map-header {
  color: white;
}
.g-map {
  margin: 100px 40px 70px 110px;
}
.info-container{
  color: black;
}
</style>
