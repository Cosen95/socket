var net = require('net');
var hostname = '127.0.0.1';
var port = 9000;

var client = new net.Socket();
client.setEncoding('utf-8');

// 与服务端建立连接
client.connect(port,hostname,function() {
    client.write('你好啊');
})