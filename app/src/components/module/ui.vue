<script>
export default {
    //                          让一个元素左右抖动     
    //－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
    // [参数]           target         oncomplete    distance     time
    // [含义]           目标元素           回调         抖动范围    持续时间   
    // [重要性]           必填             必填          可选        可选
    // [默认值]            无              无            5          500
    // [类型 or 单位]  字符串 or DOM       函数           数值        毫秒
    //－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
    shakeDOM:function(target,oncomplete,distance,time) {
        if(typeof target === "string") target =document.getElementById(target);
        const originalStyle = target.style.cssText;
        const start = (new Date()).getTime();
        function animate() {
            const now = (new Date()).getTime();
            const elapsed = now - start;
            const fraction = elapsed/time;
            if(fraction < 1){
                const x =distance * Math.sin(fraction*4*Math.PI);
                target.style.left = x +"px";
                setTimeout(animate,Math.min(25,time-elapsed));
            }
            else {
                target.style.cssText = originalStyle;
                if (oncomplete) oncomplete();
            }
        }
        if(!time) time = 500;
        if(!distance) distance = 5;
        target.style.position = "relative";
        animate();
    }

};
</script>