<template lang="pug">
  .input-box.box
    <!-- 输入框扩展按钮 -->
    .tool.ico &#xe6fd;
    <!-- 输入框 -->
    textarea.text(v-on:keyup.enter="sendMessage",v-model="message")
    .send.ico(v-on:click.stop="sendMessage") &#xe840;
</template>

<script>
import fun from '../vuex/fun'
export default {
  data(){
    return{
      message:""
    }
  },
  methods:{
    sendMessage(){
      const id = this.$route.params.id
      const talk= {
        receiverID:id,
        senderID:88888,
        msg:this.message,
        conversationID:id
      }
      const _this = this
      this.message = "";
      this.$store.commit("ADD_DIALOGUE",talk)
      fun.Ajax.get(`http://www.tuling123.com/openapi/api?key=bb1b96a394b19b8ce2c61cf32c64d695&userid=123&info=${talk.msg}`,function(e){
        const message = JSON.parse(e);
        const talk= {receiverID:88888,senderID:id,msg:message.text,conversationID:id}
        _this.$store.commit("ADD_DIALOGUE",talk)
      })
    },
  },
}
</script>

<style lang="postcss">
.input-box.box{
  height: 40px;
  display: flex;
  border-top: 1px solid #eceef2;
  background-color: #fbfbfb;
  .tool{
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 2rem;
    color: #d4cec6;
  }
  .text{
    width: calc(100% - 80px);
    outline: none;
    border: none;
    resize: none;
    line-height: 40px;
    font-size: 1.2rem;
    background-color: #fbfbfb;
  }
  .send{
    width: 40px;
    height: 40px;
    color: #d4cec6;
  }
  .ico{
    line-height: 40px;
    font-size: 2rem;
  }
}
</style>

