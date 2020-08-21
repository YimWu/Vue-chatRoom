var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var path = require('path')
var allSocket = {}
var person = {
    '聊天室': {
        avatar: 'qunliao',
        name: '聊天室'
    }
}

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.sendFile(__dirname + '/index.html')
    var deviceAgent = req.headers["user-agent"].toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if(agentID){
        console.log("手机访问");
    }else{
        console.log("电脑访问");
    }
})
app.use(express.static(path.join(__dirname, '/')));
io.on('connection', (socket) => {
    console.log('---------- start ----------')
    socket.on('disconnect', () => {
        console.log('---------- end ----------')
    })
    socket.on('chatMessage', (msg) => {
        if(msg.receiver === '聊天室'){
            io.emit('msg', msg)
        }else{
            allSocket[msg.receiver].emit('msg', msg)
        }
        console.log(`"${msg.sender}"对"${msg.receiver}"说: ${msg.msg}`)
    })
    socket.on('login', user => {
        var name = user.name
        for(var i in person){
            if(i === name){
                io.emit('loginStatus', 0)
                return
            } 
        }
        person[name] = user
        allSocket[user.name] = socket
        io.emit('loginStatus', 1)
        console.log(`${user.name}上线了！`)
    })

    socket.on('getUserlist', () => {
        io.emit('userlist', person)
    })
})

http.listen('9999', () => {
    console.log('Listening on: 9999')
})
