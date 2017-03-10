<style lang="postcss">
  .message-box{
    background-color:white;
    width: 100%;
    height: calc(100% - 70px);
    overflow-y: auto;
  }
</style>

<template lang="pug">
  .box
    <!--消息显示的窗口。-->
    .message-box
      <!-- chatLog.mark[用户ID]为存储指定ID用户会话段标识的数组 -->
      <!-- 设置他的目的是为了达到合并短时间内一个用户的多条消息到一个气泡内 -->
      <!-- 一个用户连续发消息不会创造一个新的ID,所以会被合成在一个气泡里显示 -->
      <!-- 但是当窗口中有另一个用户发言，或者长时间没发送消息等等情况，会刷新ID -->
      .bubble(v-for="item in chatLog.mark[$route.params.id]")
        <!-- item为当前对话段ID -->
        <!-- $route.params.id为当前聊天对象ID -->
        DefaultBubble(:time="item",:username="chatLog.markInfo[item].name",:message="chatLog.sessions[$route.params.id].messages[item]")
    InputBox

</template>

<script>
import DefaultBubble from './bubble/default';
import InputBox from './inputBox';
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'chatLog'
  ]),
  components: {
    DefaultBubble,
    InputBox
  },
  data(){
    return{
      userID: this.$route.params.id
    }
  },
  created(){
    
  }
}
</script>
