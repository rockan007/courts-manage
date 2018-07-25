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
          Lng: 117.010899,
          Lat: 36.674163,
        },
        {
          TabIDstr: "MjE2NjdDQzU2OTlBNjk3Mg",
          UName: "何庄一号",
          Lng: 116.344969,
          Lat: 37.393872,
        },
        {
          TabIDstr: "QUNGM0FBODEyMjBFNzA1Ng",
          UName: "何庄二号",
          Lng: 116.345169,
          Lat: 37.394772,
        },
        {
          TabIDstr: "NkQzMDVGNTE4N0M2MzFFRQ",
          UName: "天玉铭城一号",
          Lng: 116.3478700000,
          Lat: 37.4375200000,
        },
        {
          TabIDstr: "QjA4ODA2REUzRTVDQjg1Ng",
          UName: "高地一号",
          Lng: 116.3476330000,
          Lat: 37.4413190000,
        },
        {
          TabIDstr: "NkJEREZDNjQyOUVDMjIzMw",
          UName: "待加入",
          Lng: 116.63987731933594,
          Lat: 36.92803955078125,
        },
        {
          TabIDstr: "NjREQzAwQjM2MDY0NjVBOA",
          UName: "待加入",
          Lng: 117.09114837646484,
          Lat: 36.68140411376953,
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
            this.$set(this.curInfo, "address", results[0].formatted_address);
          }
        }.bind(this)
      );
    },
    initMap: function() {
      var dll = { lat: 37.4355000000, lng: 116.3592700000 };
      // document.getElementById("g-map").innerHTML="地图"
      this.gMap = new google.maps.Map(document.getElementById("g-map"), {
        zoom: 8,
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
              "http://wx.dianliangliang.com/sucai/1.png",
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
        "</h6></div>"
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
  margin: 60px 30px 60px 100px;
}
.info-container{
  color: black;
}
</style>
