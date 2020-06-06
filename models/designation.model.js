const mongoose = require('mongoose')
const schema = mongoose.Schema;
const designation = new schema({
    name: {type: String, required: true},
})
const designationModel = mongoose.model('designations', designation)
module.exports = designationModel