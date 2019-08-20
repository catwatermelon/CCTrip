<template>
    <div class="overview">
        <!-- <trip-header></trip-header> -->
        <md-landscape v-model="showPic">
            <img :src="imgPreview">
            <input type="file" name="" id="" @change="choiseAvatar">
            <input type="button" value="确认上传" @click="uploadAvatar">
        </md-landscape>
        <tab-wrapper class="accountWrapper">
            <template v-slot:title>
                <div class="accountInfo">
                    <img @click="showPic=true" class="photo" :src="user.avatar" alt="" >
                    <div class="userinfo">
                        <p class="name">{{user.username}}</p>
                        <span>账号：</span><span>{{user.accountNumber}}</span>
                    </div>
                </div>
            </template>
            <template v-slot:content>
                <div v-for="tab in socialList" :key="tab.tabName"> 
                    <p>{{tab.total}}</p>
                    <p>{{tab.tabName}}</p>
                </div>
            </template>
        </tab-wrapper>
        <tab-wrapper>
            <template v-slot:title>
                <p>我的信息</p>
            </template>
            <template v-slot:content>
                <div v-for="item in userinfo" :key="item.key">
                    {{item.key}}: {{item.value}}
                </div>
            </template>
        </tab-wrapper>
        <div ref='chartWrapper' id="chartWrapper"></div>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import TabWrapper from '../components/TabWrapper'
import {Toast} from 'mand-mobile'
export default {
    name: 'overview',
    data(){
        return {
            socialList: [
                { total: 10, tabName: '好友' },
                { total: 23, tabName: '关注' },
                { total: 109, tabName: '粉丝' },
                { total: 2, tabName: '圈子' }
            ],
            userinfo: [
                { key: '性别', value: '男'},
                { key: '年龄', value: 18},
                { key: '身份', value: '开发者'},
                // { key: '', value: '男'},
            ],
            showPic: false,
            imgPreview: require('../assets/3.jpg'),
            user: {
                accountNumer: 'NULL',
                avatar: require('../assets/3.jpg'),
                username: 'NULL'   
            }
        }
    },
    methods:{
        init(){
            var that = this;
            var myChart = this.$echarts.init(document.getElementById('chartWrapper'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '出行里程'
                },
                xAxis: {
                    data: ["徒步","跑步","公交地铁","出租车","自驾"]
                },
                yAxis: {
                    splitNumber: 6
                },
                series: [{
                    name: '公里',
                    type: 'bar',
                    // boundaryGap: ['20%', '20%'],
                    data: [5, 20, 36, 10, 14],
                    color: 'lightskyblue',
                    itemStyle: {
                        normal: {
                            color: new that.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#456AFC" // 0% 处的颜色
                            }, {
                                offset: 0.6,
                                color: "lightskyblue" // 60% 处的颜色
                            }, {
                                offset: 1,
                                color: "lightblue" // 100% 处的颜色
                            }], false)
                        }
                    },
                    barWidth : 30
                }],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            // console.log(myChart)
        },
        choiseAvatar(event){
            // console.log(event.target.files[0]);
            var reader = new FileReader();
            var that = this;
            //使用该对象读取file文件
            reader.readAsDataURL(event.target.files[0]);
            //读取文件成功后执行的方法函数
            reader.onload=function(e){
            //读取成功后返回的一个参数e，整个的一个进度事件
                // console.log(this.result);
                that.imgPreview = this.result;
            }
        },
        uploadAvatar(){
            this.$axios.post('/api/uploadAvatar',{
                avatar: this.imgPreview
            }).then(res=>{
                if(res){
                    Toast.succeed('上传成功')
                    this.user.avatar = this.imgPreview;
                }
                else    
                    Toast.error('上传失败')
                this.showPic = false;
            })
        }
    },
    mounted(){
        this.init();
    },
    created(){
        this.$axios.get('/api/userinfo').then(res=>{
            var user = res.data.data;
            this.$nextTick(()=>{
                this.user = user;
                this.imgPreview = user.avatar;
                console.log(user);
            })
        })
    },
    components:{
        'tab-wrapper': TabWrapper,
        'trip-header': Header
    }
}
</script>
<style>
.overview {
    box-sizing: border-box;
}
.overview .name{
    font-weight: bold;
    font-size: 16px;
}
.accountWrapper {
    background: url(../assets/overviewBg2.jpg) 0 0px no-repeat;
    background-size: cover;
    color: white;
}
.accountWrapper .photo {
    margin: 20px 0px 4px;
    height: 60px;
    /* font-size: 0; */
    border: 1px solid white;
    box-sizing: border-box;
    width: 60px;
    border-radius: 50%;
}
.accountInfo .userinfo {
    color: black;
}

.accountWrapper .accountInfo {
    display: flex;
    box-sizing: border-box;
    padding-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    text-align: center; 
    background-color: rgba(255,255,255,.4);
}
.accountWrapper .content {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: rgba(0,0,0,.5);
}


/* echarts */
#chartWrapper {
    box-sizing: border-box;
    padding: 0px 10px;
    border: 1px solid rgba(0,0,0,.1);
    height: 320px;
    width: 100%;
    overflow: hidden;
}
.md-landscape-body {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 300px; */
}
.md-landscape-content {
    width: 80%;
    color: #666;
}
.overview input {
    border: none;
    outline: none;
    width: 64px;
    height: 22px;
    padding: 1px 6px;
}
</style>
