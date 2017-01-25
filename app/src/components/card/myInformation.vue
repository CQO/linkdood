<style lang="postcss">
.main-window{
    .user-menu-box{
        height: 403px;
        width: 222px;
        position: absolute;
        top: 25px;
        left: 25px;
        background-color: rgba(255, 255, 255, 0.9);
        .user-img{
            height: 180px;
            background-image: url("../../../img/userImg.jpg");
            background-position: 0 center;
            display: table-cell;
            vertical-align: bottom;
            width: 222px;
            .blinker{
                height: 50px;
                background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7));
                p{
                    line-height: 50px;
                    color: white;
                    font-size: 20px;
                    font-weight: 400;
                }
            }
        }
        .user-information{
            height: auto;
            .information{
                margin-top: 10px;
                overflow-y: auto;
                height: 196px;
                .item{
                    height: 35px;
                    line-height: 35px;
                    text-align: left;
                    p{
                        float: left;
                        width: 55px;
                        line-height: 35px;
                        color: #a8a8a8;
                        font-weight: 500;
                        font-size: 14px;
                        margin-left: 10px;
                    }
                    input{
                        height: 30px;
                        width: 125px;
                        clear: both;
                        border: none;
                        padding-left: 5px;
                        font-size: 13px;
                        position: relative;
                        bottom: 2px;
                    }
                }
            }
        }
    }
}
</style>
<template lang="pug">
    .user-menu-box
        .user-img
            .blinker
                p.user-name 蒲鸽
        .user-information
            .information
                .item 
                    p.name 姓 名:
                    input(type="text",value='蒲鸽')
                .item 
                    p.number 豆豆号:
                    input(type="text",value='7750')
                .item 
                    p.id 豆豆ID:
                    input(type="text",value='123456789')
                .item 
                    p.sex 性 别:
                    input(type="text",value='男')
                .item 
                    p.phone 电 话:
                    input(type="text",value='18092852085')
                .item 
                    p.mail 邮 箱:
                    input(type="text",value='my@owo.help')
                .item 
                    p.department 部 门
                    input(type="text",value='')
                .item 
                    p.job 职 位
                    input(type="text",value='')
</template>
