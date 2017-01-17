<style lang="less">
    
</style>
<template lang="pug">
    .contacts-dialogue
        .list
            .search
                input(type="text",placeholder="搜索:联系人，群",v-model="searchText")
            ul
                li
                     router-link.contacts-dialogue-box(to="/chatMainWindow/contacts/userIntroduction/北信源西安研发公司")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item 北信源西安研发公司
                        .clear
                li
                     router-link.contacts-dialogue-box(to="/chatMainWindow/contacts/userIntroduction/SDK测试")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item SDK测试
                        .clear
                li
                     router-link.contacts-dialogue-box(to="/chatMainWindow/contacts/userIntroduction/客户端问题收集群")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item 客户端问题收集群
                        .clear
                li
                     router-link.contacts-dialogue-box(to="/chatMainWindow/contacts/userIntroduction/公司内部千人测试群")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item 公司内部千人测试群
                        .clear
                li
                     router-link.contacts-dialogue-box(to="/chatMainWindow/contacts/userIntroduction/陕西互联西安")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item 陕西互联西安
                        .clear
                li
                     router-link.contacts-dialogue-box(to="/chatMainWindow/contacts/userIntroduction/日常事物提醒群")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item 日常事物提醒群
                        .clear
                li
                     router-link.contacts-dialogue-box(to="/chatMainWindow/contacts/userIntroduction/测试测试")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item 测试测试
                        .clear
        
        router-view.chat-window
        .clear
</template>