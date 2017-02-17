<style lang="postcss">
    .examine-bubble{
        .box.active{
            .button{
                width: 40px;
                display: flex;
                .ico{
                    width: 20px;
                }
            }
        }
        .button{
            width: 40px;
            line-height: 22px;
            font-size: 0.8rem;
            p:hover{
                color:blue;
            }
        }
    }
</style>
<template lang="pug">
    .examine-bubble
        Avatar.user-img(v-bind:size='45',username="me")
        .box(v-bind:class="{ active: isOpen }")
            .title
                .ico.unfolded(v-on:click="isOpen=!isOpen") 
                p.text {{title}}
                    .button(v-if="isOpen")
                        .ico.allow 
                        .ico.menu 
            .list(v-if="isOpen") {{content}}
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
            }
        },
    }
</script>