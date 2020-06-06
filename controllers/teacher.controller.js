const teacherModel = require('../models/teacher.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function facultyLogin(req, res) {teacherModel.find({userId: req.body.username, password: req.body.password}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function getAllTeacher(res) {teacherModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getTeacherById(req,res) {teacherModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updateTeacherById(req,res) { teacherModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deleteTeacherById(req,res) {teacherModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function addTeacher(req,res) {
    let newTeacher = new teacherModel({
        userId: req.body.username,
        password: req.body.password,
        assignedClass: req.body.assignedClass,
        assignedSubject: req.body.assignedSubject,
        staffid: req.body.id,
        designation: req.body.designation,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        department: req.body.Department,
        fathername: req.body.fathername,
        mothername: req.body.mothername,
        email: req.body.email,
        gender: req.body.gender,
        dob: req.body.dob,
        doj: req.body.doj,
        phone: req.body.phone,
        phone2: req.body.phone2,
        maritialstatus: req.body.maritialstatus,
        photo: req.body.photo,
        currentaddress: req.body.currentaddress,
        permanentaddress: req.body.permanentaddress,
        qualification: req.body.qualification,
        workexperience: req.body.workexperience,
        note: req.body.note,
        casualleave: req.body.casualleave,
        sickleave: req.body.sickleave,
        maternityleave: req.body.maternityleave,
    })
    newTeacher.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}
function getFacultyByDeignation(req,res) {teacherModel.find({designation: req.params.name}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}

exports.getAllTeacher = getAllTeacher
exports.getTeacherById = getTeacherById
exports.facultyLogin = facultyLogin
exports.updateTeacherById = updateTeacherById
exports.deleteTeacherById = deleteTeacherById
exports.addTeacher = addTeacher
exports.getFacultyByDeignation = getFacultyByDeignation