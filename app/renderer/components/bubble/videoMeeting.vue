<style lang="postcss">
    .video-meeting-bubble{
        height: inherit;
        display: flex;
        position: relative;
        margin: 10px;
        .user-img{
            height: 45px;
            width: 45px;
            margin: 0 10px 0 0;
        }
        .bubble-message-box{
            width: 300px;
            height: inherit;
            .text{
                min-height: 45px;
                height: inherit;
                background: #429ae4;
                color: white;
                border-radius: 5px;
                text-align: left;
                padding: 10px;
                display: flex;
                .ico{
                    height: 45px;
                    width: 45px;
                }
            }
        }
        .mail-bubble-foot{
            height: 20px;
            display: flex;
            .ico{
                width: 30px;
                color: #c4e0f8;
            }
            .from{
                color: #ccc;
                font-size: 0.8rem;
                text-align: left;
                line-height: 20px;
            }
        }
        .bubble-menu{
            background-color: rgba(191, 165, 220, 0.8);
            height: 45px;
            position: relative;
            right: 5px;
            top: 20px;
            li{
                text-align: left;
            }
            li:hover{
                background-color:#71c399;
            }
        }
    }
    
</style>
<template lang="pug">
    .video-meeting-bubble(v-on:click="isMenuOpen=false")
        Avatar.user-img(v-bind:size='45',username="Maer")
        .bubble-message-box
            .text 
                .ico 
                .details 广州研发产品评审视频会议邀请</br>主题:广州研发产品评审</br>时间:2017-03-10 14:00</br>参加人数:20人</br>发起人:广州小杨
                .ico.menu(v-on:click.stop="isMenuOpen=!isMenuOpen") 
            .mail-bubble-foot
                .ico 
                .from 18人阅读 2017-02-20 14:29
        ul.bubble-menu(v-if="isMenuOpen")
            li.ico(v-on:click="getMail")  加入会议
            li.ico  稍后提醒
            
</template>
<script>
    import Avatar from '../avatar/default'
    export default {
        methods:{
            getMail(){
                if(this.$store.state.status.step<1){
                    this.$store.commit("ADD_STEP");
                }
            },
        },
        components: {
            Avatar
        },
        data(){
            return{
                isMenuOpen: false,
            }
        },
    }
</script>