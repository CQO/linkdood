<template lang="pug">
    .box.two.tab
      router-link.tab-item.chat.ico(to="/chatList") &#xe734;
      router-link.tab-item.contact.ico(to="/conversations") &#xe63d;
      .tab-item.other.ico &#xe60b;
</template>

<script>

</script>

<style lang="postcss">
  .box.two.tab{
    background-color: #cacaca;
    height: 40px;
    display: flex;
    position: absolute;
    width: 30%;
    .tab-item{
      height: 100%;
      width: 33%;
      font-size: 1.6rem;
      color: #504848;
      line-height: 40px;
    }
    .tab-item:hover{
      color: bisque;
    }
    .router-link-active{
      color: goldenrod;
      background-color: #f9f9f9;
    }
  }
</style>
