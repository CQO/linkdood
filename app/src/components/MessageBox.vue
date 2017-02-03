<style lang="postcss">
.message-box{
    background-color: #f8fbff;
    float: left;
    width: calc( 100% - 250px );
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
                background-image: url("img/file.png");
                position: relative;
            }
            .people{
                background-image: url("img/people.png");
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
        height: calc( 100% - 40px );
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
        height: calc( 70% - 43px );
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
            margin: 10px;
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
                -webkit-user-select: text;
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
            .user-img{
                height: 45px;
                width: 45px;
                cursor: pointer;
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
            .user-img{
                height: 45px;
                width: 45px;
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
        height:30%;
        .tool-bar{
            height: 30px;
            .jietu{
                height: 20px;
                width: 20px;
                background-image: url("img/jietu.png");
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
            width:calc( 100% - 20px );
            height:calc( 100% - 60px );
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
<template lang="pug">
    .message-box(v-on:click="showFile=false")
        .title-box
            .title
                p {{ $route.params.item }}(108)
                .file.icon(v-on:click.stop="clickFileMenu")
                .people.icon(v-on:click.stop="clickPeopleMenu")
                .clear
        .chatContent
            .time 15:45
            template(v-for="item in this.chatLog.sessions[$route.params.id].messages")
                template(v-if="item.userID===0")
                    .message-left
                        Avatar.user-img(v-bind:size='45',v-bind:username="$route.params.item")
                        .message {{item.content}}
                        .clear
                template(v-else)
                    .message-right
                        img.user-img(src="./img/chatUserImg.png")
                        .message {{item.content}}
                        .clear
                .clear
        .input-box
            .tool-bar
                .jietu
                .clear
            textarea(v-model="newTodoText.msg",v-on:keyup.enter="sendMessage",v-create="")
            .send
                .send-button(v-on:click="sendMessage") 发送(S)


        transition(name="file")
            .file-box(v-if="this.status.fileBoxShow")
                .title 群文件
                .file-list 没有群文件
        transition(name="file")
            .members-box(v-if="this.status.peopleBoxShow")
                .title 群成员
                .file-list 没有群成员
</template>
<script>
    import Avatar from 'vue-avatar/dist/Avatar'
    import { mapState } from 'vuex'
    import fun from './module/fun'
    export default {
        computed: mapState([
            // 映射 this.count 为 store.state.count
            'status',
            'chatLog'
        ]),
        components: {
            Avatar
        },
        data(){
            return{
                showFile:false,
                showPeople:false,
                newTodoText: {id:1,msg:""},
                receiveMessage: {id:0,msg:""},
                talks:[
                    {id:0,msg:"欢迎来到"+ this.$route.params.item +"群"},
                    {id:1,msg:"你只要在桌面上点击鼠标右键，选择“新建文件夹”就行了。All you have to do is right-click on the desktop and select New Folder"},
                    {id:1,msg:"Learn Vue"}
                ]
            }
        },
        methods:{
            sendMessage2(){
                const talk= this.newTodoText;
                const _this = this;
                this.talks.push(this.newTodoText);
                this.newTodoText = {id:1,msg:""};
                fun.Ajax.get(`http://www.tuling123.com/openapi/api?key=bb1b96a394b19b8ce2c61cf32c64d695&userid=123&info=${talk.msg}`,function(e){
                    const message = JSON.parse(e);
                    _this.receiveMessage = {id:0,msg:message.text};
                    _this.talks.push(_this.receiveMessage);
                    
                })
            },
            clickFileMenu(){
                this.$store.commit("CLICK_FILE_BOX")
            },
            clickPeopleMenu(){
                this.$store.commit("CLICK_PEOPLE_BOX");
            },
            sendMessage(str){
                const id = this.$route.params.id
                const talk= {
                    id:id,
                    userID:1,
                    msg:this.newTodoText.msg
                }
                const _this = this
                this.newTodoText = {id:1,msg:""};
                this.$store.commit("ADD_DIALOGUE",talk)
                fun.Ajax.get(`http://www.tuling123.com/openapi/api?key=bb1b96a394b19b8ce2c61cf32c64d695&userid=123&info=${talk.msg}`,function(e){
                    const message = JSON.parse(e);
                    const talk= {id:id,userID:0,msg:message.text}
                    _this.$store.commit("ADD_DIALOGUE",talk)
                })
                
            },
            ale(){
                alert("sss");
            }
        },
        directives: {
            // 发送消息后滚动到底部
            'create': {
                //文本输入框加载完毕后获取焦点
                inserted:function (el){
                    el.focus()
                }
            }
        }
    }
</script>