<style lang="postcss">
  .message-box{
    background-color:white;
    width: 100%;
    height: calc(100% - 100px);
  }
  .input-box{
    height: 70px;
    display: flex;
    border-top: 1px solid #f3e9f2;
  }
</style>

<template lang="pug">
  .box
    .message-box
      DefaultBubble
    InputBox

</template>

<script>
import DefaultBubble from './bubble/default';
import InputBox from './inputBox';
export default {
  components: {
    DefaultBubble,
    InputBox
  },
}
</script>
