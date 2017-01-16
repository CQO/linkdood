<style lang="less">
    @import './MessageBox.less';
</style>
<style>
    .message-box{
        width: calc(100% - 250px);
    }
    .file-box{
        height: calc(100% - 40px);

    }
    .file-enter-active {
        transition: all .3s ease;
    }

    .file-enter, .slide-fade-leave-to
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
<template lang="pug">
    .message-box(v-on:click="showFile=false")
        .title-box
            .title
                p 北信源西安分公司(108)
                .file.icon(v-on:click.stop="showFile = !showFile")
                .people.icon
                .clear
        .chatContent
            .time 15:45
            .message-left
                img
                .message

        transition(name="file")
            .file-box(v-if="showFile")
                .title 群文件
                .file-list 没有群文件
        
</template>
<script>
    export default {
        data(){
            return{
                showFile:false,
                showPeople:false
            }
        }
    }
</script>