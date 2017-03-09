<template lang="pug">
  .input-box.box
    .tool.ico &#xe6fd;
    textarea.text
    .send.ico &#xe840;
</template>

<script>

</script>
<style lang="postcss">
.input-box.box{
  height: 40px;
  display: flex;
  border-top: 1px solid #eceef2;
  .tool{
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 2rem;
    color: #d4cec6;
  }
  .text{
    width: calc(100% - 80px);
    outline: none;
    border: none;
    resize: none;
    line-height: 40px;
    font-size: 1.2rem;
  }
  .send{
    width: 40px;
    height: 40px;
    color: #d4cec6;
  }
  .ico{
    line-height: 40px;
    font-size: 2rem;
  }
}
</style>

