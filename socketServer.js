var net = require('net');
var clientServer = net.createServer();

// 接收客户端的连接
clientServer.on('connection',function(client) {
    console.log('亲 客户端发送过来一条信息')
})


clientServer.listen(9000);