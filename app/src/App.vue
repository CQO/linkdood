<style>
  * {margin: 0;padding: 0;}
  html,body,.box { height: 100%; width: 100%}

  body {
    font-family: Helvetica, Tahoma, Arial, STXihei, “华文细黑”, “Microsoft YaHei”, “微软雅黑”, sans-serif;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
  }
</style>

<template>
  <div class="box">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  export default {
    store
  }
</script>
