<style lang="postcss">
  .input-box{
    .input{
      width: calc(100% - 60px);
      height: 70px;
      .tool{
        height: 20px;
        display: flex;
      }
      .ico{
        width:25px;
        color:#ccc;
        line-height: 20px;
      }
      .text{
        height: inherit;
      }
    }
    .send{
      height: 50px;
      width: 50px;
      line-height: 50px;
      font-size: 2rem;
      color: gray;
      margin: 10px 0;
      border: 1px solid #6d6d67;
      border-radius: 50%;
    }
  }
</style>

<template lang="pug">
  .input-box.box
    .input
      .tool
        .ico.jietu 
        .ico.email 
        .ico.approval 
      .text
    .send.ico 
</template>

<script>

</script>
