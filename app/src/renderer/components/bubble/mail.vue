
<template lang="pug">
    .collapse-bubble(v-on:click="isMenuOpen=false",v-bind:class="{ active: isOpen }")
        .from
            p.user-name service@intl.paypal.com
            p.time 2017-07-20 14:29
        .box
            .title
                .ico.unfolded(v-on:click="isOpen=!isOpen") &#xe635;
                .text
                    p.theme {{title}}
            .list(v-if="isOpen",v-html="html")
        ul.bubble-menu
            .send-mail.ico(v-on:click="sendMail") &#xe79a; 
            .guding.ico &#xe61d; 
            .floating-button.ico &#xe613; 

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
            sendMail(){
                this.$store.commit("SEND_MAIL")
            }
        },
        data(){
            return{
                isOpen: false,
                html:this.content
            }
        },
    }
</script>

<style lang="postcss" scoped>
.collapse-bubble{
    .title{
        background-color: #ccefef;
        display: flex;
        width: 452px;
        color: darkorchid;
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
    }
    .theme{
        font-size: 1rem;
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
        padding: 10px;
        text-indent: 30px;
        width: 430px;
        border: 1px dashed #dac7c7;
        display: block;
    }
    .bubble-menu{
        position: absolute;
        left: 520px;
        top: 30px;
        display: flex;
        flex-direction: column;
        .ico{
            width: 36px;
            font-size: 26px;
            line-height: 36px;
            height: 36px;
            text-align: center;
            border-radius: 50%;
            background-color: cadetblue;
            color: aliceblue;
            margin-bottom: -36px;
            transition: All 0.2s ease-in;
        }
    }
    .time{
        margin: 0 10px;
    }
}
.active{
    .unfolded{
        transform: rotate(90deg);
    }
    .bubble-menu{
        .ico{
            margin: 6px 0;
        }
        
    }
} 
</style>