<style lang="postcss">
.application{
    .application-box{
        display: flex;
        flex-wrap: wrap;
        width: 30rem;
        .color-box{
            width: 33%;
            height: 6rem;
            background: #efefef;
            line-height: 6rem;
            text-align: center;
            color: #fff;
            transition: transform .3s;
        }
        .Aquamarine{
            background-color: Aquamarine
        }
        .Hotpink{
            background-color: Hotpink
        }
        .Gold{
            background-color: Gold
        }
        .Crimson{
            background-color: Crimson
        }
        .Blueviolet{
            background-color: Blueviolet
        }
        .Lightblue{
            background-color: Lightblue
        }
    }
}
.color-list{
    width: 48rem;
    height: 70%;
    margin: 10% auto;
    border: 1px solid #d0edfe;
    .color-item{
        background-color: yellow;
        height: 10rem;
        width: 16rem;
        float: left;
    }
    .Aquamarine{
        background-image: url("img/card1.png");
        width: 240px;
        height: 400px;
    }
    .Hotpink{
        background-image: url("img/card2.png");
        width: 520px;
        height: 220px;
    }
    .Gold{
        background-image: url("img/card3.png");
        width: 320px;
        height: 155px;
    }
    .Crimson{
        width: 155px;
        height: 155px;
    }
}
</style>
<template lang="pug">
    .color-list
        .color-item(v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }",:key="color.text",v-bind:class="color.text")
</template>
<script>
    import fun from './module/fun'
    export default {
        data () {
            return {
                colors: [{
                    text: "Aquamarine"
                }, {
                    text: "Hotpink"
                }, {
                    text: "Gold"
                }, {
                    text: "Crimson"
                }]
            }
        }
    }
</script>