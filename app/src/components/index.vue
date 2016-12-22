<style lang="less">
    @import './index.less';
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
