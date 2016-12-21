<style lang="less">
  .box
    background-color: #f0f0f0
    img
      margin-top: 10px
      width: 40%
      margin-bottom: 20px
</style>

<template lang="jade">
    .box
        img(src="./sign/assets/logo.png", alt="electron-vue",draggable="false")
        Login
</template>

<script>
  import Login from './sign/Login'
  export default {
    components: {
      Login
    },
    name: 'landing-page'
  }
</script>
