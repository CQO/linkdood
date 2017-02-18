'use strict';

import { app, BrowserWindow,ipcMain } from 'electron';
//收取邮件功能
import {getmail} from './mail.js';
const Dialog = require('electron').dialog;
const electron = require('electron');
const Menu = electron.Menu;
const Tray = electron.Tray;
const path = require('path');


let chatWindow=null,tray=null,config = {};
//创建聊天窗口
function createWindow(){
    chatWindow= new BrowserWindow({
        width: 860,
        height: 590,
        minWidth:750,
        minHeight:400,
        frame:false,
        autoHideMenuBar:true,
        show:false,
        title:"聊天窗口"
    });
    //加载聊天窗口
    if (process.env.NODE_ENV === 'development') {
        config=require('../../config');
        chatWindow.loadURL(`http://localhost:${config.port}/#/main`);
        //打开开发者工具条
        chatWindow.openDevTools();
        tray = new Tray(path.join(__dirname, '../icons/icon16.png'));
    } 
    else {
        chatWindow.loadURL(`file://${__dirname}/index.html#/main`);
        tray = new Tray(path.join(__dirname, './imgs/icon16.png'));
    }
    const trayMenuTemplate = [
        // 恢复窗口
        {label: '显示主窗口',accelerator: 'CmdOrCtrl+R',click: function() {chatWindow.restore();chatWindow.show();}}, 
        {label: '最小化窗口',accelerator: 'CmdOrCtrl+M',click: function() {chatWindow.minimize();}}, 
        {type: 'separator'}, {label: '关于我们',accelerator: 'CmdOrCtrl+A',click: function() {}}, 
        {type: 'separator'}, {
            label: '退出',
            accelerator: 'CmdOrCtrl+Q',
            click: function() {
                Dialog.showMessageBox({
                    type: 'question',
                    buttons: ['确定', '取消'],
                    title: '退出linkdood',
                    cancelId: 99,
                    message: '确定退出吗?'
                }, 
                function(response) {
                    if (response===0) {app.quit();}
                });
            }
        }
    ];
    const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
    tray.setToolTip('信源豆豆');
    tray.setHighlightMode(true);
    tray.on('click', function() {
        chatWindow.restore();// 显示主窗口
        chatWindow.show();// 获取焦点
    });
    tray.setContextMenu(contextMenu);
    //聊天窗口关闭事件
    chatWindow.on('close', (event) => {
        //关闭应用
        app.quit();
    });
}

// 当 Electron 完成了初始化并且准备创建浏览器窗口的时候
// 这个方法就被调用
app.on('ready', createWindow);

// 当所有窗口被关闭了，退出。
app.on('window-all-closed', () => {
  // 在 OS X 上，通常用户在明确地按下 Cmd + Q 之前
  // 应用会保持活动状态
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
    if (chatWindow!==null) {
        chatWindow.show();
    }
});
let fixedWindow=null;
//监听程序最小化请求
ipcMain.on('main-window-message', function(event, arg) {
  console.log(`收到IPC消息:${arg}`);
  
  switch (arg){
    case "minimize":chatWindow.minimize();event.returnValue = 'ok';break;
    case "close":chatWindow.hide();event.returnValue = 'ok';break;
    case "mail":{
        getmail("100284685","zhoqwqzgrkhmcbcc","imap.qq.com",function(data){
            event.returnValue = data;
        });
        break;
    }
    //固定到桌面
    case "fixed":{
        fixedWindow= new BrowserWindow({
            width: 270,
            height: 120,
            x:1200,
            y:100,
            alwaysOnTop:true,
            skipTaskbar:false,

        });
        fixedWindow.loadURL(`file://${__dirname}/Notes.html`);
        //打开开发者工具条
        //fixedWindow.openDevTools();
        event.returnValue = "OK";
        break;
    }
  }  
});


