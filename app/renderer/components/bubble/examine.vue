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
                p.text 出行费用报销
                    .button
                        p 同意
                        p 忽略
            .list(v-if="isOpen") 2月22日出国20人 需要报销费用50000元 报销票据已经交给公司财务
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