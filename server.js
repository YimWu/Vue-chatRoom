var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var allSocket = {}
var person = {
    '聊天室': {
        avatar: 'qunliao',
        name: '聊天室'
    }
}
app.get('/', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*')
    // res.sendFile(__dirname + '/index.tml')
    console.log('访问网站')
})
io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chatMessage', (msg) => {
        console.log('message: ' + msg.msg)
        if(msg.receiver === '聊天室'){
            io.emit('msg', msg)
        }else{
            allSocket[msg.receiver].emit('msg', msg)
        }
    })
    // socket.on('come', (cnt) => {
    //     console.log('online: ' + cnt)
    //     person.push(cnt)
    //     allSocket[cnt.name] = socket
    //     console.log(allSocket)
    //     io.emit('online', person)
    // })
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
        console.log(allSocket)
        io.emit('loginStatus', 1)
    })

    socket.on('getUserlist', () => {
        io.emit('userlist', person)
    })
})

http.listen('9999', () => {
    console.log('Listening on: 9999')
})
