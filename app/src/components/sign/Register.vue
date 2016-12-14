<style>
    .verification-box{
        width: 80%;
        margin: 0 auto;
        height: 2rem;
        border: 1px solid #ccc;
        border-top: 0;
    }
    .verification-box input{
        width: 60%;
        float: left;
        border: 0;
        height: 100%;
    }
    .verification-box .verification-button{
        width: 40%;
        float: right;
        height: 100%;
        line-height: 2rem;
        background-color: #9191c3;
        color: white;
        border-radius: 3px;
    }
    .register-box .password-input{
        position: relative;
        left: 2px;
    }
    .register-box .input-box{
        position: absolute;
        top: 2rem; 
    }
</style>
<template>
    <div class="register-box">
        <div class="input-box">
            <input class="server-input" placeholder="服务器" type="text">
            <ChoiceCountry></ChoiceCountry>
            <div class="clear"></div>
            <input class="password-input" type="password" placeholder="密码">
            <input class="password-input" type="password" placeholder="确认密码">
            <input type="text" placeholder="姓名:建议使用真实姓名(最大长度12)">
            <div class="verification-box">
                <input type="text" placeholder="验证码">
                <div class="verification-button">获取验证码</div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="login-button-box">
            <div class="button ok-button">注册</div>
            <div class="button cancel-button"><router-link to="/" class="href register-button">取消</router-link></div>
        </div>
    </div>
</template>

<script>
  import ChoiceCountry from './ChoiceCountry'
  export default {
    components: {
      ChoiceCountry
    }
  }
</script>