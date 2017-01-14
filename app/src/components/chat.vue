<style lang="less">
    @import './chat.less';
</style>
<template lang="pug">
    .main-window
        .side-bar.box
            .side-bar-ico
                .user
                    router-link.userMenu.ico(to="/chatMainWindow/contacts")
                .tab
                    .chat.ico
                    .contacts.ico
                    .group.ico
                    .organization.ico
                .set
                    .more.ico
                    .setting.ico
        .contacts.box
            router-view
        .chat-box.box
        .clear
</template>
<script>

</script>
