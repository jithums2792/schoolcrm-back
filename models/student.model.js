const mongoose = require('mongoose')
const schema = mongoose.Schema;
const student = new schema({
    name: {type: String, required: true},
    userId: {type: String, required: true},
    password: {type: String, required: true},
    class: {type: String, required: true},
    division: {type: String, required: true},
    subject: {type: Array, required: true}
})
const studentModel = mongoose.model('students', student)
module.exports = studentModel