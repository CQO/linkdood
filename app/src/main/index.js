'use strict'

import { app, BrowserWindow,ipcMain } from 'electron'
const electron = require('electron');
const path = require('path');
const Menu = electron.Menu;
const Tray = electron.Tray;
const Dialog = electron.dialog;


let mainWindow
const winURL = process.env.NODE_ENV === 'development'? `http://localhost:${require('../../../config').port}`: `file://${__dirname}/index.html`


//创建聊天窗口
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 860,
    height: 590,
    minWidth:750,
    minHeight:400,
    frame:false,
    autoHideMenuBar:true,
    title:"聊天窗口"
  })
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {mainWindow = null})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

//监听ipc消息
ipcMain.on('main-window-message', function(event, arg) {
  console.log(`收到IPC消息:${arg}`);
  switch (arg){
    case "minimize":mainWindow.minimize();event.returnValue = 'ok';break;
    case "close":mainWindow.hide();event.returnValue = 'ok';break;
    //固定到桌面
    case "fixed":{}
  }  
});