<style lang="less">
.message-box{
    background-color: #f8fbff;
    float: left;
    
    .title-box{
        height: 30px;
        padding-top: 10px;
        .title{
            width: 245px;
            margin: 0 auto;
            height: 17px;
            line-height: 17px;
            p{
                width: 190px;
                float: left;
                text-align: right;
                overflow: hidden;
            }
            .icon{
                float: left;
                width: 17px;
                height: 17px;
                background-repeat: no-repeat;
                margin-left: 5px;
            }
            .file{
                background-image: url("../../../img/file.png");
                position: relative;
            }
            .people{
                background-image: url("../../../img/people.png");
                position: relative;
                bottom: 1px;
            }
        }
    }
    .file-box,.members-box{
        position: absolute;
        width: 200px;
        position: absolute;
        right: 0;
        top: 40px;
        background-color: #f0f0f0;
        .title{
            height: 30px;
            background-color: #e0f0fa;
            line-height: 30px;
            text-align: left;
            padding-left: 6px;
        }
        .file-list{
            margin: 48% auto;
            height: 20px;
            width: 100px;
        }
    }
    .chatContent{
        height: 350px;
        overflow-y: auto;
        overflow-x: hidden;
        .time{
            font-size: 12px;
            color: gray;
            height: 12px;
            line-height: 12px;
            margin: 10px 0;
        }
        .message-left,.message-right{
            margin: 10px 0;
            height: initial;
            .message{
                width: 120px; 
                height: 45px; 
                position: relative; 
                border-radius: 10px; 
                width: initial;
                padding: 10px;
                height: initial;
                min-height: 25px;
                line-height: 25px;
                max-width: 300px;
            }
            .message:before{
                    content: "";
                    position: absolute;
                    top: 16px;
                    width: 0;
                    height: 0;
                    border-top: 7px solid transparent;
                    border-bottom: 7px solid transparent;     
            }
            img{
                height: 45px;
                width: 45px;
            }
        }
        .message-left{
            float: left;
            .message{
                background: #eeeeee; 
                margin-left: 20px;
                float: left;
            }
            .message:before{
                right: 100%;
                border-right: 14px solid #eeeeee;
            }
            img{
                float: left;
            }
        }
        .message-right{
            float: right;
            .message{
                background-color: #d0edfe;
                margin-right: 20px;
                float: right;
            }
            .message:before{
                left: 100%;
                border-left: 14px solid #d0edfe;
            }
            img{
                float: right;
            }
        }
    }
    .input-box{
        background-color: #f9f9fb;
        border-top: 1px solid #cfd2d5;
        height:e("calc(100% - 400px)");
        .tool-bar{
            height: 30px;
            .jietu{
                height: 20px;
                width: 20px;
                background-image: url("../../../img/jietu.png");
                margin: 5px;
                float: left;
            }
        }
        textarea{
            border: none;
            background-color: rgb(249, 249, 251);
            resize: none;
            outline: none;
            font-size: 15px;
            padding: 0 10px;
            width:e("calc(100% - 20px)");
            height:e("calc(100% - 60px)");
        }
        .send{
            height: 30px;
            .send-button{
                width: 60px;
                height: 22px;
                background-color: #efefef;
                float: right;
                border-radius: 2px;
                border: 1px solid #cccccc;
                line-height: 22px;
                font-size: 13px;
                margin-right: 5px;
            }
        }
    }
}
</style>
<style lang="less">
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
            textarea(v-model="newTodoText",v-on:keyup.enter="sendMessage",v-on:onpaste="ale")
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
            },
            ale(){
                alert("sss");
            }
        }
    }
</script>