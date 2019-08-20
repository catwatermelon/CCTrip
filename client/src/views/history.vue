<template>
    <div class="history">
        <div class="tagTitle">
            <p>出行历史</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 970" width="24" height="24" t="1565185875825" p-id="1222" version="1.1"><path fill="#1296db" d="M 512.2 689.4 c 103.7 -59.8 99.1 -115 95.1 -130.8 C 602 538 584.6 523 565.8 523 c -14.2 0 -27.4 8.8 -37.1 24.8 c -3.5 5.7 -9.7 9.3 -16.4 9.3 c -6.7 0 -12.9 -3.5 -16.4 -9.3 c -9.8 -16.2 -22.7 -24.8 -37.1 -24.8 c -18.8 0 -36.3 15 -41.5 35.6 c -4.2 15.8 -8.8 71 94.9 130.8 Z M 881.8 193.9 h -23 v 69.4 c 0 35.6 -29 64.6 -64.6 64.6 c -35.6 0 -64.6 -29 -64.6 -64.6 v -69.4 H 576.8 v 69.4 c 0 35.6 -29 64.6 -64.6 64.6 c -35.6 0 -64.6 -29 -64.6 -64.6 v -69.4 H 294.8 v 69.4 c 0 35.6 -29 64.6 -64.6 64.6 c -35.6 0 -64.6 -29 -64.6 -64.6 v -69.4 h -23 c -21.3 0 -38.7 17.4 -38.7 38.7 v 130.9 h 816.6 V 232.6 c 0 -21.4 -17.4 -38.7 -38.7 -38.7 Z" p-id="1223" /><path fill="#1296db" d="M 881.8 155.5 h -23 v -19.9 c 0 -35.6 -29 -64.6 -64.6 -64.6 c -35.6 0 -64.6 29 -64.6 64.6 v 19.9 H 576.8 v -19.9 c 0 -35.6 -29 -64.6 -64.6 -64.6 c -35.6 0 -64.6 29 -64.6 64.6 v 19.9 H 294.8 v -19.9 c 0 -35.6 -29 -64.6 -64.6 -64.6 c -35.6 0 -64.6 29 -64.6 64.6 v 19.9 h -23 c -42.5 0 -77.1 34.6 -77.1 77.1 v 644.1 c 0 42.5 34.6 77.1 77.1 77.1 h 739.1 c 42.5 0 77.1 -34.6 77.1 -77.1 V 232.6 c 0.1 -42.5 -34.5 -77.1 -77 -77.1 Z m 38.7 208 H 103.9 V 232.6 c 0 -21.3 17.4 -38.7 38.7 -38.7 h 23 v 69.4 c 0 35.6 29 64.6 64.6 64.6 c 35.6 0 64.6 -29 64.6 -64.6 v -69.4 h 152.9 v 69.4 c 0 35.6 29 64.6 64.6 64.6 c 35.6 0 64.6 -29 64.6 -64.6 v -69.4 h 152.9 v 69.4 c 0 35.6 29 64.6 64.6 64.6 c 35.6 0 64.6 -29 64.6 -64.6 v -69.4 h 23 c 21.3 0 38.7 17.4 38.7 38.7 v 130.9 Z M 768.1 135.6 c 0 -14.4 11.7 -26.2 26.2 -26.2 c 14.4 0 26.1 11.7 26.1 26.2 v 127.7 c 0 14.4 -11.7 26.1 -26.1 26.1 c -14.4 0 -26.2 -11.7 -26.2 -26.1 V 135.6 Z m -282 0 c 0 -14.4 11.7 -26.2 26.2 -26.2 c 14.4 0 26.2 11.7 26.2 26.2 v 127.7 c 0 14.4 -11.7 26.1 -26.2 26.1 c -14.4 0 -26.2 -11.7 -26.2 -26.1 V 135.6 Z m -282.1 0 c 0 -14.4 11.7 -26.2 26.2 -26.2 c 14.4 0 26.2 11.7 26.2 26.2 v 127.7 c 0 14.4 -11.7 26.1 -26.2 26.1 c -14.4 0 -26.2 -11.7 -26.2 -26.1 V 135.6 Z m 716.5 741.1 c 0 21.3 -17.4 38.7 -38.7 38.7 H 142.7 c -21.3 0 -38.7 -17.4 -38.7 -38.7 V 401.9 h 816.6 v 474.8 Z" p-id="1224" /><path fill="#1296db" d="M 179.6 535.2 h 127.7 c 10.6 0 19.2 -8.6 19.2 -19.2 s -8.6 -19.2 -19.2 -19.2 H 179.6 c -10.6 0 -19.2 8.6 -19.2 19.2 s 8.6 19.2 19.2 19.2 Z M 179.6 816.7 h 127.7 c 10.6 0 19.2 -8.6 19.2 -19.2 s -8.6 -19.2 -19.2 -19.2 H 179.6 c -10.6 0 -19.2 8.6 -19.2 19.2 s 8.6 19.2 19.2 19.2 Z M 179.6 676 h 127.7 c 10.6 0 19.2 -8.6 19.2 -19.2 s -8.6 -19.2 -19.2 -19.2 H 179.6 c -10.6 0 -19.2 8.6 -19.2 19.2 S 169 676 179.6 676 Z M 717.1 535.2 h 127.8 c 10.6 0 19.2 -8.6 19.2 -19.2 s -8.6 -19.2 -19.2 -19.2 H 717.1 c -10.6 0 -19.2 8.6 -19.2 19.2 s 8.6 19.2 19.2 19.2 Z M 717.1 816.7 h 127.8 c 10.6 0 19.2 -8.6 19.2 -19.2 s -8.6 -19.2 -19.2 -19.2 H 717.1 c -10.6 0 -19.2 8.6 -19.2 19.2 s 8.6 19.2 19.2 19.2 Z M 717.1 676 h 127.8 c 10.6 0 19.2 -8.6 19.2 -19.2 s -8.6 -19.2 -19.2 -19.2 H 717.1 c -10.6 0 -19.2 8.6 -19.2 19.2 s 8.6 19.2 19.2 19.2 Z M 576.1 778.2 H 448.4 c -10.6 0 -19.2 8.6 -19.2 19.2 s 8.6 19.2 19.2 19.2 h 127.7 c 10.6 0 19.2 -8.6 19.2 -19.2 s -8.6 -19.2 -19.2 -19.2 Z M 503 728.3 c 2.9 1.6 6 2.3 9.2 2.3 c 3.2 0 6.3 -0.8 9.2 -2.3 c 49.4 -26.9 85 -57.4 105.7 -90.5 c 23.5 -37.5 22.4 -68.9 17.4 -88.7 c -9.7 -38 -42.1 -64.5 -78.8 -64.5 c -19.8 0 -38.4 8 -53.5 22.6 c -15.1 -14.6 -33.7 -22.6 -53.5 -22.6 c -36.7 0 -69.1 26.5 -78.7 64.5 c -5 19.8 -6.1 51.2 17.4 88.7 c 20.7 33.1 56.2 63.5 105.6 90.5 Z m -85.8 -169.7 c 5.3 -20.6 22.7 -35.6 41.5 -35.6 c 14.4 0 27.3 8.6 37.1 24.8 c 3.5 5.7 9.7 9.3 16.4 9.3 c 6.7 0 12.9 -3.5 16.4 -9.3 c 9.7 -16 22.9 -24.8 37.1 -24.8 c 18.8 0 36.3 15 41.5 35.6 c 4 15.8 8.6 71 -95.1 130.8 c -103.6 -59.8 -99 -115 -94.9 -130.8 Z" p-id="1225" /></svg>
        </div>
        <div class="content">
            <scroll-view ref='scroll'>
                <div class="historyList">
                    <!-- <div v-for="(history,index) in historyList" :key="index" class="historyItem" @click="showDetail(index)"> -->
                    <div v-for="(history,index) in historyList" :key="index" class="historyItem" @click="showDetail(index)">
                    <div class="tripInfo"><span class="tripType">{{history.transport}}</span><span class="tripDate">{{history.date}}</span></div>
                    <p>{{history.start}} - {{history.end}}</p>
                </div>
                </div>
            </scroll-view>
        </div>
    </div>
</template>

<script>
import Scroll from '../components/Scroll.vue'
export default {
    data(){
        return {
            historyList: []
        }
    },
    methods:{
        showDetail(index){
            this.$router.push({name:'historyDetail',params:{id:index}});
        },
        getHistory(){
            this.$axios.get('/api/history').then(res=>{
                if(res.data.status){
                    this.historyList = res.data.data;
                }
            })
        }
    },
    // watch: {  //不用也行
    //     historyList(){
    //         this.$refs.scroll.refresh();
    //     }
    // },
    created(){
        this.getHistory();
    },
    watch: {
        $route(to,from){
            if(to.name == 'history'){
                this.getHistory();
            }
        }
    },
    components: {
        ScrollView: Scroll
    }
}
</script>

<style>
.history {
    width: 100%;
    height: 100%;
}
.history .tagTitle {
    display: flex;
    padding: 0px 20px;
    height: 50px;
    box-sizing: border-box;
    font-weight: bold;
    align-items: center;
    border-bottom: 1px solid #1296DB;
}
.history .tagTitle p{
    padding-right: 10px;
    font-size: 16px;
}
.history .content {
    width: 100%;
    height: calc(100% - 50px);
}
.history .scroll {
    height: 100%;
    overflow: hidden;
}
.historyItem {
    margin: 0 auto;
    width: calc(100% - 40px);
    box-sizing: border-box;
    padding: 15px 0;
    color: grey;
}
.historyItem:not(:last-child) {
    border-bottom: 1px solid rgba(0,0,0,.14);
}
.tripInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
}
.tripType {
    color: black;
    font-size: 14px;
}
.tripDate {
    color: grey;
}
</style>