<style lang="less">
    .verification-box
        width: 80%
        margin: 0 auto
        height: 2rem
        border: 1px solid #ccc
        border-top: 0
        input
            width: 60%
            float: left
            border: 0
            height: 100%
    
        .verification-button
            width: 40%
            float: right
            height: calc(100% - 1px)
            line-height: 2rem
            background-color: #9191c3
            color: white
            border-radius: 3px
            font-size: 0.8rem
            box-shadow: rgb(88, 97, 197) 0px 1px
            user-select: none
            -webkit-user-select: none
    
        .verification-button:hover
            background: #3498db
            box-shadow: rgb(57, 73, 193) 0px 1px
            color: white
    
        .verification-button:active
            position: relative
            top: 1px
            box-shadow: rgb(57, 73, 193) 0px 0px
    
    .register-box 
        .input-box
            position: absolute
            top: 2rem 
    
    .isOK
        background-color: #ebfbca !important
    
</style>

<template lang="jade">
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