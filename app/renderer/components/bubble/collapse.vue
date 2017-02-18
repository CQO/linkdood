<style lang="postcss">
    .collapse-bubble{

    }
</style>
<template lang="pug">
    .collapse-bubble
        Avatar.user-img(v-bind:size='45',username="me")
        .box(v-bind:class="{ active: isOpen }")
            .title
                .ico.unfolded(v-on:click="isOpen=!isOpen") 
                p.text {{title}}
                .ico.menu(v-if="isOpen") 
            .list(v-if="isOpen") {{content}}
</template>
<script>
    import Avatar from '../avatar/default'
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
            }
        },
    }
</script>