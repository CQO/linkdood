<style lang="less">
.application{
    background-color: white;
    img{
        margin: 14% auto;
    }
}
</style>
<template lang="pug">
    .application
        img(src="../../../img/yingyong.png",v-on:click="error")
</template>
<script>
    
    export default {
        methods:{
            error(){
                alert("里面还没有内容！")
            }
        },
    }
</script>