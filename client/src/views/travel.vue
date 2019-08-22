<template>
    <div class="travel" id="travel">   
        <div id="mapContainer"></div>
        <md-drop-menu :data="tripType" v-show="showSelect" @change="selected"/>  
        <div class="dialog" v-show="!showSelect">
            <div class="start">
                <div class="startPos">
                   <p class="title">出发点</p>
                   <input id='start' type="text"  @input="updatePos($event,'start')" >
                </div>
                <div class="tripType">
                    <button @click="toggleTripType">{{transportType}}</button>
                </div>
            </div>
            <div class="endContainer">
                <div class="endPos">
                    <p class="title">目的地</p>
                    <input id='end' type="text"  @input="updatePos($event,'end')" >
                </div>
                <div class="confirm">
                    <button type='button' @click="generateTripPlan">搜索</button>
                </div>
            </div>
        </div>
        <div id="output" style="left:0!important" v-show="listTest && listTest.length"></div>
        <div class="planControl" v-show="showPlanControl">
            <p>方案详情</p>
            <md-icon
                name="arrow-down"
                size="xs"
                class="arrow-icon"
                @click="showPlan = !showPlan"
            ></md-icon>
            <button type='button' class="save" @click="showSavePlanPanel">保存</button>
        </div> 
        <md-popup v-model="isPopupShow.center">
            <div class="md-example-popup md-example-popup-center">
                <md-icon
                name="close"
                size="xs"
                @click.native="hidePopUp('center')"
                class="closePlan"
                ></md-icon>
                <p class="popTitle">本次出行</p>
                <div class="popItem">
                    <p class="popLeft">交通工具</p>
                    <p class="popRight">{{transportType}}</p>
                </div>
                <div class="popItem">
                    <p class="popLeft">出发地</p>
                    <p class="popRight">{{trip.start.startLocation}}</p>
                </div>
                <div class="popItem">
                    <p class="popLeft">目的地</p>
                    <p class="popRight">{{trip.end.endLocation}}</p>
                </div>
                <div class="popItem" v-if="trip.type=='Transfer'">
                    <p class="popLeft">方案</p>
                    <input class="popRight" type="number"  v-model="trip.planChoise">
                </div>
                <div class="popItem">
                    <p class="popLeft">花费</p>
                    <input class="popRight" type="number" v-model="trip.cost">
                </div>
                <div class="popItem">
                    <p class="popLeft">日期</p>
                    <p class="popRight">{{trip.date | formatTimestampToDate}}</p>
                </div>
                <div class="confirmPlan">
                    <button @click="savePlan">确认保存</button>
                </div>
            </div>
        </md-popup>
        <transition name="fade">
            <div class="planOutsideContainer" v-show="showPlan">
                <scroll-view class="scrollWrapper" >
                    <div id="panel">
                        <div></div>
                    </div>
                </scroll-view>
            </div>   
        </transition>
    </div>    
</template>
<script>
import Scroll from '../components/Scroll.vue'
import {Toast} from 'mand-mobile'
import DataFormat from '../mixin/date'
export default {
    name: 'home',
    mixins: [DataFormat],
    data(){
        return {
            tripType: [
                {
                    text: '选择出行方式',
                    options: [
                        { value: 'Transfer',text: '公交/地铁'},
                        { value: 'Driving', text: '出租车'},
                        { value: 'Walking',text: '步行'},
                        { value: 'Riding',text: '骑行'}
                    ],
                },
            ],
            trip: {
                start: {
                    lng: '',
                    lat: '',
                    adcode: '',
                    startLocation: ''
                },
                end: {
                    lng: '',
                    lat: '',
                    adcode: '',
                    endLocation: ''
                },
                type: 'Transfer',
                planList: [],
                planDistance: [],
                planChoise: 0,
                distance: 0,
                cost: 0,
                pathList: [],
                date: ''
            },
            transportType: '公交/地铁',
            citycode: "0591",

            showSelect: false,
            showPlan: false,
            showPlanControl: false,

            listTest: [],
            map: null,
            geocoder: null,
            circle: null,
            transport: null,
            autoCompleteStart: null,
            autoCompleteEnd:null,
            isPopupShow: {}
        }
    },
    methods:{
        init(){
            var that = this;
            //获取当前经纬度信息
            AMap.plugin('AMap.Geolocation', function() {
                var geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 3000,          //超过10秒后停止定位，默认：5s
                });
                geolocation.on('complete',(GeolocationResult)=>{
                    if(!that.circle){
                        that.circle = new AMap.CircleMarker({
                            center: GeolocationResult.position,
                            radius: 30, //半径
                            strokeColor: "lightblue",
                            strokeWeight: 6,
                            strokeOpacity: 0.2,
                            fillOpacity: 0.4,
                            fillColor: '#1791fc',
                            zIndex: 50,
                        })
                        that.circle.setMap(that.map)
                    } else {
                        // that.circle.setMap();
                        that.circle.setCenter(GeolocationResult.position);
                    }
                })
                Toast.loading('定位中...')
                geolocation.getCurrentPosition(function(status,result){
                    if(status=='complete'){
                        Toast.succeed('定位成功');  
                        var pos = result.position;
                        that.map = new AMap.Map('mapContainer', {
                            zoom: 16,//级别
                            center: [pos.lng,pos.lat],//中心点坐标
                        });
                        //定位按钮
                        that.map.addControl(geolocation);
                        //设置所在城市
                        that.citycode = result.addressComponent.citycode
                        //根据所在城市设置关键字搜索的范围
                        AMap.plugin('AMap.Geocoder', ()=> {
                            that.geocoder = new AMap.Geocoder({
                                city: that.citycode, //设为当前所在城市，默认：“全国”
                            })
                        })
                        //设置起始参数
                        AMap.plugin('AMap.Autocomplete',function(){
                            function setPosition(startOrEnd){
                                var autoOptions = {
                                    city: that.citycode,
                                    input: startOrEnd,
                                    output: 'output'
                                }
                                let propertyName = 'autoComplete' + (startOrEnd.toUpperCase())[0] + startOrEnd.substring(1);
                                that[propertyName] = new AMap.Autocomplete(autoOptions);
                                
                                that[propertyName].on('select',function(res){
                                    var poi = res.poi;
                                    var location = poi.location;
                                    that.trip[startOrEnd][startOrEnd + 'Location'] = poi.name;
                                    that.trip[startOrEnd].adcode = poi.adcode;
                                    that.trip[startOrEnd].lng = poi.location.lng;
                                    that.trip[startOrEnd].lat = poi.location.lat;
                                    //将地图中心点设置为开始位置
                                    startOrEnd == 'start' && that.map && that.map.setCenter([that.trip.start.lng,that.trip.start.lat]);
                                });
                            }
                            //  起始点、目的地初始化
                            setPosition('start');
                            setPosition('end');
                        });
                        that.map.on('complete', function(){
                            Toast.succeed('地图加载完成');
                            setTimeout(() => {
                                Toast.hide()
                            }, 1500)
                        });
                    } else
                        console.log(result);
                });
               
            })  
        },
        //点击搜索选项时触发
        selected(barItem, listItem){
            this.trip.type = listItem.value;
            this.transportType = listItem.text;
            this.showSelect = false;
        },
        //如果是通过纯输入来确定关键字的话，就不会触发AutoComplete的select的方法
        updatePos(event,tag){
            if(!this.geocoder)
                return;
            var startOrEnd = tag == 'start' ? 'start' : 'end';
            this.showPlan = this.showPlanControl = false;
            this.trip[startOrEnd][startOrEnd+'Location'] = event.target.value;
            //根据地址进行正向地理编码（地址->坐标）
            this.geocoder.getLocation(event.target.value, (status, result)=> {
                if (status === 'complete' && result.geocodes.length) {
                    var lnglat = result.geocodes[0].location;
                    this.trip[startOrEnd].lng = lnglat.lng;
                    this.trip[startOrEnd].lat = lnglat.lat;
                    this.trip[startOrEnd].adcode = result.geocodes[0].adcode;
                    if(tag == 'start')
                        this.map.setCenter(lnglat);
                }
            });
        },
        toggleTripType(){
            this.showSelect = true
            this.showPlan = false;
            this.showPlanControl = false;
        },
        //显示保存面板
        showSavePlanPanel(){
           
            // this.trip.date = this.formatDateToDatetime(new Date().getTime());
            // .toLocaleDateString() + " " + (new Date()).toLocaleTimeString();
            this.showPlan = false;
            this.showPopUp('center'); 
        },
        savePlan(){
            let history = {};
            history.start = this.trip.start.startLocation;
            history.end = this.trip.end.endLocation;
            history.transport = this.transportType;
            history.cost = this.trip.cost;
            history.tripDate = this.trip.date;
            history.endTime = new Date().getTime();
            if(this.trip.type == 'Transfer'){   
                history.pathList = this.trip.planList[this.trip.planChoise];
                history.distance = this.trip.planDistance[this.trip.planChoise];
            }
            else {
                history.pathList = this.trip.pathList;
                history.distance = this.trip.distance;
            }
            history.pathList = JSON.stringify(history.pathList);
            // console.log(history.pathList);
            this.$axios.post('/api/history',history).then(res=>{
                if(res.data.status){
                    Toast.succeed('数据上传成功');
                    return;
                }
                Toast.error('数据上传失败');
            })
            // this.$store.commit('addHistory',history);
            this.hidePopUp('center');
        },
        //生成出行路径集合
        generateTripPathList(result, type){
            switch(type){
                case 'Driving': 
                case 'Walking':
                case 'Riding':
                    this.trip.distance = result.routes[0].distance;
                    let property = type == 'Riding'? 'ride' : 'step';
                    result.routes[0][property+'s'].forEach(property=>{
                        this.trip.planDistance.push(property.distance);
                        property.path.forEach(item=>{
                            this.trip.pathList.push(item);
                        })
                    })
                    break;
                case 'Transfer':
                    result.plans.forEach((plan,index)=>{
                        this.trip.planList[index] = [];
                        this.trip.planDistance.push(plan.distance);
                        plan.path.forEach(item=>{
                            this.trip.planList[index].push(item);
                        })
                    })
                    break;
            }
            // console.log(this.trip.pathList);
        },
        generateTripPlan(){
            this.trip.date = new Date().getTime();
            var that = this;
            var locationArr = [
                {keyword:this.trip.start.startLocation,city:this.trip.start.adcode},
                {keyword: this.trip.end.endLocation,city:this.trip.end.adcode}
            ]
            this.transport && this.transport.clear();
            this.trip.pathList = [];
            this.showPlanControl = false;
            //清除所有覆盖物
            // this.map.clearMap();
            
            function successedInfo(status, result) {
                // result即是对应的公交路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_TransferResult
                if (status === 'complete') {
                    that.trip.cost = (result.plans && result.plans[0].cost) || 0;
                    that.showPlan = true;
                    that.showPlanControl = true;
                    //生成路径集合
                    that.generateTripPathList(result, that.trip.type);
                    console.log('绘制路线完成')
                } else {
                    console.log('数据查询失败' + result)
                }
            }
            AMap.plugin(`AMap.${this.trip.type}`,()=>{
                var transOptions = {
                    map: this.map,
                    city: this.citycode,
                    cityd: this.citycode,
                    panel: 'panel'
                };
                //构造换乘类
                this.transport = new AMap[this.trip.type](transOptions);
                //根据起、终点名称查询换乘路线
                this.transport.search(locationArr,successedInfo)
            })
        },
        showPopUp(type) {
            this.$set(this.isPopupShow, type, true)
        },
        hidePopUp(type) {
            this.$set(this.isPopupShow, type, false)
        },
    },
    watch: {
        $route(to,from){
            Toast && Toast.hide();
        }
    },
    created(){
        this.init();
    },
    components: {
        ScrollView: Scroll
    }
}
</script>

<style>
.travel {
    overflow: hidden;
}
.travel,#mapContainer {
    height: 100%;
    width: 100%;
    position: relative;
}
.travel .dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    width: 100%;
    display: flex;
    height: 120px;
    box-sizing: border-box;
    flex-direction: column;
    box-shadow: 0px 6px 12px rgba(0,0,0,.2);
}
.travel .dialog::after {
    display: block;
    content: '';
    height: 0;
    clear: both;
}
.travel .start, .travel .endContainer {
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-align: left;
}

.travel .dialog button {
    width: 90px;
    outline: none;
    padding: 10px;
    display: block;
    box-sizing: border-box;
    border-style: none;
    border-radius: 5px;
}
.travel .title {
    color: grey;
    font-size: 12px;
    margin-bottom: 6px;
}
.travel input {
    width: 95%;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    border-color: transparent;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.travel .startPos,.travel .endPos {
    flex: 1;
}
.travel .tripType button {
    border: 1px solid #3086F5;
    background-color: white;
    color: #3086F5;
}
.travel .confirm button {
    background-color: #3086F5;
    color: white;
}
.travel .md-cell-item-body {
    min-height: 40px;
    border-top: 1px solid rgba(0,0,0,.051);
    padding: 10px!important;
}
.travel .md-drop-menu-list{
    padding-top: 60px;
}
.travel .md-drop-menu-bar {
    padding: 10px;
    height: 40px;
}
#output {
    position: absolute;
    top: 123px;
    left: 0px!important;
    right: 0;
    padding: 4px 10px;
    background-color: rgba(255,255,255, 0.85);
} 
#output>div{
    flex: 1;
    line-height: 1.5em;
    font-size: 14px;
}
.scrollWrapper {
    position: absolute;
    z-index: 8000;
    height: 100%;
    right: 0;
    left: 0;
    overflow: hidden;
    background-color: transparent;
}
.planControl {
    position: absolute;
    display: flex;
    top: 120px;
    width: 100%;
    /* left: 0;
    right: 0; */

    align-items: center;
    height: 35px;
    padding: 0px 10px;
    box-sizing: border-box;
    background-color: rgb(231, 245, 250);
    display: flex;
    align-items: center;
    justify-content: center;
}
.planOutsideContainer {
    position: absolute;
    top: 155px; 
    left: 0;
    right: 0;
    bottom:0;
    background-color: rgba(255,255,255,.8);
}
.arrow-icon {
    position: absolute;
    padding: 3px 10px; 
    /* left: 50%; */
    color: #2F85F4;
    box-sizing: border-box;
    /* transform: translate(-50%); */
}
.save {
    margin-left: auto;
    border-style: none;
    outline: none;
    color: white;
    border-radius: 3px;
    padding: 5px 10px; 
    background-color: #2F85F4;
}

/* 乘车计划的过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  top: 100%;
}

/* 计划弹出层 */
.md-example-popup {
    background-color: white;
    padding-top: 10px;
    width: 280px;
    display: flex;
    flex-direction: column;
}
.popTitle {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
.popItem {
    padding: 8px 20px;
    display: flex;
    justify-content: space-between;
}
.popLeft {
    color: grey;
    width: 60px;
    font-size: 14px;
}
.popRight {
    text-align: right;
    font-size: 14px;
}
.closePlan {
    margin-left: auto;
    margin-right: 10px;
}
.confirmPlan {
    margin-top: 20px;
    border-top: 1px solid rgba(0,0,0,.2);
}
.md-toast-content {
    padding: 5px 20px!important;
}
.confirmPlan button {
    width: 100%;
    padding: 10px;
    outline: none;
    border-style: none;
    background-color: transparent;
    color: #2F86F6;
    font-size: 16px;
}
a.amap-logo,.amap-copyright,.amap-mcode,.amap-call,a.blue {
    display: none!important;
}
</style>