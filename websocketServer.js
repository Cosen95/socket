var WebsocketServer = require('ws').Server;

var wss = new WebsocketServer({
    port: 3000
})

var clientMap = new Object;
var i = 0;
wss.on('connection',function(client) {
    console.log('亲，服务端发送过来一条信息');
    client.on('message',function(data) {
        client.name = i++;
        clientMap[client.name] = client;
        broadcast(data,client)
    })
})

function broadcast(data,client) {
    for (key in clientMap) {
        clientMap[key].send(client.name+'说：'+data)
    }
}