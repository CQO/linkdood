<style lang="postcss">
@import './List.postcss';
.chat-dialogue {
    .contactsList{
        height: 65px;
        border-bottom: 1px solid #dae2e7;
        position:relative;
        .contacts-dialogue-box{
            padding: 10px 5px;
            .text{
                width: 135px;
                padding-left: 10px;
                p{
                    text-align: left;
                    line-height: 23px;
                    font-size: 13px;
                    font-family: arial, sans-serif;
                }
                .contacts-dialogue-item{
                    height: 25px;
                }
                .last-message-text{
                    color: #b9bfcd;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .time{
                width: 35px;
                height: 22px;
                font-size: 12px;
                line-height: 22px;
                color: #c8c5c6;
            }
        }
        .removeMessage{
            position: absolute;
            right: 20px;
            bottom: 10px;
            display: none;
            background-color: #b9bfcd;
            color: white;
            padding: 0 5px;
            border-radius: 50%;
            cursor: pointer;
        }
    }
}
</style>
<template lang="pug">
    .chat-dialogue
        .list
            .search
                input(type="text",placeholder="搜索：会话 或 添加会话",v-model="searchText")
                .add(v-on:click="add")
            ul
                li.contactsList(v-for=" (mess,index) in this.list")
                     router-link.contacts-dialogue-box(v-bind:to="'/chat/chatToPeople/'+mess.item+'/'+mess.id")
                        Avatar.user-img(v-bind:size='45',v-bind:username="mess.item")
                        .text
                            p.contacts-dialogue-item {{ mess.item }}
                            p.last-message-text {{ mess.lastMessage }}
                        .time
                            p.contacts-time {{ mess.time }}
                     .clear
                     p.removeMessage(v-on:click="remove(mess.id)") ×
                        
        router-view.chat-window
        .clear
</template>
<script>
    import Avatar from 'vue-avatar/dist/Avatar'
    export default {
        data(){
            return{
                searchText:"",
                list:this.$store.state.chatLog.chatList
            }
        },
        components: {
            Avatar
        },
        methods:{
            remove:function (id){
                this.$store.commit("DELETE_THE_CONVERSATION_MEMBER",id)
            },
            add:function(){
                if(this.searchText===""){
                    alert("请在左侧输入框中输入会话名称！");
                }
                else{
                    alert("追加成功");
                    this.searchText="";
                }
                //fun.getSpell('好');
            }
        }
    }
</script>