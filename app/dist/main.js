module.exports=function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(e,n){e.exports=require("electron")},function(e,n){e.exports=require("path")},function(e,n,t){"use strict";function o(){s=new i.BrowserWindow({width:860,height:590,minWidth:750,minHeight:400,frame:!1,autoHideMenuBar:!0,title:"聊天窗口"}),s.loadURL("file://"+__dirname+"/dist/index.html#"),p=new a(u.join(__dirname,"../../icons/icon16.png"));var e=[{label:"显示主窗口",accelerator:"CmdOrCtrl+R",click:function(){s.restore(),s.show()}},{label:"最小化窗口",accelerator:"CmdOrCtrl+M",click:function(){s.minimize()}},{type:"separator"},{label:"关于我们",accelerator:"CmdOrCtrl+A",click:function(){}},{type:"separator"},{label:"退出",accelerator:"CmdOrCtrl+Q",click:function(){r.showMessageBox({type:"question",buttons:["确定","取消"],title:"退出linkdood",cancelId:99,message:"确定退出吗?"},function(e){0===e&&i.app.quit()})}}],n=l.buildFromTemplate(e);p.setToolTip("信源豆豆"),p.setHighlightMode(!0),p.on("click",function(){s.restore(),s.show()}),p.setContextMenu(n),s.on("close",function(e){i.app.quit()})}var i=t(0),r=t(0).dialog,c=t(0),l=c.Menu,a=c.Tray,u=t(1),s=null,p=null;"file://"+__dirname+"/index.html",i.app.on("ready",o),i.app.on("window-all-closed",function(){"darwin"!==process.platform&&i.app.quit()}),i.app.on("activate",function(){null!==s&&s.show()}),i.ipcMain.on("main-window-message",function(e,n){switch(console.log("收到主进程消息:"+n),e.returnValue="ok",n){case"minimize":s.minimize();break;case"close":s.hide()}})}]);