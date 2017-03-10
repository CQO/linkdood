"use strict";
import * as types from '../mutation-types';
import fun from '../fun';
import Vue from 'vue';
const Fs = require('fs');
let state = {
  mark:{
    "80000":['8649813','9130729'],
    "80001":['2737304'],
    "80003":['2342353']
  },
  contacts:{
    "80000":{name:"王斌"},
    "80001":{name:"回复机器人"},
    "80002":{name:"HR机器人"},
    "80003":{name:"邮件机器人"},
    "88888":{name:"我"}
  },
  chatList: [
    {name:"王斌",id:"80000"},
    {name:"回复机器人",id:"80001"},
    {name:"邮件机器人",id:"80003"}
  ],
  robot:{
    "80000":{name:"王斌",file:"mail",ico:""},
    "80001":{name:"HR机器人",file:"HR",ico:""}
  },
  sessions:{
    "80000":{
      type:"people",
      messages: {
        '8649813':[{type:"text",userID:'80000',content: '最近在干嘛'}],
        '9130729':[
          {type:"text",userID:'88888',content: 'Learn English'},
          {type:"text",userID:'88888',content: '你只要在桌面上点击鼠标右键，选择“新建文件夹”就行了。All you have to do is right-click on the desktop and select New Folder'}
        ],
      }
    },
    "80001":{
      type:"robot",
      messages: {
        '2737304':[{type:"text",userID:'80001',content: '你可以和我聊天'}],
      }
    },
    "80003":{
      type:"robot",
      messages: {
        '2342353':[{type:"mail",userID:'80003',content: '你可以和我聊天'}],
      }
    }
  }
};

const mutations = {
  [types.ADD_DIALOGUE] (state,date) {
    const userID = date.id,
          mark = state.mark[userID],
          markID = mark[mark.length-1],
          myDate = new Date();
    //追加到最后一个对话
    const time = myDate.getTime();
    Vue.set(state.sessions[userID].messages,time,[{type:"text",userID:date.userID,content: date.msg}]);
    Vue.set(mark,mark.length,time);
    //将消息加到会话列表
    // state.chatList.forEach(function(val,i){
    //   if(val.id===date.id){
    //     //复制一个当前对话示例
    //     let chatList = state.chatList[i];
    //     chatList.lastMessage=date.msg;
    //     //获取当前时间，并设置
    //     const myDate = new Date();
    //     chatList.time=fun.getDateDiff(myDate.getTime());
    //     state.chatList.unshift(state.chatList[i]);
    //     state.chatList.splice(i+1, 1);
    //     return;
    //   }
    // });

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
