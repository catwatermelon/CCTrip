<template>
    <div class="personaltrip">
        <md-popup
        v-model="isPopupShow.top"
        position="top"
        >
            <div class="md-example-popup md-example-popup-top">
                <div>
                    <span class="addressTitle">当前地址</span>
                    <p class="addressDetail">{{detailAddress}}</p>
                </div>
                <md-icon
                name="close"
                @click.native="hidePopUp('top')"
                ></md-icon>
            </div>
        </md-popup>
        <!-- <trip-dialog></trip-dialog> -->
         <div class="tools" v-show="isShowTools">
            <div @click="showDetailAddress"><img src="../assets/weizhi.png" alt=""><span>{{cityUni}}</span></div>
            <div @click="isMapStylePaneShow = true"><img src="../assets/ditu.png" alt=""><span>地图</span></div>
            <div @click="confirmLocation"><img src="../assets/dingwei.png" alt=""><span>定位</span></div>
        </div>
        <div class="mapStyle" v-show="isMapStylePaneShow">
            <div class="mapTitle">地图</div>
            <div class="mapColor" >
                <div><input type="radio" @click="changeMapStyle" name="color" value="dark">幻影黑</div>
                <div><input type="radio" @click="changeMapStyle" name="color" value="normal">标准</div>
                <div><input type="radio" @click="changeMapStyle" name="color" value="light">月光银</div>
                <div><input type="radio" @click="changeMapStyle" name="color" value="fresh">草色青</div>        
            </div>
        </div>
        <div id="homeMapContainer"></div>
        <div class="btnContainer">
            <button class="circle" @click="startTimekeeper">{{tripStatus[currentStatus].title}}</button>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mand-mobile'
import TripDialog from '../components/TripDialog.vue'
export default {
    name: 'personaltrip',
    data(){
        return {
            currentPostion: null,
            map: null,
            circleMarkerOuter: null,
            circleMarkerInner: null,
            cityUni: '',
            isPopupShow: {},
            isMapStylePaneShow: false,
            detailAddress: '',
            isShowTools: true,
            tripStatus: [
                {
                    time: 0,
                    title: "开始",
                },
                {
                    time: 0,
                    title: "结束",
                },
                {
                    time: 0,
                    title: '退出'
                }
            ],
            currentStatus: 0,
            history: {
                transport: '',
                // cost: 0,
                date: '',
                pathList: [],
                distance: 0,
                totalTime: 0
            },
            intervalHandle: null
        }
    },
    methods:{
        initMap(){
            var that = this;
            this.getCurrentPosition().then(res=>{
                that.cityUni = res.addressComponent.city;
                let position = res.position;
                // console.log(position)
                this.map = new AMap.Map('homeMapContainer', {
                    zoom: 17,//级别,
                    center: [position.lng,position.lat]
                });
                // var gpsPoint = GPS.gcj_encrypt(res.position.lat, res.position.lng);
                // this.map.setCenter(position)
                this.circleMarkerOuter = new AMap.CircleMarker({
                    center: new AMap.LngLat(position.lng,position.lat),  // 圆心位置
                    radius: 30, // 圆半径
                    fillColor: 'lightblue',   // 圆形填充颜色
                    strokeColor: '#C0E8F4', // 描边颜色
                    strokeWeight: 2, // 描边宽度
                    fillOpacity: .2
                });
                this.map.add(this.circleMarkerOuter);

                this.circleMarkerInner = new AMap.CircleMarker({
                    center: new AMap.LngLat(position.lng,position.lat),  // 圆心位置
                    radius: 4, // 圆半径
                    fillColor: 'blue',   // 圆形填充颜色
                    fillOpacity: .2
                });
                this.map.add(this.circleMarkerInner);
            }).catch(error=>{
                console.log(error);
            })
        },
        getCurrentPosition(){
            return new Promise((resolve, reject)=>{
                AMap.plugin('AMap.Geolocation', function() {
                    var geolocation = new AMap.Geolocation({
                        enableHighAccuracy: true,//是否使用高精度定位，默认:true
                        timeout: 9000,          //超过10秒后停止定位，默认：5s
                        zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
                    });
                    geolocation.getCurrentPosition(function(status,result){
                        if(status=='complete'){
                            resolve(result)
                        } else 
                            reject(result);
                    });
                })
            })
        },
        showDetailAddress(){
            this.showPopUp('top');
            this.isShowTools = false;
        },
        confirmLocation(){
            this.getCurrentPosition().then(res=>{
                //addressComponent.province city township district  street streetNumber  
                this.detailAddress = res.formattedAddress;
                // console.log(res)
                this.map.setCenter(res.position)
                Toast.succeed('定位成功')
            })
        },
        showPopUp(type) {
            this.$set(this.isPopupShow, type, true)
        },
        hidePopUp(type) {
            this.$set(this.isPopupShow, type, false);
            this.isShowTools = true;
        },
        changeMapStyle(e){
            this.map.setMapStyle(e.target.value);
            this.isMapStylePaneShow = false;
        },
        startTimekeeper(){
            switch(this.currentStatus){
                case 0:  
                    this.history.date = new Date().toLocaleDateString() + " " + (new Date()).toLocaleTimeString();
                    // AMap.plugin('AMap.Geolocation', ()=> {
                    //     var geolocation = new AMap.Geolocation({
                    //         enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    //         timeout: 5000,          //超过10秒后停止定位，默认：5s
                    //         // zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
                    //         panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                    //         zoomToAccuracy:true    
                    //     });
                    //     geolocation.watchPosition(res=>{
                    //         console.log(res);
                    //     })
                    //     // this.intervalHandle = setInterval(()=>{
                    //     //     geolocation.getCurrentPosition((status,result)=>{
                    //     //         if(status=='complete'){
                    //     //             console.log(result);
                    //     //             this.cityUni = result.addressComponent.city;
                    //     //             this.history.pathList.push(result.position);
                    //     //             this.circleMarkerOuter.setCenter(result.position.lng,result.position.lat);
                    //     //             this.circleMarkerInner.setCenter(result.position.lng,result.position.lat);
                    //     //         } else 
                    //     //             console.log('fail');
                    //     //     });
                    //     // },3000)
                    // })  
                    navigator.geolocation.watchPosition(position=>{
                        console.log(position);
                        let positionArr = [position.coords.longitude, position.coords.latitude]
                        // position.lng = position.coords.longitude
                        // position.lat = position.coords.latitude;
                        this.history.pathList.push(positionArr);
                        this.map.setCenter(new AMap.LngLat(positionArr[0], positionArr[1]));
                        // this.circleMarkerOuter.setCenter(positionArr[0], positionArr[1]);
                        // this.circleMarkerInner.setCenter(positionArr[0], positionArr[1]);
                    },error=>{
                        console.log(error)
                    })  
                case 1:
                    this.tripStatus[this.currentStatus].time = (new Date()).getTime();
                    break;
                case 2:
                    this.tripStatus[this.currentStatus].time = this.tripStatus[1].time - this.tripStatus[0].time;
                    this.history.totalTime = this.tripStatus[this.currentStatus].time;
                    // console.log(this.tripStatus)
                    
                    console.log(this.history.pathList)
                    // clearInterval(this.intervalHandle);
                    // this.intervalHandle = null;
                    let distance = 0;
                    for(let i=0; i<this.history.pathList.length-1; ++i){
                        distance += AMap.GeometryUtil.distance(this.history.pathList[i], this.history.pathList[i+1]);
                        // console.log(this);
                        console.log(distance)
                    }
                    // let a = {
                    //     P: 28.01671,
                    //     Q: 121.42818,
                    //     lat: 28.01671,
                    //     lng: 121.42818,
                    // }
                    // distance += AMap.GeometryUtil.distance(this.history.pathList[0], a);
                    this.history.distance = distance;
                    console.log(this.history)

                    // 结束的时候状态要初始化
                    this.currentStatus = -1;
                    this.intervalHandle =  null;
                    this.history.transport = '';
                    this.history.data = '';
                    this.history.pathList = [];
                    this.history.distance = 0;
                    this.history.totalTime = 0;
                    break;
            }
            this.currentStatus = ++this.currentStatus > 2 ? 2 : this.currentStatus; 
        }
    },
    mounted(){
        this.initMap(); 
        this.history.transport = this.$route.params.transport;
    },
    components: {
        'trip-dialog': TripDialog
    }
}
</script>
<style>
body,html,.personaltrip,.personaltrip #homeMapContainer {
    height: 100%;
    width: 100%;
}
.personaltrip {
    position: relative;
    display: flex;
    justify-content: center;
}
.personaltrip .tools {
    position: absolute;
    top: 60px;
    width: 300px;
    margin: 0 auto;
    z-index: 9999;
    padding: 10px;
    display: flex;
    box-shadow: 0px 5px 8px rgba(0,0,0,.3);
    background-color: white;
}
.personaltrip .tools>div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.personaltrip .tools>div:not(:last-child){
    border-right: 1px solid grey;
}
.personaltrip .tools>div>img {
    height: 20px;
    margin-right: 8px;
}
.personaltrip .tools>div>span {
    padding-right: 8px;
    font-size: 14px;
}
.personaltrip .md-example-popup-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    padding: 20px 40px 40px;
}
.personaltrip .addressTitle {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid grey;
}
.personaltrip .addressDetail {
    margin-top: 10px;
    font-size: 14px;
    color: grey;
}

.personaltrip .mapStyle {
    position: absolute;
    z-index: 11111;
    display: flex;
    align-items: center;
    background-color: white;
    box-sizing: border-box;
    width: 100%;
    padding: 30px 40px;
}
.personaltrip .mapTitle {
    color: grey;
    width: 50px;
}
.personaltrip .mapStyle .mapColor {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
}
.personaltrip .mapStyle .mapColor>div {
    box-sizing: border-box;
    padding: 10px;
}
.personaltrip .circle {
    outline: none;
    border-style: none;
    border-radius: 50%;
    background-color: #55C595;
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    box-shadow: 0px 10px 20px rgba(0,0,0,.4);
}
.personaltrip .btnContainer {
    position: absolute;
    top: 70%;
    border-radius: 50%;
    box-shadow: 0px 10px 20px rgba(255,255,255,.4);
}

/* // 落叶归根 */
</style>

