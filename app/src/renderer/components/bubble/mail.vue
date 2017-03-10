<style lang="postcss">
.collapse-bubble{
    .title{
        background-color: #d6eada;
        display: flex;
        width: 450px;
    }
    .foot{
        background-color: blue;
    }
    .text{
        width: calc(100% - 80px);
    }
    .unfolded{
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 1.2rem;
    }
    .theme, .from{
        line-height: 20px;
    }
    .theme{
        font-size: 1rem;
        line-height: 25px;
        color: cornflowerblue;
    }
    .from{
        text-align: right;
        width: 100%;
        line-height: 15px;
        color: navy;
    }
    .list{
        font-size: 1rem;
        background-color: aqua;
        padding: 10px;
    }
    .bubble-menu{
        position: absolute;
        right: 15px;
        top: 70px;
        background-color: bisque;
        li{
            text-align: left;
        }
    }
    .menu{
        width: 40px;
        line-height: 40px;
        font-size: 1.4rem;
        color: darkslateblue;
    }
}
</style>
<template lang="pug">
    .collapse-bubble(v-on:click="isMenuOpen=false")
        .box(v-bind:class="{ active: isOpen }")
            .title
                .ico.unfolded(v-on:click="isOpen=!isOpen") &#xe635;
                .text
                    p.theme {{title}}(2017-07-20 14:29)
                    p.from 来自:蒲鸽 100284685@qq.com 
                .ico.menu(v-if="isOpen",v-on:click.stop="isMenuOpen=!isMenuOpen") &#xe634;
            .list(v-if="isOpen") {{content}}
        ul.bubble-menu(v-if="isMenuOpen")
            li.ico(v-on:click="sendMail") &#xe79a; 回复邮件
            li.ico(v-on:click="guding") &#xe61d; 固定到桌面
            li.ico &#xe613; 稍后提醒

</template>
<script>
    import Avatar from '../avater'
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