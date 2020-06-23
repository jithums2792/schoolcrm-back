const mongoose = require('mongoose')
const schema = mongoose.Schema;
const leave = new schema({
   room: {type: String, required: true},
   section: {type: String, required: true},
   name: {type: String, required: true},
   reason: {type: String, required: true},
   type: {type: String, required: true},
   durationstart: {type: String, required: true},
   durationend: {type: String, required: true},
   content: {type: String},
   status: {type: String, required: true}
})
const leavesmodel = mongoose.model('leaves', leave)
module.exports = leavesmodel