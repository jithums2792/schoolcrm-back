const mongoose = require('mongoose')
const schema = mongoose.Schema;
const department = new schema({
    name: {type: String, required: true},
})
const departmentModel = mongoose.model('departments', department)
module.exports = departmentModel