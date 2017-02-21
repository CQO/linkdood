<style lang="postcss">
    .collapse-bubble{
        .box{
            .title{
                color: white;
                font-weight: 100;
                background: #429ae4;
                .text{
                    display: flex;
                    flex-direction: column;
                    .theme{
                        font-size: 13px;
                        height: 25px;
                        line-height: 30px;
                    }
                    .from{
                        height: 15px;
                        line-height: 15px;
                        font-size: 12px;
                        color: white;
                        font-weight: 100;
                    }
                }
            }
            .list{
                background-color: #62a7e2;
                color: white;
            }
            .foot{
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
            .time{
                height: 20px;
            }
        }
        .bubble-menu{
            background-color: rgba(172, 206, 164, 0.8);
            height: 65px;
            li:hover{
                background-color:#71c399;
            }
        }
        .mail-img{
            height: 45px;
            width: 45px;
            background-color: #b2c4c3;
            border-radius: 5px;
            line-height: 45px;
            font-size: 2rem;
            color: darkgreen;
        }
    }
</style>
<template lang="pug">
    .collapse-bubble(v-on:click="isMenuOpen=false")
        .ico.mail-img 
        .box(v-bind:class="{ active: isOpen }")
            .title
                .ico.unfolded(v-on:click="isOpen=!isOpen") 
                .text
                    p.theme {{title}}
                    p.from 2017-07-20 14:29
                .ico.menu(v-if="isOpen",v-on:click.stop="isMenuOpen=!isMenuOpen") 
            .list(v-if="isOpen") {{content}}
            .foot
                .ico 
                .from 来自:蒲鸽 100284685@qq.com
        ul.bubble-menu(v-if="isMenuOpen")
            li.ico(v-on:click="sendMail")  回复邮件
            li.ico(v-on:click="guding")  固定到桌面
            li.ico  稍后提醒

</template>
<script>
    import Avatar from '../avatar/default'
    const ipcRenderer = require('electron').ipcRenderer;
    export default {
        components: {
            Avatar
        },
        props: {
            left:{
                type: Boolean,
                default: true
            },
            userImg: {
                type: String,
            },
            content: {
                type: String,
                required: true
            },
            title: {
                type:String,
                required: true
            }
        },
        methods:{
            guding(){
                //向主进程发送最小化消息
                console.log(ipcRenderer.sendSync('main-window-message', 'fixed'));
            },
            sendMail(){
                this.$store.commit("SEND_MAIL")
            }
        },
        data(){
            return{
                isOpen: false,
                isMenuOpen: false
            }
        },
    }
</script>