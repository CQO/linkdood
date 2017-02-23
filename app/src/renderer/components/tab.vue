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
    .router-link-active{
      color: #84748e;
      background-color: #f9f9f9;
    }
  }
</style>

<template lang="pug">
    .box.two.tab
      router-link.tab-item.chat.ico(to="/chatList") 
      router-link.tab-item.contact.ico(to="/conversations") 
      .tab-item.other.ico 
</template>

<script>

</script>
