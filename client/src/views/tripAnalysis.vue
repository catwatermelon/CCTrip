<template>
    <div class="tripanalysis">
        <user-header title="数据分析" tips="针对出行里程、行程类别、出行方式绘制的几种数据分析图" class="header"></user-header>    
        <div id="pieChart"></div>
        <div id="lineChart"></div>
    </div>    
</template>
<script>
import UserHeader from '../components/UserHeader.vue'
export default {
    name: 'tripanalysis',
    data(){
        return {

        }
    },
    methods:{
        init(){
            //饼图初始化
            var analysisPieChart = this.$echarts.init(document.getElementById('pieChart'));
            analysisPieChart.setOption({
                title : {
                    text: '出行方式分布图',
                    x:'center',
                    top: 40
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    left: 10,
                    top: 40,
                    // bottom: 20,
                    data: ['步行','跑步','单车/电车','自驾/出租','公交/地铁'],

                    selected: {
                        '步行': true,
                        '跑步': true,
                        '单车/电车': true,
                        '自驾/出租': true,
                        '公交/地铁': true
                    },
                    zlevel: -1

                },
                series : [
                    {
                        name: '出行方式',
                        type: 'pie',
                        radius : '45%',
                        center: ['50%', '70%'],
                        data: [
                            {name:'步行',value:12},
                            {name:'跑步',value:22},
                            {name:'单车/电车',value:32},
                            {name:'自驾/出租',value:42},
                            {name:'公交/地铁',value:42},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });


            //折线图初始化
            var analysisLineChart = this.$echarts.init(document.getElementById('lineChart'));
            analysisLineChart.setOption({
                color:  ['#5793f3', '#d14a61', '#675bba'],
                title : {
                    text: '行程频率分布图',
                    // x:'center'
                    left: 0,
                    top: 30
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                grid: {
                    bottom: 20,
                    y: 120,
                    x: 45,
                    x2: 80
                    // x: 'center'
                    // left: 20
                    // right: '20%'
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    },
                    top:30
                },
                legend: {
                    data:['出行','交通','速度'],
                    // orient: 'vertical',
                    // right: 20,
                    top: 60
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '出行',
                        min: 0,
                        // max: 250,
                        position: 'right',
                        axisLine: {
                            lineStyle: {
                                color: '#5793f3'
                            }
                        },
                        axisLabel: {
                            formatter: '{value} 次'
                        }
                    },
                    {
                        type: 'value',
                        name: '交通',
                        min: 0,
                        // max: 250,
                        position: 'right',
                        offset: 50,
                        axisLine: {
                            lineStyle: {
                                color: '#d14a61'
                            }
                        },
                    },
                    {
                        type: 'value',
                        name: '速度（km/s）',
                        min: 0,
                        // max: 25,
                        position: 'left',
                        axisLine: {
                            lineStyle: {
                                color: '#675bba'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name:'出行',
                        type:'bar',
                        data:[30, 50, 25, 45, 63, 12, 20, 24, 30, 65, 20, 62]
                    },
                    {
                        name:'交通',
                        type:'bar',
                        yAxisIndex: 1,
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    },
                    {
                        name:'速度',
                        type:'line',
                        yAxisIndex: 2,
                        data: [5,12,10,9,20,17,15,5,12,10,9,20]
                    }
                ]
            })
        }
    },
    mounted(){
        this.init();
    },
    components: {
        'user-header':UserHeader    
    }
}
</script>
<style>
.tripanalysis {
    height: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
}
.tripanalysis #pieChart, .tripanalysis #lineChart {
    /* height: 300px; */
    box-sizing: border-box;
    padding: 10px;
    flex: 1;
}
</style>
