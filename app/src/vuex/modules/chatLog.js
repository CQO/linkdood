"use strict";
import * as types from '../mutation-types';

const now = new Date();
let state = {
  friends:{
    10001:"西门吹雪",
    10002:"葫芦头",
    10003:"惨惨戚戚",
    10004:"财务人员",
    10005:"笔记本电脑",
    10006:"风和日丽",
    10007:"吴",
    10008:"一人独上西楼，月如钩",
  },
    
  chatList:[
    { item: '西门吹雪',id:"10001",lastMessage:'好的',time:'昨天' },
    { item: '葫芦头',id:"10002",lastMessage:'测试',time:'昨天' },
    { item: '财务人员',id:"10004",lastMessage:'好的',time:'昨天' },
  ],
  sessions:{
    "10001":{type:"people",messages: [{type:"text",userID:0,content: '最近在干嘛'},{type:"text",userID:1,content: 'Learn English'},{type:"text",userID:1,content: '你只要在桌面上点击鼠标右键，选择“新建文件夹”就行了。All you have to do is right-click on the desktop and select New Folder'}]},
    "10002":{type:"people",messages: [{type:"text",userID:0,content: '测试'}]},
    "10004":{type:"people",messages: [{type:"text",userID:0,content: '把用印申请表发给我'},{type:"text",userID:1,content: '什么时候要'},{type:"text",userID:0,content: '尽快吧'},{type:"text",userID:1,content: '好的'}]}
  }
};

const mutations = {
};

export default {
  state,
  mutations
};
