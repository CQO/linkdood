<style lang="postcss">
.default-bubble{
  height: 45px;
  padding: 10px;
  display: flex;
  .information{
    margin-left: 10px;
    .from{
      display: flex;
      height: 25px;
      line-height: 25px;
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
      height: 20px;
      line-height: 20px;
    }
  }
}
</style>
<template lang="pug">
    .default-bubble.box
      Avater(username="测试")
      .information
        .from
          .user-name luojin
          .time 早上9:36
        .text 这是一段测试信息


</template>
<script>
import Avater from '../avater'
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'chatLog'
  ]),
  components: {
    Avater
  },
}
</script>
