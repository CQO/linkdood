<style lang="postcss">
@import './default.postcss';

</style>
<template lang="pug">
    .bubble(v-bind:class="[this.left ? 'message-left' : 'message-right']")
        Avatar.user-img(v-bind:src="userImg",v-bind:size='45',username="me")
        .message {{content}}
</template>
<script type="text/babel">
import Avatar from '../avatar/default'
export default {
  components: {
      Avatar
  },
  props: {
    left:{
      type: Boolean,
      default: false
    },
    userImg: {
      type: String,
    },
    content: {
      type: String,
      required: true
    },
  },

}
</script>
