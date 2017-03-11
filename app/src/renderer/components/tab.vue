<template lang="pug">
    <!--程序标题栏下左侧的选项卡。-->
    .box.two.tab
      <!--选项卡的第一个选项，点击会调转到聊天列表。-->
      router-link.tab-item.chat.ico(to="/chatList") &#xe734;
      <!--选项卡的第二个选项，点击会调转到联系人列表。-->
      router-link.tab-item.contact.ico(to="/conversations") &#xe63d;
      <!--选项卡的第三个选项，没有实现的功能。-->
      .tab-item.other.ico &#xe60b;
</template>

<style lang="postcss">
  .box.two.tab{
    background-color: #cacaca;
    height: 40px;
    display: flex;
    position: absolute;
    width: 30%;
    border-right: 1px solid #d7d7de;
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
      background-color: gainsboro;
      color: darkorchid;
    }
  }
</style>
