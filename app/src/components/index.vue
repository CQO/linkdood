<style scoped>
  .box{
    background-color: #f0f0f0;
  }
  img {
    margin-top: 10px;
    width: 40%;
    margin-bottom: 20px;
  }
</style>

<template>
  <div class="box">
    <img src="./sign/assets/logo.png" alt="electron-vue">
    <Login></Login>
  </div>
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
