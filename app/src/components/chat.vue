<style lang="less">
    @import './chat.less';
</style>
<template lang="pug">
    .main-window
        .side-bar.box
            .side-bar-ico(v-on:click="userMenuClick = true")
                .user
                    .userMenu.ico(v-on:click.stop="userMenuClick = false")
                .tab
                    router-link.chat.ico(to="/chatMainWindow/chat")
                    router-link.contacts.ico(to="/chatMainWindow/contacts")
                    router-link.group.ico(to="/chatMainWindow/contacts")
                    router-link.organization.ico(to="/chatMainWindow/organization")
                .set
                    router-link.more.ico(to="/chatMainWindow/more")
                    .setting.ico(v-on:click="error")
        .contacts.box(v-on:click="userMenuClick = true")
            router-view
        .clear
        .user-menu-box(v-bind:class="{ hide: userMenuClick }")
            .user-img
                .blinker
                    p.user-name 蒲鸽
            .user-information
                .information
                    .item 
                        p.name 姓 名:
                        input(type="text",value='蒲鸽')
                    .item 
                        p.number 豆豆号:
                        input(type="text",value='7750')
                    .item 
                        p.id 豆豆ID:
                        input(type="text",value='123456789')
                    .item 
                        p.sex 性 别:
                        input(type="text",value='男')
                    .item 
                        p.phone 电 话:
                        input(type="text",value='18092852085')
                    .item 
                        p.mail 邮 箱:
                        input(type="text",value='my@owo.help')
                    .item 
                        p.department 部 门
                        input(type="text",value='')
                    .item 
                        p.job 职 位
                        input(type="text",value='')
</template>
<script>
    
    export default {
        data(){
            return{
                userMenuClick:true,
            }
        },
        methods:{
            error(){
                alert("里面还没有内容！")
            }
        },
    }
</script>
