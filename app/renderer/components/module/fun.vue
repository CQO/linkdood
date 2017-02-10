<script>
import data from './data';
export default {
    getSpell: function (str) {
        console.log(str);
        if(typeof(str) != "string") {console.error("传入参数不是一个字符串！"); return "Null"};
        let arrResult = new Array();
        for(let i=0,len=str.length;i<len;i++){
            const ch = str.charAt(i);
            const uni = ch.charCodeAt(0);
            let temp;
            if(uni > 40869 || uni < 19968){temp = ch;}
            else{
                temp=data.oMultiDiff[uni]?data.oMultiDiff[uni]:(data.strChineseFirstPY.charAt(uni-19968));
                arrResult.push(temp);
            }
        }
        let arrRslt = [""];
        for(let i=0,len=arrResult.length;i<len;i++){
            const str = arrResult[i];
            const strlen = str.length;
            if(strlen == 1){
                for(let k=0;k<arrRslt.length;k++){
                    arrRslt[k] += str;
                }
            }
            else{
                const tmpArr = arrRslt.slice(0);
                arrRslt = [];
                for(k=0;k<strlen;k++){
                    let tmp = tmpArr.slice(0);
                    for(let j=0;j<tmp.length;j++){
                        tmp[j] += str.charAt(k);
                    }
                    arrRslt = arrRslt.concat(tmp);
                }
            }
        }
        alert(""+arrRslt[0])
        alert(""+arrRslt[0].charAt(0))
    },
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