

<template lang="pug">
    .list-default.box
      ul
        li(v-for="item in this.chatLog.robot")
          router-link.box.road(v-bind:to="'/chatList/dialog/'+item.file")
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
      margin-top: 30px;
      height: 100%;
      background-color: #f9f9f9;
    }
    li{
      height: 45px;
      .box{
        display: flex;
      }
      .user-img{
      }
      a{
        padding: 5px;
        height: 35px;
      }
      .router-link-active{
        background: #ccc;
      }
      .text{
        margin-left: 10px;
        width: 200px;
        overflow: hidden;
        line-height: 35px;
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
