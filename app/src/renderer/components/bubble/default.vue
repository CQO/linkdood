<style lang="postcss">
.default-bubble{
  height: 35px;
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
      height: 15px;
      line-height: 15px;
    }
  }
}
</style>
<template lang="pug">
    .default-bubble.box
      Avater(v-bind:username="username")
      .information
        .from
          .user-name {{username}}
          .time {{time}}
        .text {{content}}


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
    content:{
      type:String,
      required:true
    },
    username:{
      type:String,
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
