<style lang="postcss">
    
</style>
<template lang="pug">
    .contacts-dialogue
        .list
            .search
                input(type="text",placeholder="联系人搜索不可用",v-model="searchText")
            ul
                li.classification(v-if="list.B[0]") B
                li.contactsList(v-for=" list in list.B")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="list.C[0]") C
                li.contactsList(v-for=" list in list.C")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="list.G[0]") G
                li.contactsList(v-for=" list in list.G")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="list.K[0]") K
                li.contactsList(v-for=" list in list.K")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="list.L[0]") L
                li.contactsList(v-for=" list in list.L")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="list.M[0]") M
                li.contactsList(v-for=" list in list.M")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="list.S[0]") S
                li.contactsList(v-for=" list in list.S")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="list.X[0]") X
                li.contactsList(v-for=" list in list.X")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                
        
        router-view.chat-window
        .clear
</template>
<script>
    import fun from '../module/fun';
    export default {
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
            }
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