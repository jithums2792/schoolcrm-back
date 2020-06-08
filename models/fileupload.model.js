const mongoose = require('mongoose')
const schema = mongoose.Schema;
const file = new schema({
   name: {type: String, required: true},
   room: {type: String, required: true},
   section: {type: String, required: true},
   subject: {type: String, required: true},
   teacher: {type: String, required: true},
   note: {type: String},
   content: {type: String, required: true},
   type: {type: String, required: true}
})
const fileModel = mongoose.model('files', file)
module.exports = fileModel