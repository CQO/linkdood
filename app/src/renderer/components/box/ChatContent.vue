<style lang="postcss">
.message-box{
    .chatContent{
        height: calc( 70% - 43px );
        overflow-y: auto;
        overflow-x: hidden;
        .time{
            font-size: 12px;
            color: gray;
            height: 12px;
            line-height: 12px;
            margin: 10px 0;
        }
        .message-left,.message-right{
            margin: 10px;
            height: initial;
            .message{
                width: 120px; 
                height: 45px; 
                position: relative; 
                border-radius: 10px; 
                width: initial;
                padding: 10px;
                height: initial;
                min-height: 25px;
                line-height: 25px;
                max-width: 300px;
                -webkit-user-select: text;
            }
            .message:before{
                    content: "";
                    position: absolute;
                    top: 16px;
                    width: 0;
                    height: 0;
                    border-top: 7px solid transparent;
                    border-bottom: 7px solid transparent;     
            }
            .user-img{
                height: 45px;
                width: 45px;
                cursor: pointer;
            }
        }
        .message-left{
            float: left;
            .message{
                background: #eeeeee; 
                margin-left: 20px;
                float: left;
            }
            .message:before{
                right: 100%;
                border-right: 14px solid #eeeeee;
            }
            .user-img{
                height: 45px;
                width: 45px;
                float: left;

            }
        }
        .message-right{
            float: right;
            .message{
                background-color: #d0edfe;
                margin-right: 20px;
                float: right;
            }
            .message:before{
                left: 100%;
                border-left: 14px solid #d0edfe;
            }
            img{
                float: right;
            }
        }
    }
    .message{
        height: initial;
        padding-bottom: 60px;
    }
}
</style>
<template lang="pug">
    .chatContent(v-scrollToTheBottom='this')
        .message
            .time 15:45
            template(v-for="item in chatList")
                template(v-if="item.userID===0")
                    .message-left
                        Avatar.user-img(v-bind:size='45',v-bind:username="$route.params.item")
                        .message {{item.content}}
                template(v-else)
                    .message-right
                        img.user-img(src="../img/chatUserImg.png")
                        .message {{item.content}}
            .clear
</template>
<script>
    import Avatar from 'vue-avatar/dist/Avatar'
    import { mapState } from 'vuex'
    export default {
        computed: mapState([
            'chatLog'
        ]),
        components: {
            Avatar,
        },
        directives: {
            // 发送消息后滚动到底部
            'scrollToTheBottom'(el,e){
                el.scrollTop = el.scrollHeight - el.clientHeight;
            }
        },
        computed:{
            chatList:function(){
                const route = this.$route.params;
                const chatList = this.$store.state.chatLog;
                return chatList.sessions[route.id].messages
            }
        }
    }
</script>