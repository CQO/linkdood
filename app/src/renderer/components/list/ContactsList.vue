<style lang="postcss">
.contacts-dialogue {
    .contactsList{
        height: 50px;
        .contacts-dialogue-box{
            padding-top: 2px;
            height: 48px;
            width: 100%;
            .user-img{
                margin: 0 4px;
            }
            .contacts-dialogue-item{
                height: 45px;
                line-height: 48px;
                text-align: left;
            }
        }
    }
    .classification{
        height: 25px;
        line-height: 25px;
        text-align: left;
        background-color: #d1e7f8;
        padding-left: 13px;
        font-size: 16px;
    }
    .list{
        font-size: 14px;
    }
}
</style>
<template lang="pug">
    .contacts-dialogue
        .list
            .search
                input(type="text",placeholder="搜索：联系人",v-model="searchText")
                .add(v-on:click="add")
            ul
                template(v-for="(item,key) in this.chatLog.contacts")
                    li.classification(v-if="searchText==''") {{key}}
                    li.contactsList(v-for=" (list,key) in item",v-if="searchText==''||list.name.indexOf(searchText)>=0")
                        router-link.contacts-dialogue-box(v-bind:to="'/contacts/userIntroduction/'+list.name+'/'+key")
                            Avatar.user-img(v-bind:size='45',v-bind:username="list.name")
                            p.contacts-dialogue-item {{ list.name }}
                            .clear
        router-view.chat-window
        .clear
</template>
<script>
    import fun from '../module/fun'
    import { mapState } from 'vuex'
    import Avatar from 'vue-avatar/dist/Avatar'
    export default {
        computed: mapState([
            'chatLog'
        ]),
        components: {
            Avatar
        },
        data(){
            return{
                searchText:""
            }
        },
        methods: {
            click(){
                fun.getSpell('好');
            },
            add:function(){
                if(this.searchText===""){
                    alert("请在左侧输入框中输入会话名称！");
                }
                else{
                    this.list.A.push("sdsd");
                    this.searchText="";
                }
                //fun.getSpell('好');
            },
        }
    }
</script>