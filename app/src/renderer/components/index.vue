

<template lang="pug">
    .box.one
      .top-bar
      .column
          Tab
          router-view

</template>

<script>
import { mapState } from 'vuex'
import Tab from './tab';
import MessageBox from './messageBox';
import InputBox from './inputBox';
export default {
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'status'
  ]),
  components: {
    Tab,
    MessageBox,
    InputBox
  },
}
</script>

<style lang="postcss">
  .box.one{
    .display: flex;
    flex-direction: column;
    .top-bar{
      background-color: #ccc;
      height: 30px;
      -webkit-app-region: drag;
    }
    .column{
      height: 100%;
      display: flex;
    }
  }
</style>
