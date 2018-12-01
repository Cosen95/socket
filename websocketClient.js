var ws = new WebSocket('ws://127.0.0.1:3000');

// 初始化
ws.onopen = function(){
    ws.send('你好哇')
}

ws.onmessage = function(event) {
    var chatRoom = document.getElementById('chatRoom');
    chatRoom.innerHTML += '<br />' + event.data;
}