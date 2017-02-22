

<template lang="pug">
    .list-default.box
      ul
        li(v-for="item in this.chatLog.robot")
          router-link.box.road(to="/chatList/chatList")
            Avater.user-img(v-bind:username="item.name")
            p.text {{item.name}}
      router-view.messages-box
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
<style lang="postcss">
  .list-default.box{
    display: flex;
    ul{
      width: 30%;
      margin-top: 40px;
      height: 100%;
      background-color: #f9f9f9;
    }
    li{
      height: 55px;
      .box{
        display: flex;
      }
      .user-img{
        padding: 2px;
      }
      a{
        padding: 5px;
        height: 45px;
      }
      .router-link-active{
        background: #ccc;
      }
      .text{
        width: 100%;
        line-height: 50px;
      }
    }
    li:hover{
      background-color: #d4d4d4;
    }
    .messages-box{
      width: 70%
    }
  }
</style>
