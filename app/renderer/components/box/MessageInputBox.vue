<style lang="postcss">
.message-box{
    .input-box{
        background-color: #f9f9fb;
        border-top: 1px solid #cfd2d5;
        height:30%;
        .tool-bar{
            height: 30px;
            color: #cccccc;
            .ico{
                height: 20px;
                width: 20px;
                margin: 5px;
                float: left;
            }
            .active{
                color: blue;
            }
            .sendMail{
                line-height: 30px;
                height: 30px;
                color: green;
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
                width: 40px;
                height: 22px;
                float: right;
                line-height: 22px;
                font-size: 1.4rem;
                color: #ccc;
            }
        }
    }
}
</style>
<template lang="pug">
    .input-box
        .tool-bar
            .ico.jietu 
            .ico.email(v-on:click="getMail") 
            .ico.approval 
            .ico.code(v-on:click="code=!code",v-bind:class="{ active: code }") 
            p.sendMail(v-if="this.status.isSendMail") 接收人:蒲鸽 100284685@qq.com
            .clear
        textarea(v-model="newTodoText",v-create="")
        .send
            .ico.send-button(v-on:click="sendMessage") 
</template>
<script>
    import { mapState } from 'vuex'
    import fun from '../module/fun'
    const ipcRenderer = require('electron').ipcRenderer;
    export default {
        computed: mapState([
            'chatLog',
            'status'
        ]),
        data(){
            return{
                newTodoText: "",
                code:false
            }
        },
        methods:{
            sendMessage(str){
                const id = this.$route.params.id
                const talk= {
                    id:id,
                    userID:1,
                    msg:this.newTodoText
                }
                const _this = this
                this.newTodoText = "";
                this.$store.commit("ADD_DIALOGUE",talk)
                const msg={command:"sendMessage",userID:talk.id,msg:talk.msg}
                fun.Ajax.post(this.status.server,JSON.stringify(msg),function(e){
                    console.log(e)
                })
                // this.$store.commit("ADD_STEP")
                // this.newTodoText = "";
            },
            getMail(){
                //发送收取邮件消息
                console.log(ipcRenderer.sendSync('main-window-message', 'mail'));
            },
        },
        directives: {
            'create': {
                //文本输入框加载完毕后获取焦点
                inserted:function (el){
                    el.focus()
                }
            },
        }
    }
</script>