<style lang="postcss">
    .examine-bubble{
        .box{
            background-color: skyblue;
            .title{
                color: #fef1ff;
            }
            .list{
                background-color: #c1daf9;
            }
        }
        .bubble-menu{
            background-color: rgba(191, 167, 218, 0.8);
            height: 45px;
            li:hover{
                background-color:#71c399
            }
        }
    }
</style>
<template lang="pug">
    .examine-bubble(v-on:click="isMenuOpen=false")
        Avatar.user-img(v-bind:size='45',username="me")
        .box(v-bind:class="{ active: isOpen }")
            .title
                .ico.unfolded(v-on:click="isOpen=!isOpen") 
                p.text {{title}}
                .ico.menu(v-if="isOpen",v-on:click.stop="isMenuOpen=!isMenuOpen") 
            .list(v-if="isOpen") {{content}}
        ul.bubble-menu(v-if="isMenuOpen")
            li.ico  同意申请
            li.ico  稍后提醒
</template>
<script>
    import Avatar from '../avatar/default'
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
                type: String,
                required:true
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