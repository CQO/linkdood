<script>
import data from './data';
export default {
     getSpell: function (str) {
        alert("sd");
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
    }
};
</script>