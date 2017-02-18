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
                    Bubble(left=true,userImg="../img/chatUserImg.png",v-bind:content="item.content")
                template(v-else)
                    Bubble(left=flase,userImg="../img/chatUserImg.png",v-bind:content="item.content")
            Collapse(userImg="",content="昨天我因为有些事没有参加周会，能不能把会议内容给我发下",title="昨天开会的主题是什么")
            Examine(userImg="",content="今天要花钱",title="资金审批")
            .clear
</template>
<script>
    import Avatar from '../avatar/default'
    import Bubble from '../bubble/default'
    import Collapse from '../bubble/collapse'
    import Examine from '../bubble/examine'
    import { mapState } from 'vuex'
    export default {
        computed: mapState([
            'chatLog'
        ]),
        components: {
            Avatar,
            Bubble,
            Collapse,
            Examine,
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