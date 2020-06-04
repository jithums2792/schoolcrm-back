const mongoose = require('mongoose')
const schema = mongoose.Schema;
const teacher = new schema({
    name: {type: String, required: true},
    userId: {type: String, required: true},
    password: {type: String, required: true},
    assignedClass: {type: Array, required: true},
    assignedSubject: {type: Array, required: true}
})
const teacherModel = mongoose.model('teachers', teacher)
module.exports = teacherModel