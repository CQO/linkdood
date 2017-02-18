<style lang="postcss">
.main-window{
    .title-bar{
        height: 30px;
        position: absolute;
        top: 0;
        -webkit-app-region: drag;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        .minimize-ico{
            line-height: 32px;
        }
        .close-ico{
            line-height: 30px;
        }
        .ico{
            height: 30px;
            width: 26px;
            color: #ccc;
            font-size: 20px;
        }
        .ico:hover{
            color: black;
        }
    }
}
</style>

<template lang="pug">
    .title-bar
        .minimize-ico.ico(v-on:click.stop="minimize") 
        .close-ico.ico(v-on:click.stop="close") 
</template>

<script>
    const ipcRenderer = require('electron').ipcRenderer;
    export default {
        methods:{
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
