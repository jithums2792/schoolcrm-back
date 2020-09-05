const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
require('./db/db')
require('dotenv').config()


const teacherRouter = require('./routers/teacher.router')
const studentRouter = require('./routers/student.router')
const departmentRouter = require('./routers/department.router')
const designationRouter = require('./routers/designation.router')
const ClassRouter = require('./routers/class.router')
const fileRouter = require('./routers/file.router')
const examRouter = require('./routers/exam.router')
const subexamRouter = require('./routers/subsexam.router')
const timetableRouter = require('./routers/timetable.router')
const answerrouter = require('./routers/answer.route')
const subanswerrouter = require('./routers/subanswer.router')
const leaveRouter = require('./routers/leave.router')
const chatRouter = require('./routers/chat.router')
const noticeboardRouter = require('./routers/noticeboard.router')
const dashboardRouter = require('./routers/dashboard.router')
const mediaroter = require('./routers/media.roter')
const attendanceRouter = require('./routers/attendance.router')


let clients = [];
app.use('/', express.static('views'))
app.use(cors())
app.use(express.json({limit: '100mb'}))
app.use("/uploads", express.static("uploads"));


app.use('/api/teacher', teacherRouter)
app.use('/api/student', studentRouter)
app.use('/api/department', departmentRouter)
app.use('/api/designation', designationRouter)
app.use('/api/class', ClassRouter)
app.use('/api/file', fileRouter)
app.use('/api/exam', examRouter)
app.use('/api/subexam', subexamRouter)
app.use('/api/timetable', timetableRouter)
app.use('/api/answer', answerrouter)
app.use('/api/subanswer', subanswerrouter)
app.use('/api/leave', leaveRouter)
app.use('/api/chat', chatRouter)
app.use('/api/noticeboard', noticeboardRouter)
app.use('/api/dashboard', dashboardRouter)
app.use('/api/media', mediaroter)
app.use('/api/attendance', attendanceRouter)

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

let connectDb = []


io.on('connection', function (socket) {

    socket.on('chat', data => {
        socket.join(data.room).emit('chat', 'joined in room')
    })
    socket.on('msg', data => {
        socket.to(data.room).emit('msg', 'msg received')
    })


    socket.emit('connection', 'connected')

    

    socket.on('join',(data) => {
        socket.join(data.room)
        if (data.usertype == 'teacher') {
            connectDb.push({Uid: socket.id, password: data.password, room: data.room, meetingID: data.meetingID})
            socket.to(data.room).emit('live', {status:true, data: {Uid: socket.id, password: data.password, room: data.room, meetingID: data.meetingID}})
        } else {
            let details = null
            let session = connectDb.some(item => item.room === data.room)
            if(session) {
                details = connectDb.find(item => item.room === data.room)   
            }
            
            socket.emit('joined', {status:session,data: details})
        }
    })

   socket.on('disconnect', () => {
      if(connectDb.some(item => item.Uid === socket.id)) {
          const i = connectDb.indexOf(item => item.Uid === socket.id)
          connectDb.splice(i, 1)
      } else {
          return
      }
   })

})


http.listen(3000, () => console.log('server is running'))