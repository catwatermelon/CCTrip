<template>
    <div class="tabContainer">
        <slot name="title"></slot>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
.tabContainer {
    padding: 10px;
    border: 1px solid rgba(0,0,0,.1);
    margin-bottom: 10px;
}
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}
.content>div {
    width: 25%;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
}
</style>
