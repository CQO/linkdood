"use strict";
import * as types from '../mutation-types';
import fun from '../../components/module/fun';
import Vue from 'vue';
const Fs = require('fs');
let state = {
  contacts:{},
  chatList:[
    { item: "测试",id:"10002",lastMessage:'测试',time:'昨天' }
  ],
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
    state.chatList.forEach(function(val,i){
      if(val.id===date.id){
        //复制一个当前对话示例
        let chatList = state.chatList[i];
        chatList.lastMessage=date.msg;
        //获取当前时间，并设置
        const myDate = new Date();
        chatList.time=fun.getDateDiff(myDate.getTime());
        state.chatList.unshift(state.chatList[i]);
        state.chatList.splice(i+1, 1);
        return;
      }
    });

  },
  //删除对话成员
  [types.DELETE_THE_CONVERSATION_MEMBER] (state,id) {
    history.back();
    state.chatList.forEach(function(val,i){
      if(val.id===id){
        state.chatList.splice(i, 1);
      }
    });
  },
  //新增对话
  [types.ADD_CHAT] (state,date) {
    const newChat = { item: date.item,id:date.id,lastMessage:'',time:'昨天' };
    state.chatList.unshift(newChat);
    if(!state.sessions[date.id]){
      Vue.set(state.sessions, date.id,{type:"people",messages: []});
    }
  },
  //设置好友列表
  [types.SET_CONTACT_LIST] (state,date) {
    state.contacts=date;
  },
  //保存聊天记录
  [types.SAVE_YOUR_CHATS] (state,date) {
    //写文件
    Fs.writeFile('/Users/puge/github/linkdood/data.json', JSON.stringify(state), (err) => {
      if (err) {console.log(err);}
      console.log('It\'s saved!');
    });
    //读文件
    Fs.readFile('/Users/puge/github/linkdood/data.json',{flag: 'r+', encoding: 'utf8'}, (err, data) => {
      if (err) {console.log(err);}
      console.log(data);
    });
  },
};

export default {
  state,
  mutations
};
