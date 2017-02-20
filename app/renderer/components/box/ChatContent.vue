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
                    Bubble(left=true,v-bind:content="item.content")
                template(v-else)
                    Bubble(left=flase,userImg="imgs/chatUserImg.png",v-bind:content="item.content")
            Collapse(userImg="",content=`我把最近的经营情况发给你，你看对吗一月，二月，三月销量分别为25432，22745，28900。利润分别为223765，256221，300001。`,title="最近的经营情况")
            .clear
</template>
<script>
    import Avatar from '../avatar/default'
    import Bubble from '../bubble/default'
    import Collapse from '../bubble/collapse'
    import Examine from '../bubble/Examine'
    import { mapState } from 'vuex'
    export default {
        computed: mapState([
            'chatLog',
            'status'
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