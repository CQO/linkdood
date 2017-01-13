<style lang="less">
    @import './Register.less';
</style>

<template lang="pug">
    .register-box
        .input-box
            input.server-input(placeholder="服务器", type="text",v-model="server",v-bind:class="{ isOK: server }")
            .select-box
                .styled-select
                    select#country.country(v-model="country",v-bind:class="{ isOK: accountOK }")
                        option(v-for="item in countryItems") {{item.country}}
                    input.account-input(type="text", placeholder="手机号",v-model="account",v-on:keyup="chackAccount",v-bind:class="{ isOK: accountOK }")
                    .clear
            input.password-input(type="password", placeholder="密码",v-model="password",v-bind:class="{ isOK: passwordOK }")
            input.password-input(type="password", placeholder="确认密码",v-model="password2",v-on:keyup="chackPassword",v-bind:class="{ isOK: passwordOK }")
            input(type="text", placeholder="姓名:建议使用真实姓名(最大长度12)",v-model="name",v-bind:class="{ isOK: name }")
            .verification-box
                input(type="text", placeholder="验证码",v-model="placeholder",v-bind:class="{ isOK: placeholder }")
                .button.verification-button 获取验证码
                .clear
        .login-button-box
            .button.ok-button(v-on:click="register") 注册
            .button.cancel-button
                router-link.href.register-button(to="/") 取消
</template>

<script>
    import data from '../module/data';
    export default {
        data(){
            return{
                server:"",
                password:"",
                password2:"",
                account:"",
                country:"中国",
                name:"",
                placeholder:"",
                accountOK:false,
                nameOK:false,
                passwordOK:false,
                countryItems:data.countryItems
            }
        },
        methods:{
            register:function(event){
                alert(`服务器:${this.server} 账号:${this.account} 密码:${this.password} 国家:${this.country} 名称:${this.name} 验证码:${this.placeholder}`);
            },
            chackAccount:function(event){
                (this.account.length===11)?this.accountOK=true:this.accountOK=false;
            },
            chackPassword:function(e){
                (this.password===this.password2)?this.passwordOK=true:this.passwordOK=false;
            }
        },
    }
</script>