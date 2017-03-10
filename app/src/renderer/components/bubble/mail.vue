<style lang="postcss">
.collapse-bubble{
    .title{
        background-color: #ccefef;
        display: flex;
        width: 450px;
    }
    .text{
        width: calc(100% - 80px);
    }
    .unfolded{
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 1.2rem;
        transition: All 0.4s ease-in-out;
        color: #7e9a86;
    }
    .theme{
        font-size: 1rem;
        line-height: 25px;
        color: #7e9a86;
        line-height: 40px;
    }
    .from{
        width: 100%;
        color: navy;
        text-align: left;
        line-height: 20px;
        p{
            display: inline;
        }
    }
    .list{
        font-size: 1rem;
        background-color: #dfe5ea;
        padding: 10px;
        text-indent: 30px;
        width: 430px;
        border-top: 3px dashed #ffffff;
    }
    .bubble-menu{
        position: absolute;
        right: 20px;
        top: 80px;
        background-color: #d0b1b1;
        color: #404040;
        li{
            text-align: left;
            line-height: 1.4rem;
            font-size: 1rem;
        }
        li:hover{
            background-color: antiquewhite;
        }
    }
    .menu{
        width: 40px;
        line-height: 40px;
        font-size: 1.4rem;
        color: #7e9a86;
    }
    .active .unfolded{
        transform: rotate(90deg);
    }
    .time{
        margin: 0 10px;
    }
}
</style>
<template lang="pug">
    .collapse-bubble(v-on:click="isMenuOpen=false")
        .from
            p.user-name 蒲鸽 100284685@qq.com 
            p.time 2017-07-20 14:29
        .box(v-bind:class="{ active: isOpen }")
            .title
                .ico.unfolded(v-on:click="isOpen=!isOpen") &#xe635;
                .text
                    p.theme {{title}}
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