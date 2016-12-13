<style>
    .input-box input{
        height: 2rem;
        border: 1px solid #ccc;
        text-indent: 10px;
        font-size: 0.9rem;
        width: 80%;
    }
    .input-box  .account-input{
        float: right;
        width: 143px;
        border:0;
        border-left: 1px solid #ccc;
    }
    .select-box{
        margin: 0 auto;
        width: 80%;
        height: 2rem;
        border: 1px solid #ccc;
    }
    .styled-select .select{
        height: 2rem;
    }
    .styled-select{
        float: left;
    }
    .styled-select select {
        width: 80px;
        padding: 0;
        font-size: 0.9rem;
        border: 0 solid #ccc;
        height: 2rem;
        background: white;
    }
    .clear{
        clear: both;
    }
    .href-box{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
    }
    .href{
        float: right;
        font-size: 0.7rem;
        padding-left: 5px;
        color: #9386c3;
    }
    .button-box{
        position:absolute; 
        bottom:0;
        width: 100%;
    }
    .button{
        width: 60%;
        height: 3rem;
        margin: 0 auto;
        border-radius: 5px;
        font-size: 1.5rem;
        line-height: 3rem;
    }
    .login-button{
        background-color: #69b4eb;
        color: white;
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
        margin-left: 4px;
    }
    .check-box .switch-box-input:checked ~ .switch-box-slider:after {
        left: 16px;
    }
    .check-box .switch-box-input:disabled ~ .switch-box-slider {
        background: #e2e2e2;
        cursor: default;
    }
    .check-box.remember-password .switch-box-input:checked:not(:disabled) ~ .switch-box-slider:after {
        background: #49708a;
    }

</style>
<template>
    <div class="login-box">
        <div class="input-box">
            <input class="server-input" placeholder="服务器" type="text">
            <div class="select-box">
                <div class="styled-select">
                    <select name="select" id="country" class="country">
                        <option value="ch-cn">中国</option>
                        <option value="mg">美国</option>
                        <option value="jp">日本</option>
                    </select>
                </div>
                <input class="account-input" type="text" placeholder="手机号">
                <div class="clear"></div>
            </div>
            <input class="password-input" type="password" placeholder="密码">
        </div>
        <div class="check-box">
		    <input id="info" class="switch-box-input" type="checkbox" />
		    <label for="info" class="switch-box-slider"></label>
		    <label for="info" class="switch-box-label">记住密码</label>
        </div>
        <div class="button-box">
            <div class="button login-button">登录</div>
                <div class="href-box">
                    <a href="http://vrv.linkdood.cn/server-securitycenter/password/goAccountCheck.vrv" class="href forget-password">忘记密码？</a>
                    <router-link to="/register" class="href register-button">注册账号</router-link>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
</template>

<script>
  export default {
    created() {
      // Set $route values that are not preset during unit testing
    }
  }
</script>