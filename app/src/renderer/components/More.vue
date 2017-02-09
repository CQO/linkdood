<style lang="postcss">
.application{
    .application-box{
        height: 80%;
        margin: 7% auto;
        display: flex;
        flex-wrap: wrap;
        width: 42rem;
        .box{
            width: 220px;
            height: 50%;
            float: left;
            border: 1px solid beige;
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
</style>
<template lang="pug">
    .application
        kkk.application-box
            template(v-for="color in colors")
                box.box(v-dragging="{ item: color, list: colors, group: 'color' }",v-bind:class="color.text") {{color.text}}
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
                }, {
                    text: "Blueviolet"
                }, {
                    text: "Lightblue"
                }]
            }
        }
    }
</script>