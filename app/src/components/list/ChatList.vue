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
                li.contactsList(v-for=" (mess,index) in messageList")
                     router-link.contacts-dialogue-box(v-bind:to="'/chat/chatToPeople/'+mess.item")
                        Avatar.user-img(v-bind:size='45',v-bind:username="mess.item")
                        .text
                            p.contacts-dialogue-item {{ mess.item }}
                            p.last-message-text {{ mess.lastMessage }}
                        .time
                            p.contacts-time {{ mess.time }}
                     .clear
                     p.removeMessage(v-on:click="remove(index)") ×
                        
        router-view.chat-window
        .clear
</template>
<script>
    import Avatar from 'vue-avatar/dist/Avatar'
    export default {
        components: {
            Avatar
        },
        data(){
            return{
                searchText:"",
                message: [
                    { item: '北信源西安研发公司',lastMessage:'好的',time:'昨天' },
                    { item: 'SDK测试',lastMessage:'cxs',time:'昨天' },
                    { item: '客户端问题收集群',lastMessage:'OK',time:'昨天' },
                    { item: '公司内部千人测试群',lastMessage:'测试',time:'昨天' },
                    { item: '北信源西安分公司',lastMessage:'好的',time:'昨天' },
                    { item: '陕西互联西安',lastMessage:'cxs',time:'昨天' },
                    { item: '日常事物提醒群',lastMessage:'OK',time:'昨天' },
                    { item: 'MAC包测试群',lastMessage:'好的',time:'昨天' },
                    { item: '西安连豆豆测试群',lastMessage:'cxs',time:'昨天' },
                    { item: '测试群',lastMessage:'OK',time:'昨天' },
                    { item: '刘清辉',lastMessage:'测试',time:'昨天' },
                    { item: 'IMH5',lastMessage:'测试',time:'昨天' },
                    { item: '海龙会所',lastMessage:'测试',time:'昨天' },
                    { item: '李盼',lastMessage:'测试',time:'昨天' },
                    { item: '赵雯',lastMessage:'测试',time:'昨天' },
                    { item: '罗进',lastMessage:'测试',time:'昨天' }
                ]
            }
        },
        methods:{
            remove:function (index){
                this.message.splice(index, 1);
            },
            add:function(){
                if(this.searchText===""){
                    alert("请在左侧输入框中输入会话名称！");
                }
                else{
                    this.message.push({ item: this.searchText,lastMessage:'',time:'现在' });
                    this.searchText="";
                }
                //fun.getSpell('好');
            },
        },
        computed: {
            messageList: function () {
                const searchText = this.searchText;
                return this.message.filter(function (msg) {                  
                    if(searchText!==""&&msg.item.indexOf(searchText)<0){
                        return false;
                    }
                    return true;
                })
            }
        }
    }
</script>