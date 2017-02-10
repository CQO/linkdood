<style lang="postcss">
.main-window{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .box{
        float:left;
    }
    .contacts{
        width: calc( 100% - 50px );
        background: url("img/linkdood.png") no-repeat 70% 40%;
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
                    background-image: url("img/userMenu.png");
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
                    background-image: url("img/icon16.png");
                    background-image: url("img/chat.png");
                }
                .contacts{
                    background-image: url("img/contacts.png")
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
                    background-image: url("img/more.png")
                }
            }
        }  
    }
}
</style>
<template lang="pug">
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
</template>
<script>
    import myInformation from './card/MyInformation';
    import { mapState } from 'vuex'
    import fun from './module/fun'
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
                    grouping[userId]={avatar:item.avatar,name:item.name,pinyin:item.pinyin}
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