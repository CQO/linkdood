"use strict";
import * as types from '../mutation-types';
import Vue from 'vue';
let state = {
  contacts:{},
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
    history.back();
    Vue.delete(state.chatList,id);
  },
  //新增对话
  [types.ADD_CHAT] (state,date) {
    Vue.set(state.chatList, date.id,{ item: date.item,id:date.id,lastMessage:'',time:'昨天' });
    if(!state.sessions[date.id]){
      Vue.set(state.sessions, date.id,{type:"people",messages: []});
    }
  },
  //设置好友列表
  [types.SET_CONTACT_LIST] (state,date) {
    state.contacts=date;
  },
};

export default {
  state,
  mutations
};
