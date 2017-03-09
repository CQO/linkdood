<template lang="pug">
    .box.one
      .top-bar
        .close.button.ico(v-on:click.stop="close") &#xe648;
        .fixed.button.ico &#xe61d;
        .minimize.button.ico(v-on:click.stop="minimize") &#xe641;
        .drag
      .column
        Tab
        router-view
</template>

<script>
import { mapState } from 'vuex'
import Tab from './tab';
import MessageBox from './messageBox';
const ipcRenderer = require('electron').ipcRenderer;
export default {
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'status'
  ]),
  components: {
    Tab,
    MessageBox
  },
  methods:{
    minimize(){
      //向主进程发送最小化消息
      ipcRenderer.sendSync('main-window-message', 'minimize');
    },
    close(){
      ipcRenderer.sendSync('main-window-message', 'close');
    },
  },
}
</script>

<style lang="postcss">
  .box.one{
    .display: flex;
    flex-direction: column;
    .top-bar{
      background-color: #adacac;
      height: 30px;
      display: flex;
      flex-direction: row-reverse;
      .drag{
        height: 100%;
        width: calc(100% - 48px);
        -webkit-app-region: drag;
      }
      .button{
        height: 16px;
        width: 16px;
        border-radius: 50%;
        margin: 7px 2px;
        color: rgba(255, 255, 255, 0);
        font-size: 0.7rem;
        line-height: 16px;
      }
      .button:hover{
        color: black;
      }
      .minimize{
        background-color: antiquewhite;
      }
      .fixed{
        background-color: chartreuse;
        line-height: 17px;
      }
      .close{
        background-color: darksalmon;
      }
    }
    .column{
      height: 100%;
      display: flex;
    }
  }
</style>
