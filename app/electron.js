'use strict';

const electron = require('electron');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

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
  /**
   * Initial window options
   */
    mainWindow = new BrowserWindow({
        height: 400,
        resizable: false,
        width: 280
    });

    // 加载应用入口
    mainWindow.loadURL(config.url);
    //if (process.env.NODE_ENV === 'development') {
        //BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'));
        //let installExtension = require('electron-devtools-installer');
        //installExtension.default(installExtension.VUEJS_DEVTOOLS)
        //.then((name) => mainWindow.webContents.openDevTools())
        //.catch((err) => console.log('An error occurred: ', err));
    //}

    // 当 window 被关闭，这个事件会被发出
    mainWindow.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 但这次不是。
        mainWindow = null;
    });

    console.log('程序窗口已打开');
    // 打开开发工具
    mainWindow.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
