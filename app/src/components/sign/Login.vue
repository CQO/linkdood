<style lang="less">
    @import './Login.less';
</style>
<template lang="pug">
    .login-box
        .input-box
            input.server-input#server(placeholder="服务器", type="text",v-model="server")
            .select-box#country
                .styled-select
                    select.country(v-model="country")
                        option(v-for="item in countryItems",v-bind:value="item.value") {{item.country}}
                input.account-input(type="text", placeholder="手机号/邮箱/ID",v-model="account")
            .clear 
            input#password(type="password", placeholder="密码",v-model="password",v-on:keyup.enter="login") 
        .check-box
            input.switch-box-input#info( type="checkbox",v-model="rememberMe")
            label.switch-box-slider(for="info")
            label.switch-box-label(for="info") 记住密码
        .clear
        .href-box
            a.href.forget-password(href="http://vrv.linkdood.cn/server-securitycenter/password/goAccountCheck.vrv",target="_blank") 忘记密码？
            router-link.href.register-button.fa.fa-id-card(to="/register") 注册账号
        .clear
        .login-button-box
            .button.ok-button(v-on:click="login") 登录 
</template>

<script>
    import Router from 'vue-router';
    import ui from '../module/ui';
    import data from '../module/data';


    export default {
        data(){
            return{
                server:"",
                password:"",
                account:"",
                country:"0086",
                rememberMe:false,
                countryItems:data.countryItems
            }
        },
        methods:{
            login(event) {
                const _this=this;
                const {ipcRenderer} = require('electron');
                const message={
                    server:this.server,
                    country:this.country,
                    account:this.account,
                    rememberMe:this.rememberMe
                }
                //判断服务器地址是否填写
                if(_this.server!==""){
                    if(_this.account!==""&&_this.account.length>3){
                        if(_this.password!==""&&_this.password.length>5){
                            ipcRenderer.send('userLogin', message);
                        }
                        else{
                            ui.shakeDOM("password");
                        }
                    }
                    else{
                        ui.shakeDOM("country");
                    }
                }
                else{
                    ui.shakeDOM("server");
                }
            
                //alert(`服务器:${this.server} 国家:${this.country} 账号:${this.account} 密码:${this.account} 记住密码:${this.rememberMe}`);
            }
        }
    }
</script>