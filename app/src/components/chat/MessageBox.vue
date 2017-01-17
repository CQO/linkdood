<style lang="less">
    @import './MessageBox.less';
</style>
<style>
    .message-box{
        width: calc(100% - 250px);
    }
    .file-box{
        height: calc(100% - 40px);

    }
    .file-enter-active {
        transition: all .3s ease;
    }

    .file-enter, .slide-fade-leave-to
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
<template lang="pug">
    .message-box(v-on:click="showFile=false")
        .title-box
            .title
                p {{ $route.params.item }}(108)
                .file.icon(v-on:click.stop="showFile = !showFile")
                .people.icon(v-on:click.stop="showPeople = !showPeople")
                .clear
        .chatContent
            .time 15:45
            .message-left
                img(src="../../../img/chatUserImg.png")
                .message 欢迎来到 {{ $route.params.item }} 群
                .clear
            .message-right(v-for="talk in talks")
                img(src="../../../img/chatUserImg.png")
                .message {{talk}}
                .clear
        .input-box
            .tool-bar
                .jietu
                .clear
            textarea(v-model="newTodoText",v-on:keyup.enter="sendMessage")
            .send
                .send-button(v-on:click="sendMessage") 发送(S)


        transition(name="file")
            .file-box(v-if="showFile")
                .title 群文件
                .file-list 没有群文件
        transition(name="file")
            .members-box(v-if="showPeople")
                .title 群成员
                .file-list 没有群成员
        
</template>
<script>
    export default {
        data(){
            return{
                showFile:false,
                showPeople:false,
                newTodoText: "",
                talks: [
                    '你只要在桌面上点击鼠标右键，选择“新建文件夹”就行了。All you have to do is right-click on the desktop and select New Folder'
                    ,'Learn Vue' 
                ]
            }
        },
        methods:{
            sendMessage(){
                this.talks.push(this.newTodoText);
                this.newTodoText = '';
            }
        }
    }
</script>