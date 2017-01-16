<style lang="less">
    
</style>
<template lang="pug">
    .contacts-dialogue
        .list
            .search
                input(type="text")
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
                        .clear
        .clear
        router-view.chat-window
</template>
<script>
    export default {
        data(){
            return{
                message: [
                    { item: '北信源西安研发公司',lastMessage:'好的',time:'昨天' },
                    { item: '北信源西安研发公司',lastMessage:'好的',time:'昨天' },
                    { item: '北信源西安研发公司',lastMessage:'好的',time:'昨天' }
                ]
            }
        }
    }
</script>