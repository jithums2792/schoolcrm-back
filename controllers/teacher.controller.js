const teacherModel = require('../models/teacher.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function facultyLogin(req, res) {teacherModel.find({userId: req.body.username, password: req.body.password}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function getAllTeacher(res) {teacherModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getTeacherById(req,res) {teacherModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updateTeacherById(req,res) { teacherModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deleteTeacherById(req,res) {teacherModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function addTeacher(req,res) {new teacherModel(req.body).save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function getFacultyByDeignation(req,res) {teacherModel.find({designation: req.params.name}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}

exports.getAllTeacher = getAllTeacher
exports.getTeacherById = getTeacherById
exports.facultyLogin = facultyLogin
exports.updateTeacherById = updateTeacherById
exports.deleteTeacherById = deleteTeacherById
exports.addTeacher = addTeacher
exports.getFacultyByDeignation = getFacultyByDeignation