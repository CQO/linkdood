<style lang="less">
    @import './Contacts.less';
</style>
<template lang="pug">
    .contacts-dialogue
        .list
            .search
                input(type="text",placeholder="搜索:联系人，群")
            ul
                li(v-for=" mess in message")
                     router-link.contacts-dialogue-box(to="/chatMainWindow/chat/chatToPeople")
                        .user-img
                            img(src="../../../img/qun.png")
                        .text
                            p.contacts-dialogue-item {{ mess.item }}
                            p.last-message-text {{ mess.lastMessage }}
                        .time
                            p.contacts-time {{ mess.time }}
                        
        router-view.chat-window
        .clear
</template>
<script>
    export default {
        data(){
            return{
                message: [
                    { item: '北信源西安研发公司',lastMessage:'好的',time:'昨天' },
                    { item: 'SDK测试',lastMessage:'cxs',time:'昨天' },
                    { item: '客户端问题收集群',lastMessage:'OK',time:'昨天' },
                    { item: '公司内部千人测试群',lastMessage:'测试',time:'昨天' },
                    { item: '北信源西安研发公司',lastMessage:'好的',time:'昨天' },
                    { item: 'SDK测试',lastMessage:'cxs',time:'昨天' },
                    { item: '客户端问题收集群',lastMessage:'OK',time:'昨天' },
                    { item: '公司内部千人测试群',lastMessage:'测试',time:'昨天' },
                    { item: '北信源西安研发公司',lastMessage:'好的',time:'昨天' },
                    { item: 'SDK测试',lastMessage:'cxs',time:'昨天' },
                    { item: '客户端问题收集群',lastMessage:'OK',time:'昨天' },
                    { item: '公司内部千人测试群',lastMessage:'测试',time:'昨天' }
                ]
            }
        }
    }
</script>