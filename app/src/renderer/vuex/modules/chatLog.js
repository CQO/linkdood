"use strict";
import * as types from '../mutation-types';
import Vue from 'vue';
let state = {
  friends:{
    A:{
      10000:{name:"阿尔帕提江",pinyin:"aerpatijiang",initials:"A"},
    },
    B:{
      10005:{name:"笔记本电脑",pinyin:"bijibendiannao",initials:"B"},
    },
    C:{
      10003:{name:"菜花",pinyin:"caihua",initials:"C"},
      10004:{name:"财务人员",pinyin:"caiwurenyuan",initials:"C"},
    },
    F:{
      10006:{name:"风和日丽",pinyin:"fengherili",initials:"F"},
    },
    H:{
      10002:{name:"葫芦头",pinyin:"hulutou",initials:"H"},
      10011:{name:"划船",pinyin:"huachuan",initials:"H"},
    },
    L:{
      10015:{name:"理解",pinyin:"lijie",initials:"L"},
    },
    S:{
      10013:{name:"石头",pinyin:"shitou",initials:"S"},
    },
    W:{
      10007:{name:"吴",pinyin:"wu",initials:"W"},
      10016:{name:"文章",pinyin:"wenzhang",initials:"W"},
    },
    X:{
      10001:{name:"西门吹雪",pinyin:"ximenchuixue",initials:"X"},
    },
    Y:{
      10008:{name:"一人独上西楼，月如钩",pinyin:"yirendushangxilou,yuerugou",initials:"Y"},
      10010:{name:"月亮",pinyin:"yueliang",initials:"Y"},
      10012:{name:"叶子",pinyin:"yezi",initials:"Y"},
    },
    Z:{
      10009:{name:"中关村",pinyin:"zhongguancun",initials:"Z"},
      10014:{name:"芝麻开门",pinyin:"zhimakaimen",initials:"Z"},
    }
  },
    
  chatList:{
    "10001":{ item: '西门吹雪',id:"10001",lastMessage:'你只要在桌面上点击鼠标右键，选择“新建文件夹”就行了。All you have to do is right-click on the desktop and select New Folder',time:'昨天' },
    "10002":{ item: '葫芦头',id:"10002",lastMessage:'测试',time:'昨天' },
    "10004":{ item: '财务人员',id:"10004",lastMessage:'哦哦',time:'昨天' }
  },
  sessions:{
    "10001":{type:"people",messages: [{type:"text",userID:0,content: '最近在干嘛'},{type:"text",userID:1,content: 'Learn English'},{type:"text",userID:1,content: '你只要在桌面上点击鼠标右键，选择“新建文件夹”就行了。All you have to do is right-click on the desktop and select New Folder'}]},
    "10002":{type:"people",messages: [{type:"text",userID:0,content: '测试'}]},
    "10004":{type:"people",messages: [{type:"text",userID:0,content: '把用印申请表发给我'},{type:"text",userID:1,content: '什么时候要'},{type:"text",userID:0,content: '尽快吧'},{type:"text",userID:1,content: '哦哦'}]}
  }
};

const mutations = {
  [types.ADD_DIALOGUE] (state,date) {
    //将消息加到聊天窗口中
    state.sessions[date.id].messages.push({type:"text",userID:date.userID,content: date.msg});
    //将消息加到会话列表
    state.chatList[date.id].lastMessage=date.msg;
    state.chatList[date.id].time="现在";
  },
  //删除对话成员
  [types.DELETE_THE_CONVERSATION_MEMBER] (state,id) {
    state.chatList[id]="";
    delete state.chatList[id];
  },
  //新增对话
  [types.ADD_CHAT] (state,date) {
    console.log(date);
    Vue.set(state.chatList, 1,{ item: date.item,id:date.id,lastMessage:'',time:'昨天' });
  },
};

export default {
  state,
  mutations
};
