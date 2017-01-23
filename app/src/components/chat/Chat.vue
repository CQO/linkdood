<style lang="postcss">
    @import './Contacts.postcss';
</style>
<template lang="pug">
    .chat-dialogue
        .list
            .search
                input(type="text",placeholder="搜索:联系人，群",v-model="searchText")
            ul
                li.contactsList(v-for=" mess in messageList")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/chat/chatToPeople/'+mess.item")
                        Avatar.user-img(username="Jane Doe")
                        .text
                            p.contacts-dialogue-item {{ mess.item }}
                            p.last-message-text {{ mess.lastMessage }}
                        .time
                            p.contacts-time {{ mess.time }}
                        
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
                    { item: '公司内部千人测试群',lastMessage:'测试',time:'昨天' },
                    { item: 'MAC包测试群',lastMessage:'好的',time:'昨天' },
                    { item: '西安连豆豆测试群',lastMessage:'cxs',time:'昨天' },
                    { item: '测试群',lastMessage:'OK',time:'昨天' },
                    { item: '另一个测试群',lastMessage:'测试',time:'昨天' }
                ]
            }
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