<style lang="postcss">
    .send-mail-bubble{
        display: flex;
        flex-direction: row-reverse;
        height: inherit;
        margin: 10px;
        .user-img{
            height: 45px;
            width: 45px;
            margin: 0 10px 0 0;
        }
        .bubble-message-box{
            width: initial;
            height: inherit;
            .text{
                height: inherit;
                background-color: #f0f5f9;
                border-radius: 5px;
                text-align: left;
                padding: 10px;
            }
        }
        .mail-bubble-foot{
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
    }
    
</style>
<template lang="pug">
    .send-mail-bubble
        img.user-img(src="imgs/chatUserImg.png")
        .bubble-message-box
            p.text @HR UI面试推迟到16:00
            .mail-bubble-foot
                .ico 
                .from 2017-02-20 14:50指令已发送至HR机器人
            
</template>
<script>
    export default {
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