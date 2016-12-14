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
        font-size: 0.7rem;
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
        bottom: 95px;
        position: absolute;
        right: 18px;
        position: absolute;
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
        font-size: 1.5rem;
        line-height: 3rem;
    }
    .login-button-box .ok-button{
        background-color: #69b4eb;
        color: white;
        box-shadow: rgb(88, 97, 197) 0px 3px;
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
        position: absolute;
        right: 10%;
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
        -webkit-transition: all 0.2s ease;
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
</style>
<template>
    <div class="login-box">
        <div class="input-box">
            <input class="server-input" placeholder="服务器" type="text">
            <ChoiceCountry></ChoiceCountry>
            <input class="password-input" type="password" placeholder="密码">
        </div>
        <div class="check-box">
		    <input id="info" class="switch-box-input" type="checkbox" />
		    <label for="info" class="switch-box-slider"></label>
		    <label for="info" class="switch-box-label">记住密码</label>
        </div>
        <div class="login-button-box">
            <div class="button ok-button">登录</div>
        </div>
        <div class="href-box">
            <a href="http://vrv.linkdood.cn/server-securitycenter/password/goAccountCheck.vrv" class="href forget-password">忘记密码？</a>
            <router-link to="/register" class="href register-button">注册账号</router-link>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
  import ChoiceCountry from './ChoiceCountry'
  export default {
    components: {
      ChoiceCountry
    },
    name: 'landing-page'
  }
</script>