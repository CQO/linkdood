<template lang="pug">
    .bubble(v-bind:class="[left ? 'message-right' : 'message-left']")
        img.user-img(v-bind:src="userImg")
        .message {{content}}
        .clear
</template>
<script type="text/babel">
export default {
  props: {
    left:{
      type: Boolean,
      default: true
    },
    userImg: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
  },

}
</script>
