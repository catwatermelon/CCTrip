<template>
    <div class="historyDetail">
        <trip-dialog :history="history"></trip-dialog>
        <div id="historyMapContainer"></div>
    </div>
</template>
<script>
import TripDialog from '../components/TripDialog.vue'
import DataFormat  from '../mixin/date'
import { Toast } from 'mand-mobile'
export default {
    name: 'historydetail',
    mixins: [DataFormat],
    data(){
        return {
            history: {
                start: '',
                end: '',
                transport: '',
                cost: 0,
                tripDate: '',
                pathList: [],
                endTime: 0
            },
            map: null,
            polyline: null
        }
    },
    methods:{
        initMap(){
            var that = this;
            // this.initData(this.$route.params.id);
            this.map = new AMap.Map('historyMapContainer', {
                zoom: 16,//级别
                center: [ that.history.pathList[0].lng, that.history.pathList[0].lat],//中心点坐标
            });
            var startIcon = new AMap.Icon({
                // 图标尺寸
                size: new AMap.Size(25, 34),
                // 图标的取图地址
                image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
                // 图标所用图片大小
                imageSize: new AMap.Size(135, 40),
                // 图标取图偏移量
                imageOffset: new AMap.Pixel(-9, -3)
            });
            new AMap.Marker({
                map: that.map,
                icon: startIcon,
                position: that.history.pathList[0]
            });
            // var endIcon = new AMap.Icon({
            //     size: new AMap.Size(25, 34),
            //     image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
            //     imageSize: new AMap.Size(135, 40),
            //     imageOffset: new AMap.Pixel(-9, -3)
            // });

            // // 将 icon 传入 marker
            // var endMarker = new AMap.Marker({
            //     map: that.map,
            //     position: that.pathList[that.pathList.length-1],
            //     icon: endIcon,
            //     // offset: new AMap.Pixel(-13, -30)
            // });

            this.polyline = new AMap.Polyline({
                map: that.map,
                path: that.history.pathList,
                showDir: true,
                // borderWeight: 20, // 线条宽度，默认为 1
                strokeWeight: 6,
                strokeColor: '#0091FF', // 线条颜色
                lineJoin: 'round', // 折线拐点连接处样式
            })
            // this.map.on('complete',()=>{
            //     this.map.setFitView();
            // })
        },
        initData(index){
            return new Promise((resolve,reject)=>{
                Toast.loading('加载中...')
                this.$axios.get(`/api/getHistoryById`,{
                    params:{id:parseInt(this.$route.params.id)+1}
                }).then(res=>{
                    Toast.succeed('载入成功')
                    if(res.data.status){
                        resolve(res.data.data);
                    } 
                }).catch(error=>{
                    console.log(error);
                })
            })
        }
    },
    watch: {
        $route(to,from){
            if(to.name == 'historyDetail'){
                this.map && this.map.remove(this.polyline);
                this.initData().then(res=>{
                    this.history = res;
                    this.history.pathList = JSON.parse(this.history.pathList);
                    this.map.setCenter(this.history.pathList[0]);
                    this.polyline = new AMap.Polyline({
                        map: this.map,
                        path: this.history.pathList,
                        showDir: true,
                        borderWeight: 3, // 线条宽度，默认为 1
                        strokeWeight: 6,
                        strokeColor: '#0091FF', // 线条颜色
                        lineJoin: 'round' // 折线拐点连接处样式
                    }) 
                })
                
                // this.map && this.map.setFitView();
            }
        }
    },
    mounted(){
        this.initData().then(res=>{
            this.history = res;
            // this.history.tripDate = this.history.tripDate;
            // this.history.tripDate = this.formatTimestampToDate(this.history.tripDate);
            this.history.pathList = JSON.parse(this.history.pathList);
            this.initMap();
        })
    },
    components: {
        'trip-dialog': TripDialog
    }
}
</script>
<style>
.historyDetail, #historyMapContainer {
   height: 100%;
}
</style>
