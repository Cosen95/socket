var net = require('net');
var clientServer = net.createServer();
var clientMap = new Object;

// 加一个标识
var i = 0;

// 接收客户端的连接
clientServer.on('connection',function(client) {
    console.log('亲 客户端发送过来一条信息');
    client.name = i++;
    clientMap[client.name] = client;
    client.on("data",function(data) {
        console.log(`客户端传来${data}`)
        client.write('服务端发送再见')
        broadcast(data,client)
    })
})

function broadcast(data,client){
    for (key in clientMap) {
        clientMap[key].write(client.name+"说："+data)
    }
}


clientServer.listen(9000);