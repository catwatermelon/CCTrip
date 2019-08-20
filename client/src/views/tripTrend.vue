<template>
    <div class="triptrend">
        <user-header title="出行趋势" tips="此前一周各种出行方式的趋势" class="header"></user-header>
        <div class="chartsWrapper">
            <div id='personalChartWrapper'></div>
            <div id="busChartWrapper"></div>
        </div>
    </div>    
</template>
<script>
import Scroll from '../components/Scroll.vue'
import UserHeader from '../components/UserHeader.vue'
export default {
    name: 'triptrend',
    data(){
        return {

        }
    },
    methods:{
        init(){
            var that = this;
            var transportChart = this.$echarts.init(document.getElementById('busChartWrapper'));
            // var option = ;
            // 使用刚指定的配置项和数据显示图表。
            transportChart.setOption({
                title: {
                    text: '公共交通'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['步行','单车','出租','公交'],
                    top: 28
                },
                grid: {
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    // type: 'category',
                    boundaryGap: false,
                    data: ['20日','21日','22日','23日','24日','25日','26日']
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        name:'步行',
                        type:'line',
                        data:[120, 132, 101, 134, 146, 128, 120]
                    },
                    {
                        name:'单车',
                        type:'line',
                        data:[220, 182, 191, 234, 200, 210, 190]
                    },
                    {
                        name:'出租',
                        type:'line',
                        data:[150, 232, 201, 154, 130, 170, 210]
                    },
                    {
                        name:'公交',
                        type:'line',
                        data:[320, 332, 301, 334, 250, 310, 280]
                    }
                ]
            });


            var personalChart = this.$echarts.init(document.getElementById('personalChartWrapper'));
            // 使用刚指定的配置项和数据显示图表。
            personalChart.setOption({
                title: {
                    text: '私人出行'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['步行','跑步','骑行','自驾'],
                    top: 28
                },
                grid: {
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    // type: 'category',
                    boundaryGap: false,
                    data: ['20日','21日','22日','23日','24日','25日','26日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'步行',
                        type:'line',
                        data:[120, 132, 101, 134, 146, 128, 120]
                    },
                    {
                        name:'跑步',
                        type:'line',
                        data:[220, 182, 191, 234, 200, 210, 190]
                    },
                    {
                        name:'骑行',
                        type:'line',
                        data:[150, 232, 201, 154, 130, 170, 210]
                    },
                    {
                        name:'自驾',
                        type:'line',
                        data:[320, 332, 301, 334, 250, 310, 280]
                    }
                ]
            });
        }
    },
    mounted(){
        this.init();
    },
    components: {
        'user-header': UserHeader
    }
}
</script>
<style>
.triptrend {
    padding: 20px 20px;
    height: 100%;
    box-sizing: border-box;
}
.chartsWrapper {
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
}
#personalChartWrapper,#busChartWrapper {
    box-sizing: border-box;
    padding: 10px;
    flex: 1;
}
</style>
