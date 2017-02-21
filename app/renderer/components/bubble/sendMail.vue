<style lang="postcss">
    .send-mail-bubble{
        display: flex;
        flex-direction: row-reverse;
        height: inherit;
        .user-img{
            height: 45px;
            width: 45px;
            margin: 0 10px;
        }
        .bubble-message-box{
            width: 300px;
            height: inherit;
            .text{
                min-height: 45px;
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
            p.text 广州小杨你好!<br> 建议使用豆豆视频会议，不用出差参加<br>西安小新
            .mail-bubble-foot
                .ico 
                .from 2017-02-20 14:50邮件已发送
            
</template>
<script>
    export default {
        props: {
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