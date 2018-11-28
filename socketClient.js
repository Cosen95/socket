var net = require('net');
var hostname = '127.0.0.1';
var port = 9000;

var client = new net.Socket();
client.setEncoding('utf-8');

// 与服务端建立连接
client.connect(port,hostname,function() {
    client.write('你好啊');
})

client.on('data',function(data) {
    // console.log(data);
    say()

})

// 逐行读取
const readline = require('readline');
// 建立通信标准
var r1 = readline.createInterface({
    input:process.stdin, //input标准
    output:process.stdout //out 标准
})

function say(){
    r1.question('请输入：',function(inputStr) {
        if(inputStr === 'bye') {
            client.destroy()
            console.log('客户端的socket退出')
        } else {
            client.write(inputStr + '\n')
        }
    })
}