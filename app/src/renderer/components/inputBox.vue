<template lang="pug">
  .input-box.box(v-bind:class="{ active: isOpen }")
    <!-- 工具条 -->
    .tool-bar(v-if="isOpen")
      .biaoqing.item(v-on:click="expressionOpen=!expressionOpen")
        p.ico &#xe610;
        p.name 表情
      .yuancheng.item
        p.ico &#xe617;
        p.name 远程
      .jietu.item
        p.ico &#xe60d;
        p.name 截图
    <!-- 工具窗体 -->
    .biaoqing-panel(v-if="expressionOpen")
      .item(v-for="item in expression",v-on:click="message+='{-#'+item.code+'-}'")
        p(v-html=`'<svg class="icon" aria-hidden="true"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'+item.code+'"></use> </svg>'`)
        p.meaning {{item.name}}
    <!-- 输入框扩展按钮 -->
    .tool.ico(v-if="isOpen",v-on:click="closeMenu") &#xe727;
    .tool.ico(v-else,v-on:click="isOpen=true") &#xe6fd;
    <!-- 输入框 -->
    textarea.text(v-on:keyup.enter="sendMessage",v-model="message")
    .send.ico(v-on:click.stop="sendMessage") &#xe840;
</template>

<script>
import fun from '../vuex/fun'
export default {
  data(){
    return{
      message:"",
      isOpen: false,
      expressionOpen:false,
      expression:[
        {code:"icon-Expression_",name:"名称"},
        {code:"icon-Expression_1",name:"名称"},
        {code:"icon-Expression_2",name:"名称"},
        {code:"icon-Expression_3",name:"名称"},
        {code:"icon-Expression_4",name:"名称"},
        {code:"icon-Expression_5",name:"名称"},
        {code:"icon-Expression_6",name:"名称"},
        {code:"icon-Expression_7",name:"名称"},
        {code:"icon-Expression_8",name:"名称"},
        {code:"icon-Expression_9",name:"名称"},
        {code:"icon-Expression_10",name:"名称"},
        {code:"icon-Expression_11",name:"名称"},
        {code:"icon-Expression_12",name:"名称"},
        {code:"icon-Expression_13",name:"名称"},
        {code:"icon-Expression_14",name:"名称"},
        {code:"icon-Expression_15",name:"名称"},
        {code:"icon-Expression_16",name:"名称"},
        {code:"icon-Expression_17",name:"名称"},
        {code:"icon-Expression_18",name:"名称"},
        {code:"icon-Expression_19",name:"名称"},
        {code:"icon-Expression_20",name:"名称"},
        {code:"icon-Expression_21",name:"名称"},
        {code:"icon-Expression_22",name:"名称"},
        {code:"icon-Expression_23",name:"名称"},
        {code:"icon-Expression_24",name:"名称"},
        {code:"icon-Expression_25",name:"名称"},
        {code:"icon-Expression_26",name:"名称"},
        {code:"icon-Expression_27",name:"名称"},
        {code:"icon-Expression_28",name:"名称"},
        {code:"icon-Expression_29",name:"名称"},
        {code:"icon-Expression_30",name:"名称"},
        {code:"icon-Expression_31",name:"名称"},
        {code:"icon-Expression_32",name:"名称"},
        {code:"icon-Expression_33",name:"名称"},
        {code:"icon-Expression_34",name:"名称"}
      ]
    }
  },
  methods:{
    sendMessage(){
      const id = this.$route.params.id
      const talk= {
        receiverID:id,
        senderID:88888,
        msg:this.message,
        conversationID:id
      }
      const _this = this
      this.message = "";
      this.$store.commit("ADD_DIALOGUE",talk)
      fun.Ajax.get(`http://www.tuling123.com/openapi/api?key=bb1b96a394b19b8ce2c61cf32c64d695&userid=123&info=${talk.msg}`,function(e){
        const message = JSON.parse(e);
        const talk= {receiverID:88888,senderID:id,msg:message.text,conversationID:id}
        _this.$store.commit("ADD_DIALOGUE",talk)
      })
    },
    //关闭所有菜单
    closeMenu(){
      this.isOpen=false
      this.expressionOpen=false
    }
  },
}
</script>

<style lang="postcss" scoped>
.input-box.box{
  height: 40px;
  display: flex;
  border-top: 1px solid #eceef2;
  background-color: #e5e5ff;
  position: relative;
  .tool{
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 2rem;
    color: cornflowerblue;
  }
  .tool-bar{
    position: absolute;
    width: 40px;
    bottom: 40px;
    height: 160px;
    background-color: #e5e5ff;
    color: cornflowerblue;
    border-bottom: 1px solid #bacff5;
    border-top: 1px solid #bacff5;
  }
  .text{
    width: calc(100% - 80px);
    outline: none;
    border: none;
    resize: none;
    line-height: 40px;
    font-size: 1.2rem;
    background-color: #e5e5ff;
  }
  .send{
    width: 40px;
    height: 40px;
    color: cornflowerblue;
  }
  .ico{
    line-height: 40px;
    font-size: 2rem;
  }
  .name{
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    text-align: center;
  }
  .biaoqing-panel{
    position: absolute;
    height: 160px;
    width: 360px;
    left: 40px;
    bottom: 40px;
    background-color: #e5e5ff;
    border: 1px solid #bacff5;
    .item{
      float: left;
      width: 40px;
      height: 40px;
    }
    
    .meaning{
      font-size: 12px;
      height: 16px;
      line-height: 16px;
      text-align: center;
    }
  }
  .item:hover{
    color: goldenrod;
  }
  
}
.active{
}
</style>

