<template lang="pug">
    .list.box
      ul.list-default
        li.contacts(v-on:click="error")
          .ico &#xe640;
          .title  新增联系人
        li.contacts(v-on:click="isOpen=!isOpen")
          .ico(v-bind:class="{ active: isOpen }") &#xe635;
          .title 联系人
        li(v-if="isOpen",v-for="(item, key) in this.chatLog.contacts")
          router-link.box.road(v-bind:to="'/conversations/dialog/'+key")
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
  methods:{
    error(){
      alert('当前版本暂时无法添加联系人，敬请期待！')
      this.closeMenu()
    }
  },
  data(){
    return{
      isOpen: true
    }
  },
}
</script>