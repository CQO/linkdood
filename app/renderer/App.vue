<style lang="postcss">
  * {margin: 0;padding: 0;}
  html,body,.box { height: 100%; width: 100%;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}
  table{border-collapse:collapse;border-spacing:0}
  fieldset,img{border:0;vertical-align:top}
  address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:400}
  ol,ul{list-style:none}
  caption,th{text-align:left}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}
  q:before,q:after{content:""}
  div{width: 100%;height: 100%;-webkit-user-select: none;}
  html,body{background:#fff}
  a{text-decoration:none;color:#666;-webkit-user-drag: none;}
  a:hover{text-decoration:none}
  i{font-style:normal}
  .hide{display: none}
  .clear{clear:both;width: 0;height: 0;}
  body {
    font-family: Helvetica, Tahoma, Arial, STXihei, “华文细黑”, “Microsoft YaHei”, “微软雅黑”, sans-serif;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    overflow: hidden;
  }
  /* 滚动条样式 */
  div::-webkit-scrollbar,ul::-webkit-scrollbar{width: 6px;}
  div::webkit-scrollbar-track-piece,ul::webkit-scrollbar-track-piece{background-color:black;}
  div::-webkit-scrollbar-thumb,ul::-webkit-scrollbar-thumb{border-radius: 10px;background-color: rgb(112, 137, 212);   }     
  div::-webkit-scrollbar-track,ul::-webkit-scrollbar-track{background-color: #e5f1fa;}
  /* 图标字体 */
  @font-face {
      font-family: 'owo';
      src: url('./font/owo.eot?57567435');
      src: url('./font/owo.eot?57567435#iefix') format('embedded-opentype'),
           url('./font/owo.woff?57567435') format('woff'),
           url('./font/owo.ttf?57567435') format('truetype'),
           url('./font/owo.svg?57567435#owo') format('svg');
      font-weight: normal;
      font-style: normal;
  }
.main-window{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .box{
        float:left;
    }
    .contacts{
        width: calc( 100% - 50px );
        background: url("components/img/linkdood.png") no-repeat 70% 40%;
        background-color: #f8fbff;
    }
    .title-bar{
        height: 30px;
        position: absolute;
        top: 0;
        -webkit-app-region: drag;
        .ico{
            float:right;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            font-style: normal;
            color: #ddd;
            text-align: left;
            text-indent: -9999px;
            direction: ltr;
            width: 30px;
            height: 30px;
            margin: 2px;
            -webkit-app-region: no-drag;
        }
        .ico:before{
            width: 20px;
            height: 2px;
            left: 20%;
            top: 50%;
        }

        .ico:before, .ico:after{
            content: '';
            pointer-events: none;
            box-shadow: inset 0 0 0 32px;
            position: absolute;
        }
        .close-ico:after{
            height: 20px;
            width: 2px;
            left: 50%;
            top: 20%;
        }
        .close-ico{
            transform: rotate(45deg);
        }
        .ico:hover{
            color: black;
        }
    }
    .side-bar{
        background: #008cee;
        width: 50px;
        .side-bar-ico {
            a {
                display: block;
                width: 100%;
                height: 100%;
            }
            .ico{
                background: aquamarine;
                margin: 0.5rem auto;
                border-radius: 50%;
                
            }
            .user{
                height: 10%;
                .userMenu{
                    width: 45px;
                    height: 45px;
                    background-image: url("components/img/userMenu.png");
                    border-radius: 0;
                }
            }
            .tab {
                height: 80%;
                .ico{
                    width: 40px;
                    height: 40px;
                }
                .chat{
                    /* 如果删掉 托盘图标会报错 */
                    background-image: url("components/img/icon16.png");
                    background-image: url("components/img/chat.png");
                }
                .contacts{
                    background-image: url("components/img/contacts.png")
                }
                .router-link-active{
                    background-color: black;
                }
            }
            .set {
                height: 10%;
                .ico{
                    width: 22px;
                    height: 22px;
                }
                .more{
                    background-image: url("components/img/more.png")
                }
            }
        }  
    }
}
</style>

<template lang="pug">
  <div class="box">
    .main-window
        .title-bar
            .close-ico.ico(v-on:click.stop="close")
            .minimize-ico.ico(v-on:click.stop="minimize")
        .side-bar.box
            .side-bar-ico(v-on:click.stop="hideUserMenu")
                .user
                    .userMenu.ico(v-on:click.stop="clickUserMenu")
                .tab
                    router-link.chat.ico(to="/chat")
                    router-link.contacts.ico(to="/contacts")
                .set
                    router-link.more.ico(to="/more")
        .contacts.box(v-on:click="hideUserMenu")
            router-view
        .clear
        myInformation(v-if="this.status.userMenuShow")
  </div>
</template>

<script>
    import myInformation from './components/card/MyInformation';
    import { mapState } from 'vuex'
    import fun from './components/module/fun'
    const ipcRenderer = require('electron').ipcRenderer;
    export default {
        computed: mapState([
            // 映射 this.count 为 store.state.count
            'status'
        ]),
        components: {
            myInformation
        },
        methods:{
            clickUserMenu(){
                this.$store.commit("USER_MENU_CLICK")
            },
            hideUserMenu(){
                this.$store.commit("ALL_HIDE");
            },
            minimize(){
                //向主进程发送最小化消息
                ipcRenderer.sendSync('main-window-message', 'minimize');
            },
            close(){
                ipcRenderer.sendSync('main-window-message', 'close');
            },
        },
        created:function(){
            console.log("[尝试]进行登陆")
            const _this = this;
            //加入好友列表
            function setContacts(message,){
                let list = {}
                for(let item of message.msg.contacts){
                    
                    const userId = item.userId
                    const shouzimu = item.pinyin[0].toUpperCase();
                    if(!list[shouzimu]){
                        list[shouzimu]={}
                    }
                    const grouping =list[shouzimu];
                    let avatar = item.avatar
                    if(avatar!==undefined){
                        avatar=avatar.replace(`C:\\Users\\Alexmurder\\Desktop\\sqlpublic`,"http://127.0.0.1:3000")
                    }
                    console.log(avatar)
                    grouping[userId]={avatar:avatar,name:item.name,pinyin:item.pinyin}
                    list[shouzimu][userId]=grouping[userId]
                }
                console.log(list)
                _this.$store.commit("SET_CONTACT_LIST",list)
            }
            const msg={command:"Landing"}

            fun.Ajax.post(this.status.server,JSON.stringify(msg),function(e){
                const message =JSON.parse(e);
                console.log(message);
                switch(message.code){
                    case 0:{
                        setContacts(message)
                        break;
                    }
                    case 113:{
                        //如果已经登陆，直接获取好友列表
                        const msg={command:"friendsList"}
                        fun.Ajax.post(_this.status.server,JSON.stringify(msg),function(e){
                            const message = JSON.parse(e);
                            console.log(message);
                            switch(message.code){
                                case 0:{
                                    console.log(`[成功]获取好友列表`)
                                    setContacts(message)
                                }
                            }
                        })
                    }
                }
            })
        }
    }
</script>
