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
      .bubble(v-for="item in chatLog.mark[$route.params.id]")
        DefaultBubble(time="上午9:10",:username="chatLog.contacts[chatLog.sessions[$route.params.id].messages[item][0].userID].name",:message="chatLog.sessions[$route.params.id].messages[item]")
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
