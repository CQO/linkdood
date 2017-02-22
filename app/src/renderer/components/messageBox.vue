<style lang="postcss">
  .message-box{
    background-color:white;
    width: 100%;
    height: 80%;
  }
  .input-box{
    height: 20%;
  }
</style>

<template lang="pug">
  .box
    .message-box
      DefaultBubble
    .input-box

</template>

<script>
import DefaultBubble from './bubble/default';
export default {
  components: {
    DefaultBubble
  },
}
</script>
