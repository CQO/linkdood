<style lang="postcss">
.contacts-information-box{
    width: calc( 100% - 250px );
    float: left;
    background-color: #f8fbff;
    position: relative;
    .box{
        height: 320px;
        position: absolute;
        width: 260px;
        top: 50%;
        left: 50%;
        margin-top: -160px;
        margin-left: -130px;
        .user-img{
            height: 100px;
            width: 100px;
            margin: 10px auto;
        }
        .user-name{
            height: 40px;
            line-height: 40px;
        }
        .man:after{
            content:"♂";
            color: #c39145;
                padding-left: 10px;
        }
        .user-phone-number,.server{
            height: 2rem;
            line-height: 2rem;
            margin-left: 2rem;
            p{
                float:left;
                width: 100px;
            }
            .item{
                color: #cccccc;
                text-align: left;
            }
            .value{
                color: #b9bfcd;
                -webkit-user-select: text;
            }
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
            .user-phone-number
                p.item 手机:
                p.value 13128283333
                .clear
            .server
                p.item 服务器:
                p.value test
                .clear
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