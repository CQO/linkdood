
<template lang="pug">
    .collapse-bubble
        Avatar.user-img(v-bind:size='45',username="me")
        .box
            .title
                .ico(v-bind:class="{ active: isOpen }",v-on:click="isOpen=!isOpen") 
                p.text {{title}}
            ul(v-if="isOpen")
                li(v-for="(key,item) in datas.list") {{item}}
            
</template>
<script>
    import Avatar from '../avatar/default'
    export default {
        components: {
            Avatar
        },
        props: {
            userImg: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required:true
            }
        },
        data(){
            return{
                isOpen: false,
                datas:{
                    num:3,
                    list:{
                        one:'吃饭',
                        two:'睡觉',
                        three:'连豆豆'
                    }
                }
            }
        },
    }
</script>