const mongoose = require('mongoose')
const schema = mongoose.Schema;
const Class = new schema({
   name: {type: String, required: true},
   section: {type: Array, required: true}
})
const ClassModel = mongoose.model('class', Class)
module.exports = ClassModel