<style lang="postcss">
.main-window{
    .side-bar{
        background: #008cee;
        width: 50px;
        .side-bar-ico {
            a {
                display: block;
                width: 100%;
                height: 100%;
            }
            .ico{
                margin: 0.5rem auto;
                border-radius: 50%;
                width: 22px;
                height: 22px;
            }
            .user{
                height: 10%;
                .userMenu{
                    width: 45px;
                    height: 45px;
                    background-image: url("./img/userMenu.png");
                    border-radius: 0;
                }
            }
            .tab {
                height: 80%;
                .ico{
                    width: 40px;
                    height: 40px;
                    font-size: 25px;
                    line-height: 40px;
                    color: white;
                }
                .chat{
                    /* 如果删掉 托盘图标会报错 */
                    background-image: url("./img/icon16.png");
                    background: #5fd05d;
                }
                .contacts{
                    background-color: #aba8ce;
                }
                .router-link-active{
                    color: #d7f388;
                }
            }
            .set {
                height: 10%;
                .more{
                    color: white;
                }
                
            }
        }  
    }
}
</style>

<template lang="pug">
    .side-bar.box
        .side-bar-ico(v-on:click.stop="hideUserMenu")
            .user
                .userMenu.ico(v-on:click.stop="clickUserMenu") 
            .tab
                router-link.chat.ico(to="/chat") 
                router-link.contacts.ico(to="/contacts") 
            .set
                router-link.more.ico(to="/more") 
</template>

<script>
    export default {
        methods:{
            clickUserMenu(){
                this.$store.commit("USER_MENU_CLICK")
            },
            hideUserMenu(){
                this.$store.commit("ALL_HIDE");
            },
        },
    }
</script>
