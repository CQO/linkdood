<style lang="postcss">
.message-box{
    background-color: #f8fbff;
    float: left;
    width: calc( 100% - 250px );
    .title-box{
        height: 30px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        p{
            height: 30px;
            line-height: 30px;
        }
        .ico{
            width: 20px;
            color: #ccc;
            position: relative;
        }
        .title{
            min-width: 40px;
            color: #c1bcbc;
            margin-top: 1px;
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
            p.title {{ $route.params.item }}
            p.ico(v-on:click.stop="clickFileMenu") 
            p.ico(v-on:click.stop="clickPeopleMenu") 
                
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