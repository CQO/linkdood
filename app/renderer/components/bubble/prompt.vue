<template lang="pug">
    .video-meeting-bubble(v-on:click="isMenuOpen=false")
        Avatar.user-img(v-bind:size='45',username="H R")
        .bubble-message-box
            .text 
                .ico 
                .details 广州研发产品评审视频会议和UI面试时间有冲突，请确认！
</template>
<script>
    import Avatar from '../avatar/default'
    export default {
        components: {
            Avatar
        },
        props: {
            title: {
                type: String,
                required:true
            }
        },
        data(){
            return{
                isMenuOpen: false,
            }
        },
    }
</script>