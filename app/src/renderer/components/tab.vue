<style lang="postcss">
  .box.two.tab{
    background-color: #495763;
    height: 40px;
    display: flex;
    position: absolute;
    width: 30%;
    .tab-item{
      height: 100%;
      width: 33%;
      font-size: 1.6rem;
      color: #ccc;
      line-height: 40px;
    }
  }
</style>

<template lang="pug">
    .box.two.tab
      router-link.tab-item.chat.ico(to="/chatList") 
      .tab-item.contact.ico 
      .tab-item.other.ico 
</template>

<script>

</script>
