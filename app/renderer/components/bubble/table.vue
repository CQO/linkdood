<style lang="postcss">
.table-bubble{
    width: initial;
    margin: 10px;
    height: initial;
    .box{
        height: 45px;
    }
}
</style>
<template lang="pug">
    .table-bubble(v-on:click="isMenuOpen=false")
        Avatar.user-img(v-bind:size='45',username="me")
        .box

</template>
<script>
    import Avatar from '../avatar/default'
    const ipcRenderer = require('electron').ipcRenderer;
    export default {
        components: {
            Avatar
        },
        props: {
            left:{
                type: Boolean,
                default: true
            },
            userImg: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            title: {
                type:String,
                required: true
            }
        },
        data(){
            return{
                isOpen: false,
                isMenuOpen: false
            }
        },
    }
</script>