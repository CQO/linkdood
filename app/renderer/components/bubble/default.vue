<style lang="postcss">
@import './default.postcss';
.message-left,.message-right{
    width: initial;
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
    display: flex;
    .message{
        background: #eeeeee; 
        margin-left: 20px;
    }
    .message:before{
        right: 100%;
        border-right: 14px solid #eeeeee;
    }
}
.message-right{
    display: flex;
    flex-direction: row-reverse;
    .message{
        background-color: #d0edfe;
        margin-right: 20px;
    }
    .message:before{
        left: 100%;
        border-left: 14px solid #d0edfe;
    }
}
</style>
<template lang="pug">
    .bubble(v-bind:class="[left ? 'message-left' : 'message-left']")
        Avatar.user-img(v-bind:size='45',username="me")
        .message {{content}}
</template>
<script type="text/babel">
import Avatar from '../avatar/default'
export default {
  components: {
      Avatar
  },
  props: {
    left:{
      type: Boolean,
      default: true
    },
    userImg: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
  },

}
</script>
