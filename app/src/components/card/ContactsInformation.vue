<style lang="postcss">
.contacts-information-box{
    width: calc( 100% - 250px );
    float: left;
    background-color: #f8fbff;
    .box{
        height: 190px;
        position: absolute;
        width: 250px;
        top: 25%;
        left: 51%;
        .user-img{
            height: 100px;
            width: 100px;
            margin: 10px auto;
        }
        .user-name{
            height: 30px;
            line-height: 30px;
        }
        .man:after{
            content:"♂";
            color: #c39145;
                padding-left: 10px;
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
    .contacts-information-box
        .box
            Avatar.user-img(v-bind:size='100',v-bind:username="$route.params.item")
            .user-name.man {{ $route.params.item }}
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