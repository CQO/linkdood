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
                        option(v-for="item in countryItems",v-bind:value="item.value") {{item.country}}
                    input.account-input(type="text", placeholder="手机号/邮箱/ID",v-model="account")
                    .clear
            input(type="password", placeholder="密码",v-model="password",v-on:keyup.enter="login")
        .check-box
            input#info.switch-box-input(type="checkbox",v-model="rememberMe")	    
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
    export default {
        data(){
            return{
                server:"",
                password:"",
                account:"",
                country:"0086",
                rememberMe:false,
                countryItems:[
                    {value:"0086",country:"中国"},
                    {value:"0093",country:"阿富汗"},
                    {value:"1907",country:"阿拉斯加"},
                    {value:"0355",country:"阿尔巴尼亚"},
                    {value:"0213",country:"阿尔及利亚"},
                    {value:"0244",country:"安哥拉"},
                    {value:"1809",country:"安圭拉岛"},
                    {value:"0054",country:"阿根廷"},
                    {value:"0297",country:"阿鲁巴岛"},
                    {value:"0247",country:"阿森松"},
                    {value:"0061",country:"澳大利亚"},
                    {value:"0043",country:"奥地利"},
                    {value:"1809",country:"巴哈马"},
                    {value:"0973",country:"巴林"},
                    {value:"0880",country:"孟加拉国"},
                    {value:"1809",country:"巴巴多斯"},
                    {value:"0032",country:"比利时"},
                    {value:"0501",country:"伯利兹"},
                    {value:"0229",country:"贝宁"},
                    {value:"0975",country:"不丹"},
                    {value:"0591",country:"玻利维亚"},
                    {value:"0267",country:"博茨瓦纳"},
                    {value:"0055",country:"巴西"},
                    {value:"0673",country:"文莱"},
                    {value:"0359",country:"保加利亚"},
                    {value:"0226",country:"布基拉法索"},
                    {value:"0257",country:"布隆迪"},
                    {value:"0855",country:"柬埔寨"},
                    {value:"0237",country:"喀麦隆"},
                    {value:"0001",country:"加拿大"},
                    {value:"0238",country:"佛得角"},
                    {value:"0236",country:"中非"},
                    {value:"0235",country:"乍得"},							
                    {value:"0056",country:"智利"},								
                    {value:"6724",country:"圣诞岛"},
                    {value:"6722",country:"科科斯岛"},
                    {value:"0057",country:"哥伦比亚"},
                    {value:"0269",country:"科摩罗"},
                    {value:"0242",country:"刚果"},
                    {value:"0682",country:"科克群岛"},
                    {value:"0506",country:"哥斯达黎加"},
                    {value:"0225",country:"科特迪瓦"},
                    {value:"0053",country:"古巴"},
                    {value:"0357",country:"塞浦路斯"},
                    {value:"0045",country:"丹麦"},
                    {value:"0253",country:"吉布提"},
                    {value:"0684",country:"东萨摩亚"},
                    {value:"0593",country:"厄瓜多尔"},
                    {value:"0020",country:"埃及"},
                    {value:"0503",country:"萨尔瓦多"},
                    {value:"0240",country:"赤道几内亚"},
                    {value:"0251",country:"埃塞俄比亚"},
                    {value:"0500",country:"福克兰群岛"},
                    {value:"0298",country:"法罗群岛"},
                    {value:"0679",country:"斐济"},
                    {value:"0358",country:"芬兰"},
                    {value:"0033",country:"法国"},
                    {value:"0594",country:"法属圭亚那"},
                    {value:"0241",country:"加蓬"},
                    {value:"0220",country:"冈比亚"},
                    {value:"0349",country:"德国"},
                    {value:"0233",country:"加纳"},
                    {value:"0350",country:"直布罗陀"},
                    {value:"0030",country:"希腊"},
                    {value:"0299",country:"格陵兰岛"},
                    {value:"0671",country:"关岛"},
                    {value:"0502",country:"危地马拉"},
                    {value:"0224",country:"几内亚"},
                    {value:"0245",country:"几内亚比绍"},
                    {value:"0592",country:"圭亚那"},
                    {value:"0509",country:"海地"},
                    {value:"1808",country:"夏威夷"},
                    {value:"0504",country:"洪都拉斯"},
                    {value:"0852",country:"香港"},
                    {value:"0336",country:"匈牙利"},
                    {value:"0354",country:"冰岛"},
                    {value:"0091",country:"印度"},
                    {value:"0062",country:"印度尼西亚"},
                    {value:"0098",country:"伊朗"},
                    {value:"0964",country:"伊拉克"},
                    {value:"0353",country:"爱尔兰"},
                    {value:"0972",country:"以色列"},
                    {value:"0039",country:"意大利"},
                    {value:"1809",country:"牙买加"},
                    {value:"0081",country:"日本"},
                    {value:"0962",country:"约旦"},
                    {value:"0254",country:"肯尼亚"},
                    {value:"0686",country:"基里巴斯"},
                    {value:"0082",country:"韩国"},
                    {value:"0965",country:"科威特"},
                    {value:"0856",country:"老挝"},
                    {value:"0961",country:"黎巴嫩"},
                    {value:"0266",country:"莱索托"},
                    {value:"0231",country:"利比里亚"},
                    {value:"0218",country:"利比亚"},
                    {value:"4175",country:"列支敦士登"},
                    {value:"0352",country:"卢森堡"},
                    {value:"0853",country:"澳门"},
                    {value:"0261",country:"马达加斯加"},
                    {value:"0265",country:"马拉维"},
                    {value:"0060",country:"马来西亚"},
                    {value:"0960",country:"马尔代夫"},
                    {value:"0223",country:"马里"},	
                    {value:"0356",country:"马耳他"},
                    {value:"0596",country:"马提尼克"},
                    {value:"0222",country:"毛里塔尼亚"},
                    {value:"0230",country:"毛里求斯"},
                    {value:"0052",country:"墨西哥"},
                    {value:"1808",country:"中途岛"},
                    {value:"0976",country:"蒙古"},
                    {value:"0210",country:"摩洛哥"},
                    {value:"0258",country:"莫桑比克"},
                    {value:"0095",country:"缅甸"},
                    {value:"0264",country:"纳米比亚"},
                    {value:"0674",country:"瑙鲁"},
                    {value:"0977",country:"尼泊尔"},
                    {value:"0031",country:"荷兰"},
                    {value:"0064",country:"新西兰"},
                    {value:"0505",country:"尼加拉瓜"},
                    {value:"0227",country:"尼日尔"},
                    {value:"0234",country:"尼日利亚"},
                    {value:"0683",country:"纽埃岛"},
                    {value:"6723",country:"诺福克岛"},
                    {value:"0850",country:"朝鲜"},
                    {value:"0047",country:"挪威"},
                    {value:"0968",country:"阿曼"},
                    {value:"0092",country:"巴基斯坦"},
                    {value:"0507",country:"巴拿马"},
                    {value:"0595",country:"巴拉圭"},
                    {value:"0051",country:"秘鲁"},
                    {value:"0063",country:"菲律宾"},
                    {value:"0048",country:"波兰"},
                    {value:"0351",country:"葡萄牙"},
                    {value:"0239",country:"普林西比"},
                    {value:"1809",country:"波多黎各"},
                    {value:"0974",country:"卡塔尔"},
                    {value:"0262",country:"留尼旺岛"},
                    {value:"0040",country:"罗马尼亚"},
                    {value:"0007",country:"俄罗斯"},
                    {value:"0250",country:"卢旺达"},
                    {value:"0290",country:"圣赫勒拿"},
                    {value:"1809",country:"圣卢西亚"},
                    {value:"0223",country:"圣马力诺"},
                    {value:"0966",country:"沙特阿拉伯"},
                    {value:"0221",country:"塞内加尔"},
                    {value:"0248",country:"塞舌尔"},
                    {value:"0239",country:"圣多美"},
                    {value:"0232",country:"塞拉利昂"},
                    {value:"0677",country:"所罗门群岛"},
                    {value:"0252",country:"索马里"},
                    {value:"0027",country:"南非"},
                    {value:"0034",country:"西班牙"},
                    {value:"0094",country:"斯里兰卡"},
                    {value:"0249",country:"苏丹"},
                    {value:"0597",country:"苏里南"},
                    {value:"0268",country:"斯威士兰"},
                    {value:"0046",country:"瑞典"},	
                    {value:"0041",country:"瑞士"},
                    {value:"0963",country:"叙利亚"},
                    {value:"0886",country:"台湾"},
                    {value:"0255",country:"坦桑尼亚"},
                    {value:"0066",country:"泰国"},
                    {value:"0228",country:"多哥"},
                    {value:"0676",country:"汤加"},
                    {value:"0216",country:"突尼斯"},
                    {value:"0090",country:"土耳其"},
                    {value:"0688",country:"图瓦卢"},
                    {value:"0256",country:"乌干达"},
                    {value:"0044",country:"英国"},
                    {value:"0001",country:"美国"},
                    {value:"0598",country:"乌拉圭"},
                    {value:"0678",country:"瓦努阿图"},
                    {value:"0396",country:"梵蒂冈"},
                    {value:"0058",country:"委内瑞拉"},
                    {value:"0084",country:"越南"},
                    {value:"1809",country:"维尔京群岛"},
                    {value:"1808",country:"威克岛"},
                    {value:"0685",country:"西萨摩亚"},	
                    {value:"0338",country:"南斯拉夫"},
                    {value:"0243",country:"扎伊尔"},
                    {value:"0260",country:"赞比亚"},
                    {value:"0263",country:"津巴布韦"}
                ]
            }
        },
        methods:{
            login: function (event) {
                const {ipcRenderer} = require('electron');
                const message={
                    server:this.server,
                    country:this.country,
                    account:this.account,
                    rememberMe:this.rememberMe
                }
                ipcRenderer.send('userLogin', message);
                //alert(`服务器:${this.server} 国家:${this.country} 账号:${this.account} 密码:${this.account} 记住密码:${this.rememberMe}`);
            }
        }
    }
</script>