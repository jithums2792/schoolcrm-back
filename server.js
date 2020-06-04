const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const teacherRouter = require('./routers/teacher.router')
const studentRouter = require('./routers/student.router')


let clients = [];
app.use('/', express.static('views'))


app.use('/api/teacher', teacherRouter)
app.use('/api/student', studentRouter)

let students= [];
var studentid = null;

var session = require("express-session")({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true
});
var sharedsession = require("express-socket.io-session");

// Use express-session middleware for express
app.use(session);

// Use shared session middleware for socket.io
// setting autoSave:true
io.use(sharedsession(session));


io.on('connection', function (socket) {

    var usertype = socket.request._query['usertype'];
    studentid = socket.request._query['studentid'];


    socket.join('English')
    socket.emit('connection', 'connected to channel English')

    if (usertype == 'student') {
        students.push(socket.id)
        console.log(students)
        socket.to('English').emit('newestudentjoined',studentid,socket.id);
    } else {
        console.log("usertype is teacher")
    }

    socket.on('onicecandidateteacher', (data) => {
        socket.to('English').emit('onicecandidateteacher', data)
    })

    socket.on('onicecandidatestudent', (data) => {
        socket.to('English').emit('onicecandidatestudent', data)
    })

    socket.on('newoffer', (data) => {
        socket.to('English').emit('newoffer', data)
    })

    socket.on('answer', (data) => {
        socket.to('English').emit('answer', data)
    })

   socket.on('disconnect', () => {
       socket.leave('English')
       const place = students.indexOf(socket.id)
       students.splice(place, 1)
       socket.to('English').emit('studentLeave', socket.id)
   })

})
http.listen(3000, () => console.log('server is running'))