const teacherModel = require('../models/teacher.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllTeacher(res) {teacherModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getTeacherById(req,res) {teacherModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updateTeacherById(req,res) { teacherModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deleteTeacherById(req,res) {teacherModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function addTeacher(req,res) {
    let newTeacher = new teacherModel({
        name: req.body.name,
        userId: req.body.userid,
        password: req.body.password,
        assignedClass: req.body.assignedClass,
        assignedSubject: req.body.assignedSubject
    })
    newTeacher.save().then(data => dataHandler(res, data).catch(err => errorHandler(res, err)))
}

exports.getAllTeacher = getAllTeacher
exports.getTeacherById = getTeacherById
exports.updateTeacherById = updateTeacherById
exports.deleteTeacherById = deleteTeacherById
exports.addTeacher = addTeacher