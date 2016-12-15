<style>
    a{
        text-decoration:none;
    }
    .input-box{
        width: 100%;
    }
    .input-box input{
        height: 2rem;
        border: 1px solid #ccc;
        text-indent: 10px;
        font-size: 0.8rem;
        width: 80%;
        border-top: 0;
    }
    
    .clear{
        clear: both;
    }
    .href-box{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        position: relative;
        top: 0.4rem;
        right: 18px;
    }
    .href-box .href{
        float: right;
        font-size: 0.7rem;
        padding-left: 5px;
        color: #9386c3;
    }
    .login-button-box{
        position:absolute; 
        bottom: 10px;
        width: 100%;
    }
    .login-button-box .button{
        width: 80%;
        height: 3rem;
        margin: 0 auto;
        border-radius: 5px;
        font-size: 1.2rem;
        line-height: 3rem;
        user-select: none;
        -webkit-user-select: none;
    }
    .login-button-box .ok-button{
        background-color: #69b4eb;
        color: white;
        box-shadow: rgb(88, 97, 197) 0px 3px;
        user-select: none;
    }
    .login-button-box .ok-button:hover {
        background: #3498db;
        box-shadow: rgb(57, 73, 193) 0px 4px;
        color: white;
    }

    .login-button-box .ok-button:active {
        position: relative;
        top: 4px;
        box-shadow: rgb(57, 73, 193) 0px 0px;
    }

    .check-box {
        font-size: 0.9rem;
        position: relative;
        float: right;
        right: 10%;
        top: 2px;
        color: #9386c3;
    }
    .check-box .switch-box-slider {
        position: relative;
        display: inline-block;
        height: 8px;
        width: 28px;
        background: #d5d5d5;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .check-box .switch-box-slider:after {
        position: absolute;
        left: -2px;
        top: -6px;
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #eeeeee;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
        content: '';
        transition: all 0.2s ease;
    }
    .check-box .switch-box-input {
        display: none;
    }
    .check-box .switch-box-input ~ .switch-box-label {
        margin-left: 2px;
        position: relative;
        top: 1px;
    }
    .check-box .switch-box-input:checked ~ .switch-box-slider:after {
        left: 16px;
    }
    .check-box .switch-box-input:disabled ~ .switch-box-slider {
        background: #e2e2e2;
        cursor: default;
    }
    .check-box .switch-box-input:checked:not(:disabled) ~ .switch-box-slider {
        background: #5faee3;
    }
    .check-box .switch-box-input:checked:not(:disabled) ~ .switch-box-slider:after {
        background: #3498db;
    }
    .input-box .server-input{
        border-top:1px solid #ccc;
    }

    .select-box{
        margin: 0 auto;
        width: 80%;
        height: 2rem;
        border: 1px solid #ccc;
        border-top: 0;
    }
    .select-box .styled-select .select{
        height: 2rem;
    }
    .select-box .styled-select{
        width: 100%;
    }
    .select-box .styled-select select {
        width: 40%;
        padding: 0;
        font-size: 0.8rem;
        border: 0 solid #ccc;
        height: 2rem;
        background: white;
        float: left;
        text-indent: 2px;
        padding-left: 4px;
        color: #bdb1b1;
    }
    .select-box  .account-input{
        float: right;
        width: calc(60% - 1px);
        border: 0;
        border-left: 1px solid #ccc;
    }
</style>
<template lang="jade">
    .login-box
        .input-box
            input.server-input(placeholder="服务器", type="text",v-model="server")
            .select-box
                .styled-select
                    select#country.country(v-model="country")
                        option(v-for="item in countryItems") {{item.country}}
                    input.account-input(type="text", placeholder="手机号",v-model="account")
                    .clear
            input(type="password", placeholder="密码",v-model="password",v-on:keyup.enter="login")
        .check-box
            input#info.switch-box-input(type="checkbox",v-model="rememberMe")	    
            label.switch-box-slider(for="info")	    
            label.switch-box-label(for="info") 记住密码
        .clear
        .href-box
            a.href.forget-password(href="http://vrv.linkdood.cn/server-securitycenter/password/goAccountCheck.vrv") 忘记密码？
            router-link.href.register-button.fa.fa-id-card(to="/register") 注册账号
        .clear
        .login-button-box
            .button.ok-button(v-on:click="login") 登录
        
</template>

<script>
    export default {
        data(){
            return{
                server:"",
                password:"",
                account:"",
                country:"中国",
                rememberMe:false,
                countryItems:[
                    {country:"中国"},
                    {country:"美国"},
                    {country:"日本"}
                ]
            }
        },
        methods:{
            login: function (event) {
                console.log(`服务器:${this.server}`);
                console.log(`国家:${this.country}`);
                console.log(`账号:${this.account}`);
                console.log(`密码:${this.account}`);
                console.log(`记住密码:${this.rememberMe}`);
                alert(`服务器:${this.server} 国家:${this.country} 账号:${this.account} 密码:${this.account} 记住密码:${this.rememberMe}`);
            }
        }
    }
</script>