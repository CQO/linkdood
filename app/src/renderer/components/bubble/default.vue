
<template lang="pug">
.default-bubble
  Avater(v-bind:username="username")
  .information
    .from
      .user-name {{username}}
      .time {{time}}
    li.text(v-for="item in message") 
      p.ico &#xe600; 
      p(v-if="item.type === 'text'") {{item.content}}
      Mail(v-if="item.type === 'mail'")(title="广州研发产品评审会邀请函",content="这里是邮件的内容")
</template>

<script>
import Avater from '../avater'
import Mail from './Mail'
import { mapState } from 'vuex'
export default {
  props:{
    time:{
      type:String,
      required:true
    },
    username:{
      type:String,
      required:true
    },
    message:{
      required:true
    }
  },
  computed: mapState([
    'chatLog'
  ]),
  components: {
    Avater,
    Mail
  },
}
</script>

<style lang="postcss" scoped>
.default-bubble{
  padding: 10px;
  display: flex;
  border-bottom: 2px dashed #eae9f3;
  .information{
    margin-left: 10px;
    .from{
      display: flex;
      height: 20px;
      line-height: 20px;
      .user-name{
        font-weight: bold;
      }
      .time{
        font-size: 0.8rem;
        color: #ccc;
        margin-left: 10px;
      }
    }
    .text{
      line-height: 18px;
      list-style-type: none;
      display: flex;
    }
    p{
      display: inline;
    }
    .ico{
      color: lightskyblue;
    }
  }
}
</style>
