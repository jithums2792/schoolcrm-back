const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
let clients = [];
app.use('/', express.static('views'))

let offer;

io.on('connection', function (socket) {
    socket.join('English')
    socket.emit('connection', 'connected to channel English')

    socket.on('message', (data) => {
        socket.to('English').emit('message', data)
    })
   
})
http.listen(3000, () => console.log('server is running'))