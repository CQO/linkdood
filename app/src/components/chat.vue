<style lang="less">
    @import './chat.less';
</style>
<template lang="pug">
    .main-window
        .side-bar.box
            .side-bar-ico
                .user
                    .userMenu.ico
                .tab
                    router-link.chat.ico(to="/chatMainWindow/chat")
                    router-link.contacts.ico(to="/chatMainWindow/Contacts")
                    router-link.group.ico(to="/chatMainWindow/group")
                    router-link.organization.ico(to="/chatMainWindow/organization")
                .set
                    router-link.more.ico(to="/chatMainWindow/more")
                    .setting.ico
        .contacts.box
            router-view
        .chat-box.box
        .clear
</template>
<script>

</script>
