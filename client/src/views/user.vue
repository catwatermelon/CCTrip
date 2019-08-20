<template>
    <div class="user">
        <div class="bg">
            <div class="img"></div>
        </div>
        <div class="serviceContainer">
            <tab-wrapper>
                <template v-slot:title>
                    <div class="accountInfo">
                        <img class="photo" :src="user.avatar" alt="">
                        <div>
                            <p class="name">{{$store.getters.getUsername}}</p>
                            <span>账号：</span><span>{{$store.getters.getAccountNumber}}</span>
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
                    <div v-for="item in personalList" :key="item.tabName"  @click="linkTag(item.name)">
                        <img :src="item.icon" alt="">
                        <p>{{item.tabName}}</p>
                    </div>
                </template>
            </tab-wrapper>

            <tab-wrapper>
                <template v-slot:title>
                    <p>更多功能</p>
                </template>
                <template v-slot:content>
                    <div v-for="item in otherList" :key="item.tabName">
                        <img :src="item.icon" alt="">
                        <p>{{item.tabName}}</p>
                    </div>
                </template>
            </tab-wrapper>
        </div>
    </div>    
</template>

<script>
import Scroll from '../components/Scroll.vue'
import TabWrapper from '../components/TabWrapper.vue'
export default {
    name: 'user',
    data(){
        return {
            socialList: [
                { total: 10, tabName: '好友' },
                { total: 23, tabName: '关注' },
                { total: 109, tabName: '粉丝' },
                { total: 2, tabName: '圈子' }
            ],
            personalList: [
                { icon: require('../assets/xinxizonglan.png'), tabName: '信息总览', name:'tripOverview'},
                { icon: require('../assets/qushi.png'), tabName: '出行趋势', name:'tripTrend'},
                { icon: require('../assets/shujufenxi.png'), tabName: '数据分析', name: 'tripAnalysis'},
                { icon: require('../assets/chengjiu-yixuan.png'), tabName: '成就殿堂'}
            ],
            otherList: [
                { icon: require('../assets/jihua-.png'), tabName: '出行计划'},
                { icon: require('../assets/first.png'), tabName: '好友排名'},
                { icon: require('../assets/lukuang.png'), tabName: '路况分析'},
                { icon: require('../assets/ketang.png'), tabName: '运动课堂'},
                { icon: require('../assets/tizhongguanli.png'), tabName: '体重管理'},
                { icon: require('../assets/feedback.png'), tabName: '反馈'}
            ],
            user: {
                accountNumber: '',
                username: ''
            }
        }
    },
    methods: {
        linkTag(name){
            this.$router.push({name});
        }
    },
    created(){
        this.$axios.get('/api/userinfo').then(res=>{
            // this.$store.commit('SET_LOGIN_STATUES',true);
            // this.$store.commit('SET_TOKEN','Bearer ' + token);
            this.$store.commit('SET_USER',res.data.data);
            this.user = res.data.data;     
        });
    },
    components: {
        'scroll-view': Scroll,
        'tab-wrapper': TabWrapper
    }
}
</script>

<style>
.user {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.user .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
.user .bg .img {
    height: 28%;
    background: url(../assets/travel.jpg) 0px -100px no-repeat;
    background-size: cover;
}

.serviceContainer {
    height: 80%;
    width: 86%;
    margin-bottom: 30px;
    background-color: white;
}

/* 账号信息 */
.user .accountInfo {
    display: flex;
    align-items: center;
}
.user .photo {
    margin: 12px 20px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
}
.user .name {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: bold;
}
</style>
