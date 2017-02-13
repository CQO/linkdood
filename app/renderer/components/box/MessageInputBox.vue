<style lang="postcss">
.message-box{
    .input-box{
        background-color: #f9f9fb;
        border-top: 1px solid #cfd2d5;
        height:30%;
        .tool-bar{
            height: 30px;
            .jietu{
                height: 20px;
                width: 20px;
                background-image: url("../img/jietu.png");
                margin: 5px;
                float: left;
            } 
            .email{
                height: 20px;
                width: 20px;
                background-image: url("../img/email.png");
                margin: 5px;
                float: left;
            }
            .approval{
                height: 20px;
                width: 20px;
                background-image: url("../img/approval.png");
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
    .input-box
        .tool-bar
            .jietu
            .email
            .approval
            .clear
        textarea(v-model="newTodoText",v-on:keyup.enter="sendMessage",v-create="")
        .send
            .send-button(v-on:click="sendMessage") 发送(S)
</template>
<script>
    import { mapState } from 'vuex'
    import fun from '../module/fun'
    export default {
        computed: mapState([
            'chatLog',
            'status'
        ]),
        data(){
            return{
                newTodoText: "",
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
                // fun.Ajax.get(`http://www.tuling123.com/openapi/api?key=bb1b96a394b19b8ce2c61cf32c64d695&userid=123&info=${talk.msg}`,function(e){
                //     const message = JSON.parse(e);
                //     const talk= {id:id,userID:0,msg:message.text}
                //     _this.$store.commit("ADD_DIALOGUE",talk)
                // })
                const msg={command:"sendMessage",userID:talk.id,msg:talk.msg}

                fun.Ajax.post(this.status.server,JSON.stringify(msg),function(e){
                    console.log(e)
                })
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