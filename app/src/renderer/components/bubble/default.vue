
<template lang="pug">
.default-bubble
  Avater(v-bind:username="username")
  .information(v-if="username !== '邮件机器人'")
    .from
      .user-name {{username}}
      .time {{getDateDiff(time)}}
    li.text(v-for="item in message") 
      p.ico &#xe600; 
      p {{item.content}}
  .information(v-if="username === '邮件机器人'")
    Mail(title="您已将卡添加到您的PayPal账户",content=`<img height="46" width="113" border="0" style="display:block;" src="https://www.paypalobjects.com/en_US/i/logo/logo_emailheader_113wx46h.gif">
    <p><span style="border-bottom: 1px dashed rgb(204, 204, 204); z-index: 1; position: static;" t="5" times="">2017年3月8日</span>，您将卡x-xx36添加到了您的PayPal账户中。&nbsp;</p>
    <strong>并未进行更新？</strong>
    <p>如果您并未添加或更新此卡，请尽快登录您的PayPal账户并检查您的信息。如果您注意到任何不正常的活动，请立即通过点击PayPal主页上的<strong>帮助</strong>与我们联系。</p>
    `)
</template>

<script>
import Avater from '../avater'
import Mail from './Mail'
import { mapState } from 'vuex'
import fun from '../../vuex/fun'
export default {
  props:{
    time:{
      required:true
    },
    username:{
      type:String,
      required:true
    },
    message:{
      required:true
    }
  },
  data(){
    return{
      getDateDiff: function(nS){
        let result;
        const diffValue =  new Date().getTime() - nS;
        if(diffValue < 0){return;}
        const monthC =diffValue/2592000000;
        const weekC =diffValue/(7*86400000);
        const dayC =diffValue/86400000;
        const hourC =diffValue/3600000;
        const minC =diffValue/60000;
        if(monthC>=1){
            result="" + parseInt(monthC) + "月前";
        }
        else if(weekC>=1){
            result="" + parseInt(weekC) + "周前";
        }
        else if(dayC>=1){
            result=""+ parseInt(dayC) +"天前";
        }
        else if(hourC>=1){
            result=""+ parseInt(hourC) +"小时前";
        }
        else if(minC>=1){
            result=""+ parseInt(minC) +"分钟前";
        }
        else result="刚刚";
        return result;
      },
    }
  },
  computed: mapState([
    'chatLog'
  ]),
  components: {
    Avater,
    Mail
  },
}
</script>

<style lang="postcss" scoped>
.default-bubble{
  position: relative;
  padding: 10px;
  display: flex;
  border-bottom: 2px dashed #eae9f3;
  .information{
    margin-left: 10px;
    .from{
      display: flex;
      height: 20px;
      line-height: 20px;
      .user-name{
        font-weight: bold;
      }
      .time{
        font-size: 0.8rem;
        color: #ccc;
        margin-left: 10px;
      }
    }
    .text{
      line-height: 18px;
      list-style-type: none;
      display: flex;
    }
    p{
      display: inline;
    }
    .ico{
      color: lightskyblue;
    }
  }
}
.default-bubble:hover{
  background-color: #e7ffff;
}
</style>
