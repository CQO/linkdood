<style lang="postcss">
.application{
    .application-box{
        background-color: #d7ebff;
        height: 80%;
        width: 666px;
        margin: 7% auto;
        .box{
            width: 222px;
            height: 50%;
            float: left;
        }
    }
}
</style>
<template lang="pug">
    .application
        .application-box
            .box
            .box
            .box
            .box
            .box
            .box
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