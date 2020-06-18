const mongoose = require('mongoose')
const schema = mongoose.Schema;
const timetable = new schema({
   name: {type: String, required: true},
   section: {type: String, required: true},
   timetable: {type: Object}
})
const timetableModel = mongoose.model('timetables', timetable)
module.exports = timetableModel