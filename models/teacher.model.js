const mongoose = require('mongoose')
const schema = mongoose.Schema;
const teacher = new schema({
    userId: {type: String, required: true},
    password: {type: String, required: true},
    assignedClass: {type: Array},
    assignedSubject: {type: Array},
    staffid: {type: String, required: true},
    designation: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    department: {type: String, required: true},
    fathername: {type: String},
    mothername: {type: String},
    email: {type: String, required: true},
    gender: {type: String, required: true},
    dob: {type: Date, required: true},
    doj: {type: Date, required: true},
    phone: {type: Number, required: true},
    phone2: {type: Number},
    maritialstatus: {type: String},
    photo: {type: String},
    currentaddress: {type: String},
    permanentaddress: {type: String},
    qualification: {type: String},
    workexperience: {type: String},
    note: {type: String},
    casualleave: {type: Number},
    sickleave: {type: Number},
    maternityleave: {type: Number},

})
const teacherModel = mongoose.model('teachers', teacher)
module.exports = teacherModel