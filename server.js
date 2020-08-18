var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var person = [
    {
        avatar: 'qunliao',
        name: '聊天室'
    }
]
app.get('/', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*')
    // res.sendFile(__dirname + '/index.tml')
    console.log('访问网站')
})
io.on('connection', (socket) => {
    console.log(' user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chatMessage', (msg) => {
        console.log('message: ' + msg.msg)
        io.emit('msg', msg)
    })
    socket.on('come', (cnt) => {
        console.log('online: ' + cnt)
        person.push(cnt)
        io.emit('online', person)
    })
})

http.listen('9999', () => {
    console.log('Listening on: 9999')
})
