"use strict";
const Imap = require('imap');
let myMail ={num:-1,list:{}};

//取出消息
function processing_message(message, imap,fun) {
    message.on('message',function(msg, seqno) {
        const prefix = '[#' + seqno + ']';
        msg.on('body',function(stream, info) {
            //正文内容的处理
            let buffer = "";
            console.log(info.which);
            stream.on('data',function(chunk) {
                buffer += chunk.toString('utf8');
            });
            stream.once('end',function() {
                if (info.which !== 'TEXT') {
                    const received = Imap.parseHeader(buffer);
                    //将消息题目和消息主题存储在myMail中
                    myMail.list[received.from[0]]=received.subject[0];
                } else {
                    console.log(info.which);
                    return null;
                }
            });
        });
        msg.once('end',function() {
            console.log('加载完毕');
        });
    });

    message.once('error',function(err) {
        console.log('关闭邮件发生错误: ');
    });

    message.once('end',function() {
        fun(myMail);
        console.log('所有邮件读取完毕!');
        imap.end();
    });
}


export function getmail(user, password, host,fun) {
    console.log("开始收取邮件");
    const imap = new Imap({user: "100284685",password: "zhoqwqzgrkhmcbcc",host: "imap.qq.com",port: 993,tls: true});
    //const imap = new Imap({user: user,password: password,host: host,port: 993,tls: true});
    function openInbox(cb) {
        //第二个参数表示邮件的打开方式是否为只读
        imap.openBox('INBOX', true, cb);
    }
    //等待触发ready
    imap.once('ready',function() {
        openInbox(function(err) {
            if (err) {
                console.log(err);
            } else {
                //搜寻复合要求的邮件
                imap.search(["UNSEEN"],
                function(err, results) {
                    if (err) {console.log(err);} 
                    else {
                        myMail.num=results.length;
                        //如果没有未读邮件返回null
                        if(results.length===0){
                            //回掉函数
                            fun(myMail);
                            return null;
                        }
                        const message = imap.fetch(results, {bodies: '',markSeen: false});
                        processing_message(message, imap,fun); //对得到的数据处理
                    }
                });
            }
        });
    });

    imap.once('error',function(err) {
        console.log(err);
    });
    imap.once('end',function() {
        console.log("收取完毕");
    });
    imap.connect();
}
