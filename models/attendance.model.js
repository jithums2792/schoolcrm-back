const mongoose = require('mongoose')
const schema = mongoose.Schema;
const attendance = new schema({
    date: {type: String, required: true},
    time: {type: String, required: true},
    userId: {type: String, required: true},
    class: {type: String, required: true},
    section: {type: String, required: true},
    username: {type: String, required: true}
})
const attendancemodel = mongoose.model('attendances', attendance)
module.exports = attendancemodel