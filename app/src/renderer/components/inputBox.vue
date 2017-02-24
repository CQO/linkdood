<template lang="pug">
  .input-box.box
    .tool.ico 
    textarea.text
    .send.ico 
</template>

<script>

</script>
<style lang="postcss">
.input-box.box{
  height: 40px;
  background-color: aquamarine;
  display: flex;
  .tool{
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 2rem;
    color: #fff9f1;
    
  }
  .text{
    width: calc(100% - 80px);
    outline: none;
    border: none;
    resize: none;
    background-color: antiquewhite;
    line-height: 40px;
    font-size: 1.2rem;
  }
  .send{
    width: 40px;
    height: 40px;
    background-color: #77cc86;
    color: white;
  }
  .ico{
    line-height: 40px;
    font-size: 2rem;
  }
}
</style>

