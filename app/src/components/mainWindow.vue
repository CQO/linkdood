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
                height: 70%;
                .ico{
                    width: 40px;
                    height: 40px;
                }
                .chat{
                    background-image: url("img/chat.png")
                }
                .contacts{
                    background-image: url("img/contacts.png")
                }
                .group{
                    background-image: url("img/group.png")
                }
                .organization{
                    background-image: url("img/organization.png")
                }
                .router-link-active{
                    background-color: black;
                }
            }
            .set {
                height: 20%;
                .ico{
                    width: 22px;
                    height: 22px;
                }
                .more{
                    background-image: url("img/more.png")
                }
                .setting{
                    background-image: url("img/setting.png")
                }
            }
        }  
    }
    .user-menu-box{
        height: 403px;
        width: 222px;
        position: absolute;
        top: 25px;
        left: 25px;
        background-color: rgba(255, 255, 255, 0.9);
        .user-img{
            height: 180px;
            background-image: url("img/userImg.jpg");
            background-position: 0 center;
            display: table-cell;
            vertical-align: bottom;
            width: 222px;
            .blinker{
                height: 50px;
                background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7));
                p{
                    line-height: 50px;
                    color: white;
                    font-size: 20px;
                    font-weight: 400;
                }
            }
        }
        .user-information{
            height: auto;
            .information{
                margin-top: 10px;
                overflow-y: auto;
                height: 196px;
                .item{
                    height: 35px;
                    line-height: 35px;
                    text-align: left;
                    p{
                        float: left;
                        width: 55px;
                        line-height: 35px;
                        color: #a8a8a8;
                        font-weight: 500;
                        font-size: 14px;
                        margin-left: 10px;
                    }
                    input{
                        height: 30px;
                        width: 125px;
                        clear: both;
                        border: none;
                        padding-left: 5px;
                        font-size: 13px;
                        position: relative;
                        bottom: 2px;
                    }
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
            .side-bar-ico(v-on:click="userMenuClick = true")
                .user
                    .userMenu.ico(v-on:click.stop="userMenuClick = false")
                .tab
                    router-link.chat.ico(to="/chat")
                    router-link.contacts.ico(to="/contacts")
                    router-link.group.ico(to="/group")
                    router-link.organization.ico(to="/organization")
                .set
                    router-link.more.ico(to="/more")
                    .setting.ico(v-on:click="error")
        .contacts.box(v-on:click="userMenuClick = true")
            router-view
        .clear
        myInformation(v-bind:class="{ hide: userMenuClick }")
</template>
<script>
    import myInformation from './card/MyInformation'
    const ipcRenderer = require('electron').ipcRenderer;
    export default {
        components: {
            myInformation
        },
        data(){
            return{
                userMenuClick:true
            }
        },
        methods:{
            error(){
                alert("里面还没有内容！");
            },
            minimize(){
                //向主进程发送最小化消息
                ipcRenderer.sendSync('main-window-message', 'minimize');
            },
            close(){
                ipcRenderer.sendSync('main-window-message', 'close');
            },
        },
    }
</script>