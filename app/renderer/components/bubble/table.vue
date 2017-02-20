<style lang="postcss">
.table-bubble{
    width: initial;
    margin: 10px;
    height: initial;
    display: flex;
    flex-direction: row-reverse;
    .user-img{
        height: 45px;
        width: 45px;
    }
    .box{
        width: 300px;
        background-color: #afc7b5;
        margin-right: 10px;
        height: initial;
        .mytable {
            width: 300px;
            padding: 0;
            margin: 0;
        }
        th {
            font: bold 11px sans-serif;
            color: #4f6b72;
            border-right: 1px solid #C1DAD7;
            border-bottom: 1px solid #C1DAD7;
            border-top: 1px solid #C1DAD7;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-align: left;
            padding: 6px 6px 6px 12px;
        }
        th.nobg {
            border-top: 0;
            border-left: 0;
            border-right: 1px solid #C1DAD7;
            background: none;
        }
        td {
            border-right: 1px solid #C1DAD7;
            border-bottom: 1px solid #C1DAD7;
            background: #fff;
            font-size:11px;
            padding: 6px 6px 6px 12px;
            color: #4f6b72;
        }
        td.alt {
            background: #F5FAFA;
            color: #797268;
        }
        th.spec {
            border-left: 1px solid #C1DAD7;
            border-top: 0;
            font: bold 10px sans-serif;
        }
        th.specalt {
            border-left: 1px solid #C1DAD7;
            border-top: 0;
            font: bold 10px sans-serif;
            color: #797268;
        }
        .red{
            background-color: red;
            color: white;
        }
    }
}
</style>
<template lang="pug">
    .table-bubble(v-on:click="isMenuOpen=false")
        Avatar.user-img(src="imgs/chatUserImg.png",v-bind:size='45',username="me")
        .box
            table.mytable
                tr
                    th 经营情况
                    td 一月
                    td 二月
                    td 三月
                tr
                    th 销量
                    td 25432件
                    td 22745件
                    td 28900件
                tr
                    th 利润
                    td 223765元
                    td.red 256721元
                    td 300001元

</template>
<script>
    import Avatar from '../avatar/default'
    const ipcRenderer = require('electron').ipcRenderer;
    export default {
        components: {
            Avatar
        },
        data(){
            return{
                isOpen: false,
                isMenuOpen: false
            }
        },
    }
</script>