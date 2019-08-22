<template>
    <div class="userheader">
        <p class="title">{{title}}</p>
        <p class="tips" v-if="tips">{{tips}}</p>
    </div>
</template>
<script>
export default {
    name: 'userheader',
    props: {
        title: {
            type: String,
            default: '出行表'
        },
        tips: {
            type: String,
        }
    }
}
</script>
<style scoped>
.userheader {
    display: flex;
    height: 50px;
    flex-direction: column;
    box-sizing: border-box;
    background-color: white!important;
}
p {
    text-align: center;
}
.title {
    font-size: 24px;
    font-weight: bold;
}
.tips {
    color: blueviolet;
    margin-top: 4px;
}
</style>
