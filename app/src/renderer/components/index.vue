

<template lang="pug">
    .box.one
      .top-bar
        .minimize.button
        .fixed.button
        .close.button
      .column
        Tab
        router-view

</template>

<script>
import { mapState } from 'vuex'
import Tab from './tab';
import MessageBox from './messageBox';
export default {
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'status'
  ]),
  components: {
    Tab,
    MessageBox
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
      -webkit-app-region: drag;
      display: flex;
      flex-direction: row-reverse;
      .button{
        height: 16px;
        width: 16px;
        border-radius: 50%;
        margin: 7px 2px;
      }
      .minimize{
        background-color: antiquewhite;
      }
      .fixed{
        background-color: chartreuse;
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
