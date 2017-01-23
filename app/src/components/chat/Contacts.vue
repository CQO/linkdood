<style lang="postcss">
    
</style>
<template lang="pug">
    .contacts-dialogue
        .list
            .search(v-on:click="click")
                input(type="text",placeholder="联系人搜索不可用",v-model="searchText")
            ul
                li.classification(v-if="B[0]") B
                li.contactsList(v-for=" list in B")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="C[0]") C
                li.contactsList(v-for=" list in C")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="G[0]") G
                li.contactsList(v-for=" list in G")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="K[0]") K
                li.contactsList(v-for=" list in K")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="L[0]") L
                li.contactsList(v-for=" list in L")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="M[0]") M
                li.contactsList(v-for=" list in M")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="S[0]") S
                li.contactsList(v-for=" list in S")
                     router-link.contacts-dialogue-box(v-bind:to="'/chatMainWindow/contacts/userIntroduction/'+list")
                        .user-img
                            img(src="../../../img/qun.png")
                        p.contacts-dialogue-item {{ list }}
                        .clear
                li.classification(v-if="X[0]") X
                li.contactsList(v-for=" list in X")
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
                A:[],B:["北信源西安研发公司","北信源西安分公司"],C:["测试群"],D:[],E:[],F:[],G:[],H:[],I:[],G:["公司内部千人测试群","公司内部千人测试群"],K:["客户端问题收集群"],L:["另一个测试群"],M:["MAC包测试群"],N:[],O:[],P:[],Q:[],R:[],S:["陕西互联西安"],T:[],U:[],V:[],W:[],X:["西安连豆豆测试群"],Y:[],Z:[],
                message: [
                    { item: '北信源西安研发公司',firstLetter:'B'},
                    { item: 'SDK测试',firstLetter:'S'},
                    { item: '客户端问题收集群',firstLetter:'K'},
                    { item: '公司内部千人测试群',firstLetter:'G'},
                    { item: '北信源西安分公司',firstLetter:'B'},
                    { item: '陕西互联西安',firstLetter:'S'},
                    { item: '日常事物提醒群',firstLetter:'R'},
                    { item: '公司内部千人测试群',firstLetter:'G'},
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
        }
    }
</script>