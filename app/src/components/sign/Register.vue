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
    .register-box .input-box{
        position: absolute;
        top: 2rem; 
    }
</style>
<template lang="jade">
    .register-box
        .input-box
            input.server-input(placeholder="服务器", type="text")
            ChoiceCountry
            .clear
            input.password-input(type="password", placeholder="密码")
            input.password-input(type="password", placeholder="确认密码")
            input(type="text", placeholder="姓名:建议使用真实姓名(最大长度12)")
            .verification-box
                input(type="text", placeholder="验证码")
                .verification-button 获取验证码
                .clear
        .login-button-box
            .button.ok-button 注册
            .button.cancel-button
                router-link.href.register-button(to="/") 取消
</template>

<script>
  import ChoiceCountry from './ChoiceCountry'
  export default {
    components: {
      ChoiceCountry
    }
  }
</script>