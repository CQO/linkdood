<script>
export default {
    Ajax:{
        get: function (url,fn){
            var obj=new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据
            obj.open('GET',url,true);
            obj.onreadystatechange=function(){
                if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) { // readyState==4说明请求已完成
                    fn.call(this, obj.responseText);  //从服务器获得数据
                }
            };
            obj.send(null);
        },
        post: function (url, data, fn) {
            var obj = new XMLHttpRequest();
            obj.open("POST", url, true);
            obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // 发送信息至服务器时内容编码类型
            obj.onreadystatechange = function () {
                if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {  // 304未修改
                    fn.call(this, obj.responseText);
                }
            };
            obj.send(data);
        }
    },
    getDateDiff:function(nS){
        let result;
        const diffValue =  new Date().getTime() - nS;
        if(diffValue < 0){return;}
        const monthC =diffValue/2592000000;
        const weekC =diffValue/(7*86400000);
        const dayC =diffValue/86400000;
        const hourC =diffValue/3600000;
        const minC =diffValue/60000;
        if(monthC>=1){
            result="" + parseInt(monthC) + "月前";
        }
        else if(weekC>=1){
            result="" + parseInt(weekC) + "周前";
        }
        else if(dayC>=1){
            result=""+ parseInt(dayC) +"天前";
        }
        else if(hourC>=1){
            result=""+ parseInt(hourC) +"小时前";
        }
        else if(minC>=1){
            result=""+ parseInt(minC) +"分钟前";
        }
        else result="刚刚";
        return result;
    },
};
</script>
