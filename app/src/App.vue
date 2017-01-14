<style>
  * {margin: 0;padding: 0;}
  html,body,.box { height: 100%; width: 100%}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}
  table{border-collapse:collapse;border-spacing:0}
  fieldset,img{border:0;vertical-align:top}
  address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:400}
  ol,ul{list-style:none}
  caption,th{text-align:left}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}
  q:before,q:after{content:""}
  div{width: 100%;height: 100%;}
  html,body{background:#fff}
  a{text-decoration:none;color:#666}
  a:hover{text-decoration:underline}
  i{font-style:normal}
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
