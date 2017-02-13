<style lang="postcss">
    .collapse-bubble{
        display: flex;
        .box{
            width: 250px;
            height: initial;
            border: 1px solid #dfe6ec;
            border-radius: 5px;
            p{
              display: inline;
            }
            .title{
                height: 45px;
                text-align: left;
                color: #c8ccd2;
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
            }
        }
        .user-img{
            height: 45px;
            width: 45px;
            margin: 0 10px;
        }
    }
</style>
<template lang="pug">
    .collapse-bubble
        Avatar.user-img(v-bind:size='45',username="me")
        .box
            .title
                .ico(v-bind:class="{ active: isOpen }",v-on:click="isOpen=!isOpen") > 
                p.text 你好
            .list(v-if="isOpen") 这是一封用做测试的邮件，这是一封用做测试的邮件，这是一封用做测试的邮件
</template>
<script>
    import Avatar from '../avatar/default'
    export default {
        components: {
            Avatar
        },
        data(){
            return{
                isOpen: false,
            }
        },
    }
</script>