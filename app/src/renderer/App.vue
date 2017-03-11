<template lang="pug">
  .box
    router-view
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
html,body { height: 100%; width: 100%;background:#fff;}
.box{height: 100%; width: 100%;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}
img{border:0;vertical-align:top}
ol,ul{list-style:none}
caption,th{text-align:left}
a{text-decoration:none;color:#666;-webkit-user-drag: none;}
a:hover{text-decoration:none}
body {
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  background-position: center;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  overflow: hidden;
}
/* 滚动条样式 */
div::-webkit-scrollbar,ul::-webkit-scrollbar{width: 6px;}
div::webkit-scrollbar-track-piece,ul::webkit-scrollbar-track-piece{background-color:black;}
div::-webkit-scrollbar-thumb,ul::-webkit-scrollbar-thumb{border-radius: 10px;background-color: rgb(112, 137, 212);   }
div::-webkit-scrollbar-track,ul::-webkit-scrollbar-track{background-color: #e5f1fa;}
/* 图标字体 */
@font-face {font-family: 'owo';src: url('http://at.alicdn.com/t/font_sva7tcdkmwnj0pb9.woff') format('woff');font-weight: normal;font-style: normal;}
.ico{text-align: center;font-family: "owo";font-style: normal;cursor: pointer;-webkit-user-select: none;}

.bubble:hover{
  background-color: #fafbf8;
}
.icon {
  width: 1rem; height: 1rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
