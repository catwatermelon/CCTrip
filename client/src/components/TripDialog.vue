<template>
    <div class="tripdialog">
        <div class="base">
            <span>{{history.transport}}</span><span>{{history.tripDate | formatTimestampToDate | getFuzzyTime}}</span>
        </div>
        <p class="distance" v-if="history.transport == '骑行' || history.transport == '步行' || history.transport == '跑步' || history.transport == '徒步'">{{history.distance/1000}}<span>公里</span></p>
        <p v-else>{{history.start}}&nbsp;&nbsp;&nbsp;<span><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 3235 2" width="32" height="32" t="1565517293363" p-id="5244" version="1.1"><path class="selected" d="M 3229.53 941.243 a 187.716 187.716 0 0 0 -58.5352 -68.6274 l -117.07 -92.8489 L 2117.36 43.0314 C 2018.45 -39.7252 1947.81 0.643887 1972.03 131.843 l 125.144 649.942 H 121.107 a 121.107 121.107 0 1 0 0 242.214 h 2991.35 c 94.8673 0 133.218 -34.3137 117.07 -82.7566 Z" p-id="5245" data-spm-anchor-id="a313x.7781069.0.i0" /></svg></span>&nbsp;&nbsp;{{history.end}}</p>
        <div class="tripinfo">
            <div v-if="history.transport == '骑行' || history.transport == '步行' || history.transport == '跑步' || history.transport == '徒步'">
                <p>{{history.endTime | calTimeDifference(history.tripDate)}}</p>
                <p>总计时间</p>
            </div>
            <div v-else>
                <p>{{history.tripDate | formatTimestampToDate | getAccurateTime}}</p>
                <p>出发时间</p>
            </div>
            <!-- <div v-if="history.transport == '骑行' || history.transport == '步行' || history.transport == '跑步' || history.transport == '徒步'">
                <p>{{history.cost}}</p>
                <p>平均配速(km/h)</p>
            </div> -->
            <div >
                <p>{{history.cost}}</p>
                <p>行程花费(元)</p>
            </div>
            <div>
                <p>{{history.distance/1000}}</p>
                <p>里程(km)</p>
            </div>
        </div>
    </div>
</template>
<script>
import DataFormat from '../mixin/date'
export default {
    name: 'tripdialog',
    mixins: [DataFormat],
    props: {
        history: {
            type: Object
        }
    }
}
</script>
<style>
.tripdialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 9999;
    box-shadow: 0px 6px 10px rgba(0,0,0,.2);
    padding: 15px 20px;
}
.tripdialog .base {
    display: flex;
    justify-content: space-between;
}
.tripdialog .base span {
    font-size: 14px;
    color: grey;
}
.tripdialog>p {
    margin: 10px 10px 20px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}
.tripdialog .tripinfo {
    display: flex;
    justify-content: center;
}
.tripdialog .tripinfo>div {
    text-align: center;
    flex: 1;
}
.tripdialog .tripinfo>div>p:first-child  {
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0px 4px;
}
.tripdialog .distance {
    font-size: 55px;
    font-style: italic;
    font-weight: bold;
    color: lightskyblue;
}
</style>
