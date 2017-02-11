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
                p.value vrv
                .clear
            .buttom(@click.prevent.stop="remove") 发起聊天 
</template>
<script>
    import Avatar from '../avatar/default'
    import { mapState } from 'vuex'
    export default {
        computed: mapState([
            'chatLog'
        ]),
        components: {
            Avatar
        },
        methods:{
            remove:function (id){
                const route = this.$route.params;
                const chatList = this.$store.state.chatLog;
                //判断聊天列表是否存在
                if(!chatList.chatList[route.id]){
                    const talk ={ item: route.item,id:route.id,lastMessage:'测试',time:'昨天' };
                    this.$store.commit("ADD_CHAT",talk)
                }
                window.location.href=`#/chat/chatToPeople/${route.item}/${route.id}`
            },
        }
    }
</script>