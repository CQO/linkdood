<style lang="postcss">
     .collapse-bubble{
        margin: 10px;
        .videoBox{
            width: 250px;
            height: 150px;
            border: 1px solid #dfe6ec;
            margin-left: 10px;
            border-radius: 10px;
            p{
              display: inline;
              color: #040404;
              font-size: 0.9rem;
            }
            ol{
              display: inline;
              color: black;
              font-size: 1.4rem;
              margin-left: 10px;
            }
            .upbox{
                height: 100px;
                border-radius: 10px;
                background-image: url(userImg.jpg);
                background-position: 0 center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .upupbox{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }
                .updownbox{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            .downbox{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height: 33%;
                border: 1px solid #dfe6ec;
                border-radius: 0px 0px 10px 10px;
            }
            .buttonRufuse{
                display: flex;
                justify-content: center;
                align-items:center;
                width:60px;
                height:30px;
                background-color:#C0C0C0 ; /* Green */
                border-radius: 10px;
                margin: 5px;
                font-size: 0.9rem;
                color: white;
            }
            .buttonAccept{
                display: flex;
                justify-content: center;
                align-items:center;
                width:60px;
                height:30px;
                background-color: #67fb87; /* Green */
                border-radius: 10px;
                margin: 5px;
                font-size: 0.9rem;
                color: white;
            }
        }
        .user-img{
            height: 45px;
            width: 45px;
        }
    }
        
</style>
<template lang="pug">
    .collapse-bubble
        Avatar.user-img(v-bind:size='45',username="me")
        .videoBox
            .upbox
                .upupbox
                    ol.text M君
                .updownbox
                    p.text 对方正邀请您进入视频通讯
            .downbox
                .buttonAccept.ico    接受
                .buttonRufuse.ico    拒绝
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
            }
        }
    }
</script>