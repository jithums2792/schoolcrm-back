const mongoose = require('mongoose')
const schema = mongoose.Schema;
const answe = new schema({
    name: {type: String, required: true},
    room: {type: String, required: true},
    section: {type: String, required: true},
    examname: {type: String, required: true},
    subject: {type: String, required: true},
    teacher: {type: String, required: true},
    mark: {type: String},
    correct: {type: Number},
    wrong: {type: Number},
    answersheet: {type: Array}
})
const answermodel = mongoose.model('answers', answe)
module.exports = answermodel