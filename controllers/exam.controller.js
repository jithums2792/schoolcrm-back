const examModel = require('../models/exam.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllexam(res) {examModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getexamById(req,res) {examModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updateexamById(req,res) { examModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deleteexamById(req,res) {examModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function getExamBycategory(req,res) {examModel.find(req.body).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function addexam(req,res) {
    let newexam = new examModel({
        name: req.body.name,
        class: req.body.room,
        section: req.body.section,
        subject: req.body.subject,
        teacher: req.body.teacher,
        startdate: req.body.starttime,
        enddate: req.body.endtime,
        totalmarks: req.body.totalmark,
        questionlist: req.body.questionlist,
        active: req.body.active
    })
    newexam.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}


exports.getAllexam = getAllexam
exports.getexamById = getexamById
exports.updateexamById = updateexamById
exports.deleteexamById = deleteexamById
exports.addexam = addexam
exports.getExamBycategory = getExamBycategory