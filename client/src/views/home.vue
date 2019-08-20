<template>
    <div class="home">
        <header>
            <div class="typeBar">
                <div v-for="(type,index) in typeList" :key="index" @click="changeHeightlight(index)"><span :class="{heightlight: index == current}">{{type}}</span></div>       
            </div>
        </header>
        <div class="content">
            <div class="circle">
                <p class="title">累计{{typeList[current]}}</p>
                <p class="distance">10.7</p>
                <p class="monthtotalDistance">本月累计{{typeList[current]}}10.7公里>></p>
            </div>

            <button class="startBtn" @click="linkToPersonalTrip()">开始{{typeList[current]}}</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data(){
        return {
            current: 0,
            typeList: ['徒步','跑步','骑行','自驾']
        }
    },
    methods:{
        changeHeightlight(index){
            this.current = index;
        },
        linkToPersonalTrip(){
            let transport = this.typeList[this.current];
            this.$router.push({name: 'personalTrip', params:{transport}});
        }
    }
}
</script>
<style>
.home {
    height: 100%;
    width: 100%;
    background: url(../assets/homeBg.png) 0px 0px no-repeat;
    background-size: cover;
}
.home header .typeBar{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,.5);
    box-shadow: 0px 4px 6px rgba(0,0,0,.15);
}
.home header .typeBar>div {
    flex: 1;
    text-align: center;
    vertical-align: middle;
}
.home header>.typeBar>div>span {
    padding: 14px 4px;
    display: inline-block;
    height: 100%;
    color: grey;
    /* font-size: 14px; */
    border-bottom: 1px solid transparent;
}
.home .heightlight {
    color: rgb(65, 182, 255)!important;
    border-bottom: 1px solid green!important;
}
.home .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.home .circle {
    height: 230px;
    width: 230px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
    color: white;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    border-radius: 50%;
    box-shadow: inset 0px 6px 8px rgba(255,255,255,.5);
    border-top: 4px solid rgba(255,255,255,.8);
    border-left: 3px solid rgba(255,255,255,.7);
    border-right: 3px solid rgba(255,255,255,.7);
    /* border-top: 4px dashed rgba(0,0,0,.1);
    border-left: 3px dashed rgba(0,0,0,.07);
    border-right: 3px dashed rgba(0,0,0,.07); */
}
.home .distance {
    font-weight: bold;
    font-size: 46px;
    margin: 14px;
}
.home .monthtotalDistance {
    color: grey;
    text-decoration: underline;
}
.home .startBtn {
    outline: none;
    border-style: none;
    font-size: 14px;
    padding: 10px;
    width: 60%;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid white;
}
</style>
