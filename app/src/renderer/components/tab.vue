<template lang="pug">
    <!--程序标题栏下左侧的选项卡。-->
    .box.two.tab
      <!--选项卡的第一个选项，点击会调转到聊天列表。-->
      router-link.tab-item.chat.ico(to="/chatList") &#xe734;
      <!--选项卡的第二个选项，点击会调转到联系人列表。-->
      router-link.tab-item.contact.ico(to="/conversations") &#xe63d;
      <!--选项卡的第三个选项，没有实现的功能。-->
      .tab-item.other.ico(v-on:click="error") &#xe60b;
</template>

<script>
export default {
  methods:{
    error(){
      alert('当前版本暂不支持，敬请期待！')
      this.closeMenu()
    }
  },
}
</script>

<style lang="postcss">
  .box.two.tab{
    background-color: #e5e7eb;
    height: 40px;
    display: flex;
    position: absolute;
    width: 30%;
    border-right: 1px solid #d7d7de;
    .tab-item{
      height: 100%;
      width: 33%;
      font-size: 1.6rem;
      color: #31393f;
      line-height: 40px;
    }
    .router-link-active{
      background-color: #f1f1f1;
    }
  }
</style>
