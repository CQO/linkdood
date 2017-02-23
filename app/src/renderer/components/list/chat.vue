<template lang="pug">
    .list-default.box
      ul
        li.contacts
          .ico 
          .title 新增对话
        li.contacts(v-on:click="isOpen=!isOpen")
          .ico(v-bind:class="{ active: isOpen }") 
          .title 联系人
        li(v-if="isOpen",v-for="item in this.chatLog.robot")
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
  data(){
    return{
      isOpen: false
    }
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
      .contacts{
        display: flex;
        color: #928e8e;
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
    }
    li{
      height: 45px;
      .box{
        display: flex;
        padding-left: 10px;
        width: inherit;
      }
      .user-img{
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
