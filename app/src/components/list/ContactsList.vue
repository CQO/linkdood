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
                template(v-for="(item,key) in list")
                    template(v-if="item[0]")
                        li.classification(v-if="searchText==''") {{key}}
                        li.contactsList(v-for=" list in item",v-if="searchText==''||list.indexOf(searchText)>=0")
                            router-link.contacts-dialogue-box(v-bind:to="'/contacts/userIntroduction/'+list")
                                Avatar.user-img(v-bind:size='45',v-bind:username="list")
                                p.contacts-dialogue-item {{ list }}
                                .clear
        router-view.chat-window
        .clear
</template>
<script>
    import fun from '../module/fun';
    import Avatar from 'vue-avatar/dist/Avatar'
    export default {
        components: {
            Avatar
        },
        data(){
            return{
                searchText:"",
                list:{
                    A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[],
                },
                message: [
                    { item: '北京办事处',firstLetter:'B'},
                    { item: '李红',firstLetter:'L'},
                    { item: '王宏伟',firstLetter:'W'},
                    { item: '李雪涛',firstLetter:'L'},
                    { item: '小蓝',firstLetter:'X'},
                    { item: '白小双',firstLetter:'B'},
                    { item: '吴彦祖',firstLetter:'W'},
                    { item: '马云',firstLetter:'M'},
                    { item: '郭德纲',firstLetter:'G'},
                    { item: '王艳',firstLetter:'W'},
                    { item: '西门吹雪',firstLetter:'X'},
                    { item: '孙悟空',firstLetter:'S'},
                    { item: '猪八戒',firstLetter:'Z'},
                    { item: '沙僧',firstLetter:'S'},
                    { item: '唐僧',firstLetter:'T'},
                    { item: '牛魔王',firstLetter:'N'},
                    { item: '铁扇公主',firstLetter:'T'},
                    { item: '红孩儿',firstLetter:'H'},
                    { item: '太上老君',firstLetter:'T'},
                    { item: '齐天大圣',firstLetter:'Q'},
                    { item: '夜明珠',firstLetter:'Y'},
                    { item: 'JD',firstLetter:'J'},
                    { item: 'kiss me',firstLetter:'K'},
                    { item: 'my word',firstLetter:'M'}
                ]
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
        },
        created: function () {
            const message = this.message;
            for(let i=0;i<message.length;i++){
                //将条目添加到对应数组
                this.list[message[i].firstLetter].push(message[i].item)
            }
        },
    }
</script>