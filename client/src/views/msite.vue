<template>
  <div class="msite">
      <keep-alive >
        <router-view class="contentWrapper"></router-view>
      </keep-alive>

      <div class="tabWrapper">
        <div v-for="tab in tabList" :key="tab.name" class="tab" >
          <router-link :to="{name:tab.name}">
            <img :src="tab.icon" alt="">
            <span>{{tab.label}}</span>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'msite',
  data () {
    return {
      tabList: [
        {name: 'home', label: '首页', icon: require('../assets/shouye.png')}, 
        {name: 'travel', label: '出行', icon: require('../assets/chuhang.png')},
        {name: 'history', label: '历史', icon: require('../assets/lishi.png')},
        {name: 'user', label: '我的', icon: require('../assets/wode.png')}
      ]
    }
  },
  methods:{
    onChange(item, index, prevIndex){
      this.$router.push({name:item.name})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
body,html {
  height: 100%;
  width: 100%;
}
.msite {
  display: flex;
  height: calc(100% - 64px);
  width: 100%;
}
.msite .contentWrapper {
  flex: 1;
  height: 100%;
  width: 100%;
}
.msite .text {
  font-size: 12px;
  line-height: 1;
  text-align: center;
}
.tabWrapper {
  position: fixed;
  bottom: 0;
  height: 64px;
  width: 100%;
  background-color: rgb(231, 247, 252);
  display: flex;
}
.tabWrapper .tab {
  flex: 1;
}
.tab a {
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  border-top: 2px solid transparent;
}
.tab a img{
  height: 26px;
}
.msite .router-link-active {
  border-top: 2px solid orange;
  color: orange;
  font-weight: bold;
}
</style>
