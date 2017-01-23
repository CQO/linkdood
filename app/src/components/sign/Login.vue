<style lang="less">
.login-box,.register-box{
	.input-box {
		width: 100%;
		height: 15px;
		input {
			border: 1px solid #cccccc;
			border-top: 0;
			font-size: 0.8rem;
			height: 2rem;;
			text-indent: 10px;
			width: 80%;;
		}
		.server-input {
			border-top:1px solid #cccccc;
		}
		.select-box {
			border: 1px solid #cccccc;
			border-top: 0;
			height: 2rem;;
			margin: 0 auto;
			width: 80%;;
			.styled-select {
				width: 100%;
				.select {
					height: 2rem;;
				}
				select {
					background: white;
					border: 0;
					color: #bdb1b1;
					float: left;
					font-size: 0.8rem;
					height: 2rem;;
					padding-left: 4px;
					padding: 0;
					text-indent: 2px;
					width: 40%;
				}
			}
			.account-input {
				border-left: 1px solid #cccccc;
				border: 0;
				float: right;
				width: calc(60% - 1px);
			}
		}
	}
}
.clear {
	clear: both;
    width: 0;
    height: 0;
}
.href-box {
    height: 1rem;
    line-height: 1rem;
    position: absolute;
    right: 18px;
    bottom: 105px;
    width: 115px;
	.href {
		color: #9386c3;
		float: right;
		font-size: 0.7rem;
		padding-left: 5px;
	}
}
.login-button-box {
	bottom: 50px;
	position:absolute;
	height: 50px;
	width: 100%;
	.button {
		-webkit-user-select: none;
		border-radius: 5px;
		font-size: 1.2rem;
		height: 3rem;
		line-height: 3rem;
		margin: 0 auto;
		user-select: none;
		width: 80%;;
	}
	.ok-button {
		background-color: #69b4eb;
		box-shadow: rgb(88, 97, 197) 0px 3px;
		color: white;
		user-select: none;
		&:hover {
			background: #3498db;
			box-shadow: rgb(57, 73, 193) 0px 4px;
			color: white;
		}
		&:active {
			box-shadow: rgb(57, 73, 193) 0px 0px;
			position: relative;
			top: 4px;
		}
	}
}
.check-box {
	color: #9386c3;
	float: right;
	font-size: 0.9rem;
    position: absolute;
    right: 25px;
    bottom: 120px;
    width: 90px;
    height: 20px;
	.switch-box-slider {
		background: #d5d5d5;
		border-radius: 8px;
		cursor: pointer;
		display: inline-block;
		height: 8px;
		position: relative;
		transition: all 0.2s ease;
		width: 28px;
		&:after {
			background: #eeeeee;
			border-radius: 50%;
			box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
			content: '';
			display: block;
			height: 18px;
			left: -2px;
			position: absolute;
			top: -6px;
			transition: all 0.2s ease;
			width: 18px;
		}
	}
	.switch-box-input {
	    display: none;
	    ~ .switch-box-label {
		    margin-left: 2px;
		    position: relative;
		    top: 1px;
	    }
	    &:checked ~ .switch-box-slider:after {
		    left: 16px;
	    }
	    &:disabled ~ .switch-box-slider {
		    background: #e2e2e2;
		    cursor: default;
	    }
	    &:checked:not(:disabled) ~ .switch-box-slider {
		    background: #5faee3;
		    &:after {
			    background: #3498db;
		    }
	    }
    }
}

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
            input#password(type="password", placeholder="密码",v-model="password",v-on:keyup.enter="login") 
            .clear
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