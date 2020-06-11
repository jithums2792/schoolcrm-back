const studentrModel = require('../models/student.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllStudent(res) {studentrModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getStudentById(req,res) {studentrModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function getStudentsListByclass(req,res) {studentrModel.find({class: req.params.name, section: req.params.section}).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function updateStudentById(req,res) { studentrModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deleteStudentById(req,res) {studentrModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function addStudent(req,res) {
    let newStudent = new studentrModel({
        admissionnumber: req.body.admissionnumber,
        admissiondate: req.body.admissiondate,
        name: req.body.name,
        dob: req.body.dob,
        class: req.body.class,
        section: req.body.section,
        gender: req.body.gender,
        category: req.body.category,
        relegion: req.body.relegion,
        cast: req.body.cast,
        phone: req.body.phone,
        emergencynumber: req.body.emergencynumber,
        presentaddress:req.body.presentaddress,
        permanentaddress: req.body.permanentaddress,
        email: req.body.email,
        adhaar: req.body.adhaar,
        bloodgroup: req.body.bloodgroup,
        fathername: req.body.fathername,
        mothername: req.body.mothername,
        guardianname: req.body.guardianname,
        fathersoccupation: req.body.fathersoccupation,
        mothersoccupation: req.body.mothersoccupation,
        guardiansoccupation: req.body.guardiansoccupation,
        fathersmail: req.body.fathersmail,
        mothersmail: req.body.mothersmail,
        guardiansmail: req.body.guardiansmail,
        guardiancontact: req.body.guardiancontact,
        mothercontact: req.body.mothercontact,
        fathercontact: req.body.fathercontact,
        parentaddress: req.body.parentaddress,
        guardianaddress: req.body.guardianaddress,
        previousinstitution: req.body.previousinstitution,
        busboardingpoint: req.body.busboardingpoint,
        username: req.body.username,
        password: req.body.password,
        photo: req.body.photo,
        content: req.body.content
    })
    newStudent.save().then(data => dataHandler(res, data).catch(err => errorHandler(res, err)))
}
function studentLogin(req, res) {studentrModel.find({username: req.body.username, password: req.body.password}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}

exports.getAllStudent = getAllStudent
exports.getStudentById = getStudentById
exports.studentLogin = studentLogin
exports.getStudentsListByclass = getStudentsListByclass
exports.updateStudentById = updateStudentById
exports.deleteStudentById = deleteStudentById
exports.addStudent = addStudent