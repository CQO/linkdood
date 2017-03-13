<template lang="pug">
    .list.box
      ul.list-default
        li.contacts(v-on:click="isOpen=!isOpen")
          .ico(v-bind:class="{ active: isOpen }") &#xe635;
          .title 对话列表
        li(v-if="isOpen",v-for="item in this.chatLog.chatList")
          router-link.box.road(v-bind:to="'/chatList/dialog/'+item.id") 
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
  data(){
    return{
      isOpen: true
    }
  },
}
</script>

<style lang="postcss">
.list.box{
  display: flex;
}
  .list-default{
    margin-top: 40px;
    height: 100%;
    border-right: 1px solid #d7d7de;
    background-color: aliceblue;
    .contacts{
      display: flex;
      color: dodgerblue;
      background-color: gainsboro;
      .ico{
        width: 25px;
        height: 25px;
        line-height: 25px;
        margin: 10px 5px;
        font-size: 1rem;
        transition: All 0.4s ease-in-out;
      }
      .active{
        transform: rotate(90deg);
      }
      .title{
        height: 45px;
        line-height: 45px;
      }
    }
    li{
      width: 258px;
      height: 45px;
      -webkit-user-select: none;
      .box{
        display: flex;
        padding-left: 10px;
        width: inherit;
      }
      a{
        padding: 5px;
        height: 35px;
      }
      .router-link-active{
        background: #fff;
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
