'use strict';

const electron = require('electron');
const app = electron.app;// 控制应用生命周期的模块。
const BrowserWindow = electron.BrowserWindow;// 创建原生浏览器窗口的模块
const {ipcMain} = require('electron');

// 保持一个对于 window 对象的全局引用，不然，当 JavaScript 被 GC，
// window 会被自动地关闭
let signWindow=null,chatWindow=null,config = {};

if (process.env.NODE_ENV === 'development') {
    config = require('../config');
    config.url = `http://localhost:${config.port}`;
} 
else {
    config.devtron = false;
    config.url = `file://${__dirname}/dist/index.html`;
}

function createWindow () {
    // 创建登录窗口。
    // 高400px 宽280px
    // resizable:大小不可变
    // autoHideMenuBar:隐藏程序菜单，按alt显示
    // maximizable:窗口是否可以最大化
    signWindow = new BrowserWindow({height: 400,resizable: false,autoHideMenuBar:true,maximizable:false,fullscreenable:false,width: 280,title:"登陆窗口"});

    // 加载应用入口
    signWindow.loadURL(config.url);
    // 打开开发工具
    if (process.env.NODE_ENV === 'development') {signWindow.openDevTools();}
    // 登陆窗口关闭事件
    signWindow.on('closed', () => {
        signWindow = null;
        if (chatWindow===null) {
            app.quit();
        }
    });
    //监听消息userLogin
    ipcMain.on('userLogin', (event, arg) => {
        //关闭登录窗口打开聊天窗口
        signWindow.close();
        chatWindow= new BrowserWindow({height: 600,width: 360,title:"欢迎界面"});
        //加载聊天窗口
        chatWindow.loadURL(`http://localhost:${config.port}/#/chatMainWindow`);
        //聊天窗口关闭事件
        chatWindow.on('close', (event) => {
            //如果窗口可见那么最小化，否则关闭应用
            if(chatWindow.isVisible()){
                event.preventDefault();
            }
            chatWindow.hide();
        });
        //判断打开开发者工具条
        if (process.env.NODE_ENV === 'development') {chatWindow.openDevTools();}
    });
    console.log('登录窗口已打开');
}

// 当 Electron 完成了初始化并且准备创建浏览器窗口的时候
// 这个方法就被调用
app.on('ready', createWindow);

// 当所有窗口被关闭了，退出。
app.on('window-all-closed', () => {
    // 在 OS X 上，通常用户在明确地按下 Cmd + Q 之前
    // 应用会保持活动状态
    if (process.platform !== 'darwin') {app.quit();}
});

app.on('activate', () => {
    if (chatWindow!==null) {
        chatWindow.show();
    }
});
