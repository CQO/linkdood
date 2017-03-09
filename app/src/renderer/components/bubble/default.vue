
<template lang="pug">
.default-bubble
  Avater(v-bind:username="username")
  .information
    .from
      .user-name {{username}}
      .time {{time}}
    li.text(v-for="item in message") 
      p.ico &#xe600; 
      p {{item.content}}
</template>

<script>
import Avater from '../avater'
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
    Avater
  },
}
</script>

<style lang="postcss" scoped>
.default-bubble{
  padding: 10px;
  display: flex;
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
