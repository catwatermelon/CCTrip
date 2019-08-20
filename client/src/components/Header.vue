<template>
    <div class="header">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="24" height="24" t="1565345891711" p-id="5272" version="1.1"><path fill="#ffffff" d="M 766.976 1021.95 c -10.24 0 -20.48 -3.584 -28.672 -10.752 l -509.952 -472.576 c -15.872 -14.336 -15.872 -38.4 0 -52.736 l 509.952 -472.576 c 15.872 -14.336 40.96 -14.336 56.832 0 c 15.872 14.336 15.872 38.4 0 52.736 l -481.28 445.952 l 481.28 445.952 c 15.872 14.336 15.872 38.4 0 52.736 c -7.68 7.168 -17.92 11.264 -28.16 11.264 Z" p-id="5273" /></svg>
    </div>
</template>
<script>
export default {
    name: 'header',
    data(){
        return {

        }
    },
    methods:{

    } 
}
</script>

<style>
.header {
    position: fixed;
    height: 40px;
    top: 0;
    left: 0;
    right: 0;
    color: black;
    display: flex;
    padding-left: 10px;
    align-items: center;
    background-color: rgba(0,0,0,.2);
}
</style>
