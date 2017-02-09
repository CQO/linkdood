<style lang="postcss">
.application{
    .application-box{
        background-color: #d7ebff;
        height: 80%;
        width: 666px;
        margin: 7% auto;
        .box{
            width: 220px;
            height: 50%;
            float: left;
            border: 1px solid beige;
        }
    }
}
</style>
<template lang="pug">
    .application
        .application-box
            .box(@click.prevent.stop="denglu") 登陆
            .box(@click.prevent.stop="haoyou") 获取好友列表
            .box(@click.prevent.stop="baocun") 保存聊天记录
            .box
            .box
            .box
</template>
<script>
    import fun from './module/fun'
    export default {
        methods:{
            denglu(){
                alert("开始登陆")
                fun.Ajax.post("http://192.168.132.217:3000/","Landing",function(e){
                    console.log(e);
                    alert(e);
                })
            },
            haoyou(){
                alert("开始获取好友")
                fun.Ajax.post("http://192.168.132.217:3000/","friendsList",function(e){
                    console.log(e);
                    alert(e);
                })
            },
            baocun(){
                alert("开始保存聊天记录")
                this.$store.commit("SAVE_YOUR_CHATS")
            }
        },
    }
</script>