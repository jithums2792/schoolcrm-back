const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
require('./db/db')
const teacherRouter = require('./routers/teacher.router')
const studentRouter = require('./routers/student.router')
const departmentRouter = require('./routers/department.router')
const designationRouter = require('./routers/designation.router')
const ClassRouter = require('./routers/class.router')
const fileRouter = require('./routers/file.router')
const examRouter = require('./routers/exam.router')
const timetableRouter = require('./routers/timetable.router')
const answerrouter = require('./routers/answer.route')
const leaveRouter = require('./routers/leave.router')
const chatRouter = require('./routers/chat.router')
const noticeboardRouter = require('./routers/noticeboard.router')


let clients = [];
app.use('/', express.static('views'))
app.use(cors())
app.use(express.json({limit: '100mb'}))


app.use('/api/teacher', teacherRouter)
app.use('/api/student', studentRouter)
app.use('/api/department', departmentRouter)
app.use('/api/designation', designationRouter)
app.use('/api/class', ClassRouter)
app.use('/api/file', fileRouter)
app.use('/api/exam', examRouter)
app.use('/api/timetable', timetableRouter)
app.use('/api/answer', answerrouter)
app.use('/api/leave', leaveRouter)
app.use('/api/chat', chatRouter)
app.use('/api/noticeboard', noticeboardRouter)

let staffs= [];
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


    // socket.join('English')
    socket.emit('connection', 'connected')
    socket.on('join',(room) => {
        console.log(room)
        socket.join(room)
        socket.emit('join', room)
        if (usertype == 'student') {
            staffs.push({Uid: socket.id, room: room})
            console.log(staffs)
            socket.to(room).emit('newestudentjoined',studentid,socket.id);
        } else {
            console.log("usertype is teacher")
            staffs.push({Uid: socket.id, room: room})
            console.log(staffs)
        }
    })
    

    socket.on('onicecandidateteacher', (data) => {
        socket.to(data.room).emit('onicecandidateteacher', data)
    })

    socket.on('onicecandidatestudent', (data) => {
        console.log('student room', data.room)
        socket.to(data.room).emit('onicecandidatestudent', data)
    })

    socket.on('newoffer', (data) => {
        console.log(data.room)
        socket.to(data.room).emit('newoffer', data)
    })

    socket.on('answer', (data) => {
        socket.to(data.room).emit('answer', data)
    })

   socket.on('disconnect', () => {
      try {
        const place = staffs.find(event => event.Uid === socket.id)
        console.log(place);
        socket.to(place.room).emit('studentLeave', socket.id)
      } catch (error) {
         console.log(socket.id) 
      }
   })

})
http.listen(3000, () => console.log('server is running'))