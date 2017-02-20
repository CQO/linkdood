<style lang="postcss">
.application{
    .application-box{
        display: flex;
        flex-wrap: wrap;
        width: 30rem;
    }
}
.more-list{
    margin: 10px;
    .bot-list{
        height: 40px;
        line-height: 40px;
        text-align: left;
        color: #ccc;

    }
    .robot{
        height: 80px;
        width: 200px;
        border: 1px solid #ccc;
        border-radius: 5px;
        line-height: 80px;
        font-size: 1.4rem;
        color: lightskyblue;
        margin: 5px;
        float: left;
        position: relative;
    }
    .robot:hover{
        background-color: lavender;
    }
    .add{
        font-size: 3rem;
    }
    .spot{
        position: absolute;
        right: 5px;
        top: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: yellow;
    }
}
</style>
<template lang="pug">
    .more-list
        .bot-list 已经安装的机器人列表：
        .robot-list
            .robot.mail 邮箱机器人
                .spot
            .robot.metting 会议机器人
                .spot
            .robot.HR HR机器人
                .spot
            .robot.tubiao(v-on:click.stop="tubiao=!tubiao") 图表机器人
                .spot(v-if="tubiao")
            .robot.yuantong(v-on:click.stop="yuantong=!yuantong") 远通公司通知
                .spot(v-if="yuantong")
            .robot.ico.add 
</template>
<script>
    import fun from './module/fun'
    export default {
        data () {
            return {
                yuantong:false,
                tubiao:false
            }
        },
        methods:{
            allowDrop(ev){
                ev.preventDefault();
            },
            drop(ev){
                ev.preventDefault();
                console.log("sd");
            }
        },
    }
</script>