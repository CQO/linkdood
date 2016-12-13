<style>
    .register-box{
        background-color: blue;
        width: 100%;
    }
</style>
<template>
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
            <div class="clear"></div>
            <input class="password-input" type="password" placeholder="密码">
            <input type="password" placeholder="确认密码">
        </div>
</template>