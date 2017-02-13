const Imap = require('imap');

const imap = new Imap({
  user: "100284685",
  password: "zhoqwqzgrkhmcbcc",
  host: "imap.qq.com",
  port: 993,
  tls: true
});


//接收邮件处理进程receive mail
function receive() {
    let Send = "";
    //整理邮件内容
    function finishing_content(stream, info, prefix) {
        let buffer = "";
        console.log(info.which)
        stream.on('data', function (chunk) {
            buffer += chunk.toString('utf8');
        });
        stream.once('end', function () {
            if (info.which !== 'TEXT') { 
                const received = Imap.parseHeader(buffer);
                console.log("--------------------");
                console.log(received.from[0]);
                console.log(received.subject[0]);
                console.log("--------------------");
            }
            else console.log(info.which);
        });
    }

    //取出消息
    function processing_message(message, imap) {
        message.on('message', function (msg, seqno) {
            const prefix = '[#' + seqno + ']';
            msg.on('body', function (stream, info) {
                //正文内容的处理
                finishing_content(stream, info, prefix);
            });
            msg.once('end', function () {
                Send += prefix + '加载完毕';
            });
        });

        message.once('error', function (err) {
            Send += '关闭邮件发生错误: ' + err;
        });

        message.once('end', function () {
            Send += '所有邮件读取完毕!';
            imap.end();
        });
    }

    function openInbox(cb) {
        //第二个参数表示邮件的打开方式是否为只读
        imap.openBox('INBOX', true, cb);
    }
    //等待触发ready
    imap.once('ready', function () {
        openInbox(function (err) {
            if (err) console.log(err);
            else{
                //搜寻复合要求的邮件
                imap.search(["UNSEEN"], function (err, results) {
                    if (err) console.log(err);
                    else{
                        Send += '找到邮件数: ' + results.length;
                        try {
                            const message = imap.fetch(results, { bodies: '', markSeen: false });
                            processing_message(message, imap);//对得到的数据处理
                        }
                        catch (e) {
                            Send = '没有收取到邮件';
                            console.log(Send);
                        }
                    }
                });
            }
        });
    });

    imap.once('error', function (err) { console.log(err); });
    imap.once('end', function () { console.log("收取完毕"); });
    imap.connect();
}


receive();