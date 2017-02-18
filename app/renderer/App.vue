<style lang="postcss">
@import './default.postcss';
.main-window{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .box{
        float:left;
    }
    .dialogue{
        width: calc( 100% - 50px );
        background-color: #f8fbff;
    }
}
</style>

<template lang="pug">
    .main-window
        TitleBar
        Sidebar
        .dialogue.box(v-on:click="hideUserMenu")
            router-view
        .clear
        myInformation(v-if="this.status.userMenuShow")
</template>

<script>
    import myInformation from './components/card/MyInformation';
    import Sidebar from './components/Sidebar'
    import TitleBar from './components/TitleBar'
    import { mapState } from 'vuex'
    import fun from './components/module/fun'
    export default {
        computed: mapState([
            // 映射 this.count 为 store.state.count
            'status'
        ]),
        components: {
            myInformation,
            Sidebar,
            TitleBar
        },
        methods:{
            hideUserMenu(){
                this.$store.commit("ALL_HIDE");
            },
        },
        created:function(){
            console.log("[尝试]进行登陆")
            const _this = this;
            //加入好友列表
            function setContacts(message,){
                let list = {}
                for(let item of message.msg.contacts){
                    
                    const userId = item.userId
                    const shouzimu = item.pinyin[0].toUpperCase();
                    if(!list[shouzimu]){
                        list[shouzimu]={}
                    }
                    const grouping =list[shouzimu];
                    let avatar = item.avatar
                    if(avatar!==undefined){
                        avatar=avatar.replace(`C:\\Users\\Alexmurder\\Desktop\\sqlpublic`,"http://127.0.0.1:3000")
                    }
                    console.log(avatar)
                    grouping[userId]={avatar:avatar,name:item.name,pinyin:item.pinyin}
                    list[shouzimu][userId]=grouping[userId]
                }
                console.log(list)
                _this.$store.commit("SET_CONTACT_LIST",list)
            }
            const msg={command:"Landing"}

            fun.Ajax.post(this.status.server,JSON.stringify(msg),function(e){
                const message =JSON.parse(e);
                console.log(message);
                switch(message.code){
                    case 0:{
                        setContacts(message)
                        break;
                    }
                    case 113:{
                        //如果已经登陆，直接获取好友列表
                        const msg={command:"friendsList"}
                        fun.Ajax.post(_this.status.server,JSON.stringify(msg),function(e){
                            const message = JSON.parse(e);
                            console.log(message);
                            switch(message.code){
                                case 0:{
                                    console.log(`[成功]获取好友列表`)
                                    setContacts(message)
                                }
                            }
                        })
                    }
                }
            })
        }
    }
</script>
