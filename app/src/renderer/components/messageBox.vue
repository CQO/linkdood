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
      DefaultBubble(time="上午9:10",content="这是一段测试内容",username="测试")
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
}
</script>
