<style lang="less">
    @import './chat.less';
</style>
<template lang="pug">
    .main-window
        .side-bar.box
            ChatSideBar
        .contacts.box
            Contacts
        .chat-box.box
        .clear
</template>
<script>
  import ChatSideBar from './dashboard/ChatSideBar'
  import Contacts from './chat/Contacts'
  export default {
    components: {
      ChatSideBar,
      Contacts
    }
  }
</script>
