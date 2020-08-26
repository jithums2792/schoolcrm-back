const mongoose = require('mongoose')
const schema = mongoose.Schema;
const subanswer = new schema({
    name: {type: String, required: true},
    room: {type: String, required: true},
    section: {type: String, required: true},
    examname: {type: String, required: true},
    subject: {type: String, required: true},
    teacher: {type: String, required: true},
    mark: {type: String},
    answersheet: {type: Array}
})
const subanswermodel = mongoose.model('subanswers', subanswer)
module.exports = subanswermodel