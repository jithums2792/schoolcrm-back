const studentrModel = require('../models/student.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllStudent(res) {studentrModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getStudentById(req,res) {studentrModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updateStudentById(req,res) { studentrModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deleteStudentById(req,res) {studentrModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function addStudent(req,res) {
    let newStudent = new studentrModel({
        name: req.body.name,
        userId: req.body.userid,
        password: req.body.password,
        class: req.body.assignedClass,
        division: req.body.division,
        subject: req.body.assignedSubject
    })
    newStudent.save().then(data => dataHandler(res, data).catch(err => errorHandler(res, err)))
}

exports.getAllStudent = getAllStudent
exports.getStudentById = getStudentById
exports.updateStudentById = updateStudentById
exports.deleteStudentById = deleteStudentById
exports.addStudent = addStudent