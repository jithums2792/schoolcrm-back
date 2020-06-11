const mongoose = require('mongoose')
const schema = mongoose.Schema;
const student = new schema({
    admissionnumber: {type:String},
    admissiondate: {type:String},
    name: {type:String},
    dob: {type:Date},
    class: {type:String},
    section: {type:String},
    gender: {type:String},
    category: {type:String},
    relegion: {type:String},
    cast: {type:String},
    phone: {type:Number},
    emergencynumber: {type:Number},
    presentaddress: {type:String},
    permanentaddress: {type:String},
    email: {type:String},
    adhaar: {type:Number},
    bloodgroup: {type:String},
    fathername: {type:String},
    mothername: {type:String},
    guardianname: {type:String},
    fathersoccupation: {type:String},
    mothersoccupation: {type:String},
    guardiansoccupation: {type:String},
    fathersmail: {type:String},
    mothersmail: {type:String},
    guardiansmail: {type:String},
    guardiancontact: {type:Number},
    mothercontact: {type:Number},
    fathercontact: {type:Number},
    parentaddress: {type:String},
    guardianaddress: {type:String},
    previousinstitution: {type:String},
    busboardingpoint: {type:String},
    username: {type:String},
    password: {type:String},
    photo: {type: String},
    content: {type: Array}
})
const studentModel = mongoose.model('students', student)
module.exports = studentModel