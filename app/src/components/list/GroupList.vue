<template lang="pug">
    .contacts-dialogue
        .list
            .search
                input(type="text",placeholder="搜索：群",v-model="searchText")
                .add(v-on:click="add")
            ul
                template(v-for="(item,key) in list")
                    template(v-if="item[0]")
                        li.classification(v-if="searchText==''") {{key}}
                        li.contactsList(v-for=" list in item",v-if="searchText==''||list.indexOf(searchText)>=0")
                            router-link.contacts-dialogue-box(v-bind:to="'/group/groupIntroduction/'+list")
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
                    A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],G:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[],
                },
                message: [
                    { item: '北信源西安研发公司',firstLetter:'B'},
                    { item: 'SDK测试',firstLetter:'S'},
                    { item: '客户端问题收集群',firstLetter:'K'},
                    { item: '公司内部千人测试群',firstLetter:'G'},
                    { item: '北信源西安分公司',firstLetter:'B'},
                    { item: '陕西互联西安',firstLetter:'S'},
                    { item: '日常事物提醒群',firstLetter:'R'},
                    { item: 'MAC包测试群',firstLetter:'M'},
                    { item: '西安连豆豆测试群',firstLetter:'X'},
                    { item: '测试群',firstLetter:'C'},
                    { item: '另一个测试群',firstLetter:'L'}
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