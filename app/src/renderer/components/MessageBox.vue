<style lang="postcss">
.message-box{
    background-color: #f8fbff;
    float: left;
    width: calc( 100% - 250px );
    .title-box{
        height: 30px;
        padding-top: 10px;
        .title{
            width: 245px;
            margin: 0 auto;
            height: 17px;
            line-height: 17px;
            p{
                width: 190px;
                float: left;
                text-align: right;
                overflow: hidden;
            }
            .icon{
                float: left;
                width: 17px;
                height: 17px;
                background-repeat: no-repeat;
                margin-left: 5px;
            }
            .file{
                background-image: url("img/file.png");
                position: relative;
            }
            .people{
                background-image: url("img/people.png");
                position: relative;
                bottom: 1px;
            }
        }
    }
    .file-box,.members-box{
        position: absolute;
        width: 200px;
        position: absolute;
        right: 0;
        top: 40px;
        background-color: #f0f0f0;
        height: calc( 100% - 40px );
        .title{
            height: 30px;
            background-color: #e0f0fa;
            line-height: 30px;
            text-align: left;
            padding-left: 6px;
        }
        .file-list{
            margin: 48% auto;
            height: 20px;
            width: 100px;
        }
    }
}
</style>
<template lang="pug">
    .message-box
        .title-box
            .title
                p {{ $route.params.item }}(108)
                .file.icon(v-on:click.stop="clickFileMenu")
                .people.icon(v-on:click.stop="clickPeopleMenu")
                .clear
                
        ChatContent
        MessageInputBox
        transition(name="file")
            .file-box(v-if="this.status.fileBoxShow")
                .title 群文件
                .file-list 没有群文件
        transition(name="file")
            .members-box(v-if="this.status.peopleBoxShow")
                .title 群成员
                .file-list 没有群成员
</template>
<script>
    import MessageInputBox from './box/MessageInputBox'
    import ChatContent from './box/ChatContent'
    import { mapState } from 'vuex'
    export default {
        computed: mapState([
            // 映射 this.count 为 store.state.count
            'status',
        ]),
        components: {
            MessageInputBox,
            ChatContent
        },
        methods:{
            clickFileMenu(){
                this.$store.commit("CLICK_FILE_BOX")
            },
            clickPeopleMenu(){
                this.$store.commit("CLICK_PEOPLE_BOX");
            },
        },
    }
</script>