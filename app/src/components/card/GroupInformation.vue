<style lang="postcss">
.group-information-box{
    width: calc( 100% - 250px );
    float: left;
    background-color: #f8fbff;
    position: relative;
    .box{
        height: 220px;
        position: absolute;
        width: 260px;
        top: 50%;
        left: 50%;
        margin-top: -110px;
        margin-left: -130px;
        .user-img{
            height: 100px;
            width: 100px;
            margin: 0 auto;
        }
        .user-name{
            height: 3rem;
            line-height: 3rem;
        }
        .buttom{
            background-color: #2c89f2;
            height: 40px;
            width: 230px;
            margin: 10px;
            line-height: 40px;
            color: white;
            display: block;
        }
    }
}
</style>
<template lang="pug">
    .group-information-box
        .box
            Avatar.user-img(v-bind:size='100',v-bind:username="$route.params.item")
            .user-name {{ $route.params.item }}

            router-link.buttom(v-bind:to="'/chat/chatToPeople/'+$route.params.item") 发起聊天 
</template>
<script>
    import Avatar from 'vue-avatar/dist/Avatar';
    export default {
        components: {
            Avatar
        }
    }
</script>