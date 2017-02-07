<style lang="postcss">
.screen-shot-button{
    width: 100px;
    height: 50px;
    background-color: blue;
    border-radius: 15px;
} 
    
</style>

<template lang="pug">
    .video
         video
         .screen-shot-button(v-on:click="screenShot")
</template>
<script>
    export default {
        methods:{
            screenShot:function(e){
                // 在渲染进程中.
                var desktopCapturer = require('electron').desktopCapturer;
                desktopCapturer.getSources({types: ['window', 'screen']}, function(error, sources) {
                    console.log(sources);
                    if (error) throw error;
                    for (var i = 0; i < sources.length; ++i) {
                        if (sources[i].name == "GitHub") {
                            navigator.webkitGetUserMedia({
                                audio: false,
                                video: {
                                    mandatory: {
                                        chromeMediaSource: 'desktop',
                                        chromeMediaSourceId: sources[i].id,
                                    }
                                }
                            }, gotStream, getUserMediaError);
                            return;
                        }
                    }
                });

                function gotStream(stream) {
                    document.querySelector('video').src = URL.createObjectURL(stream);
                }

                function getUserMediaError(e) {
                    console.log('getUserMediaError');
                }
            }
        }
    }
</script>