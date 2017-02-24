<template lang="pug">
    .list-default.box
      ul
        li.contacts
          .ico 
          .title  新增联系人
        li.contacts(v-on:click="isOpen=!isOpen")
          .ico(v-bind:class="{ active: isOpen }") 
          .title 联系人
        li(v-if="isOpen",v-for="item in this.chatLog.contacts")
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