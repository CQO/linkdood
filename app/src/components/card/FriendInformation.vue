<style lang="postcss">
.introduction-box{
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
            width: 116px;
            background-image: url("../img/big_user.png");
            background-repeat: no-repeat;
            margin: 0 auto;
        }
        .user-name{
            height: 30px;
            line-height: 30px;
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
    .introduction-box
        .box
            .user-img
            .user-name {{ $route.params.item }}
            router-link.buttom(v-bind:to="'/chat/chatToPeople/'+$route.params.item") 发起聊天 
</template>