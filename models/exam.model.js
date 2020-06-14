const mongoose = require('mongoose')
const schema = mongoose.Schema;
const exam = new schema({
   name: {type: String, required: true},
   class: {type: String, required: true},
   section: {type: String, required: true},
   subject: {type: String, required: true},
   teacher: {type: String, required: true},
   startdate: {type: String},
   enddate: {type: String},
   totalmarks: {type: Number, required: true},
   questionlist: {type: Array, required: true},
})
const exammodel = mongoose.model('exams', exam)
module.exports = exammodel