<style lang="postcss">
  .message-box{
    background-color:white;
    width: 100%;
    height: calc(100% - 70px);
  }
</style>

<template lang="pug">
  .box
    .message-box
      .bubble
        DefaultBubble(time="上午9:10",username="测试",:message="chatLog.sessions[80000].messages")
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
  created(){
    console.log(this.chatLog.sessions[80000].messages)
  }
}
</script>
