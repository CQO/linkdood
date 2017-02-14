<style lang="postcss">
    .collapse-bubble{
        margin: 10px;
        display: flex;
        .box{
            width: 250px;
            height: initial;
            border: 1px solid #dfe6ec;
            margin-left: 10px;
            border-radius: 10px;
            p{
              display: inline;
            }
            .title{
                height: 45px;
                text-align: left;
                display: flex;
                border-radius: 10px;
                .ico{
                    width: 45px;
                    height: 45px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 1.4rem;
                    transition: All 0.4s ease-in-out;
                }
                .ico.active{
                    transform: rotate(90deg);
                }
                .text{
                    line-height: 45px;
                    font-size: 1.2rem;
                    width: 165px;
                }
                .button{
                    width: 35px;
                    line-height: 22px;
                    font-size: 0.8rem;
                    p:hover{
                        color:blue;
                    }
                }
            }
            .list{
                padding: 10px;
                text-indent: 25px;
                word-wrap: normal;
                text-align: left;
                width: 230px;
                height: initial;
                border-radius: 0 0 10px 10px;
                color: #c8ccd2;
            }
        }
        .user-img{
            height: 45px;
            width: 45px;
        }
    }
</style>
<template lang="pug">
    .collapse-bubble
        Avatar.user-img(v-bind:size='45',username="me")
        .box
            .title
                .ico(v-bind:class="{ active: isOpen }",v-on:click="isOpen=!isOpen") > 
                p.text {{title}}
            ul(v-if="isOpen")
                li(v-for="(key,item) in datas.list") {{item}}
            
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
            },
            title: {
                type: String,
                required:true
            }
        },
        data(){
            return{
                isOpen: false,
                datas:{
                    num:3,
                    list:{
                        one:'吃饭',
                        two:'睡觉',
                        three:'连豆豆'
                    }
                }
            }
        },
    }
</script>