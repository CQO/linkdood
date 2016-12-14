<style>
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
        float: left;
        width: 39%;
    }
    .select-box .styled-select select {
        width: 100%;
        padding: 0;
        font-size: 0.7rem;
        border: 0 solid #ccc;
        height: 2rem;
        background: white;
        color: #bdb1b1;;
    }
    .select-box  .account-input{
        float: right;
        width: 60%;
        border:0;
        border-left: 1px solid #ccc;
    }
</style>
<template>
    <div class="select-box">
        <div class="styled-select">
            <select name="select" id="country" class="country">
                <option value="zh-cn">中国</option>
                <option value="mg">美国</option>
                <option value="jp">日本</option>
            </select>
        </div>
        <input class="account-input" type="text" placeholder="手机号">
        <div class="clear"></div>
    </div>
</template>