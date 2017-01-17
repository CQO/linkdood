<style lang="less">
    @import './introduction.less';
</style>
<template lang="pug">
    .introduction-box
        .box
            .user-img
            .user-name {{ $route.params.item }}
            router-link.buttom(v-bind:to="'/chatMainWindow/chat/chatToPeople/'+$route.params.item") 发起聊天 
</template>