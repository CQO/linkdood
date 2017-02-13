<template lang="pug">
    .collapse-bubble
        Avatar.user-img(v-bind:size='45',username="me")
        .box
            .title
                .ico(v-bind:class="{ active: isOpen }",v-on:click="isOpen=!isOpen") > 
                p.text 你好
            .list(v-if="isOpen") 这是一封用做测试的邮件，这是一封用做测试的邮件，这是一封用做测试的邮件
</template>
<script>
    import Avatar from '../avatar/default'
    export default {
        components: {
            Avatar
        },
        data(){
            return{
                isOpen: false,
            }
        },
    }
</script>