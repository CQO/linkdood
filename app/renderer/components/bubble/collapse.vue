<style lang="postcss">
    .collapse-bubble{
        .box{
            background: #79e279;
            .title{
                color: #3e4a46;
            }
            .list{
                background-color: #c4f9c1;
            }
        }
        .bubble-menu{
            background-color: rgba(172, 206, 164, 0.8);
            height: 65px;
            li:hover{
                background-color:#71c399
            }
        }
    }
</style>
<template lang="pug">
    .collapse-bubble(v-on:click="isMenuOpen=false")
        Avatar.user-img(v-bind:size='45',username="me")
        .box(v-bind:class="{ active: isOpen }")
            .title
                .ico.unfolded(v-on:click="isOpen=!isOpen") 
                p.text {{title}}
                .ico.menu(v-if="isOpen",v-on:click.stop="isMenuOpen=!isMenuOpen") 
            .list(v-if="isOpen") {{content}}
        ul.bubble-menu(v-if="isMenuOpen")
            li.ico  回复邮件
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
                required: true
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