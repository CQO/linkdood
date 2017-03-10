
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
    Mail(title="Insta360 Air产品评审会邀请函",content="Insta360 Air可让安卓手机秒变全景相机，即插即拍，画质高达3K，实时拼接无需后期，一键分享至社交平台。除了支持全景直播，还可适配电脑进行远程全景视频聊天/会议。[1] 而鱼眼、透视、小行星等趣味全景影像视角，深度优化的拼接技术和配合头显进入VR模式，将为用户打造了智能快捷的高画质沉浸式体验，可广泛适用于旅游、聚会、婚礼、新闻、活动、赛事等场景。")
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
