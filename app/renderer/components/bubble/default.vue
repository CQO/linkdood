<style lang="postcss">
.message-left,.message-right{
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
    float: left;
    .message{
        background: #eeeeee; 
        margin-left: 20px;
        float: left;
    }
    .message:before{
        right: 100%;
        border-right: 14px solid #eeeeee;
    }
    .user-img{
        height: 45px;
        width: 45px;
        float: left;
    }
}
.message-right{
    float: right;
    .message{
        background-color: #d0edfe;
        margin-right: 20px;
        float: right;
    }
    .message:before{
        left: 100%;
        border-left: 14px solid #d0edfe;
    }
    img{
        float: right;
    }
}
</style>
<template lang="pug">
    .bubble(v-bind:class="[left ? 'message-right' : 'message-left']")
        img.user-img(v-bind:src="userImg")
        .message {{content}}
        .clear
</template>
<script type="text/babel">
export default {
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
