'use strict';

const electron = require('electron');
const app = electron.app;// 控制应用生命周期的模块。
const BrowserWindow = electron.BrowserWindow;// 创建原生浏览器窗口的模块

// 保持一个对于 window 对象的全局引用，不然，当 JavaScript 被 GC，
// window 会被自动地关闭
let mainWindow;
let config = {};

if (process.env.NODE_ENV === 'development') {
    config = require('../config');
    config.url = `http://localhost:${config.port}`;
} 
else {
    config.devtron = false;
    config.url = `file://${__dirname}/dist/index.html`;
}

function createWindow () {
    // 创建浏览器窗口。
    mainWindow = new BrowserWindow({
        height: 400,
        resizable: false,
        autoHideMenuBar:true,//隐藏程序菜单，按alt显示
        maximizable:false,//窗口是否可以最大化
        fullscreenable:false,
        width: 280
    });

    // 加载应用入口
    mainWindow.loadURL(config.url);
    if (process.env.NODE_ENV === 'development') {
        // 打开开发工具
        mainWindow.openDevTools();
        //BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'));
        //let installExtension = require('electron-devtools-installer');
        //installExtension.default(installExtension.VUEJS_DEVTOOLS)
        //.then((name) => mainWindow.webContents.openDevTools())
        //.catch((err) => console.log('An error occurred: ', err));
    }

    // 当 window 被关闭，这个事件会被发出
    mainWindow.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 但这次不是。
        mainWindow = null;
    });

    console.log('程序窗口已打开');
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
    if (mainWindow === null) {
        createWindow();
    }
});
