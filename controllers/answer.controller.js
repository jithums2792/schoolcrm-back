const answerModel = require('../models/answer.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllanswer(res) {answerModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getanswerById(req,res) {answerModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updateanswerById(req,res) { answerModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deleteanswerById(req,res) {answerModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function getanswerBycategory(req,res) {answerModel.find(req.body).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function addanswer(req,res) {
    let newanswer = new answerModel({
        name: req.body.name,
        room: req.body.room,
        section: req.body.section,
        examname: req.body.examname,
        subject: req.body.subject,
        teacher: req.body.teacher,
        mark: req.body.mark,
        correct: req.body.correct,
        wrong: req.body.wrong,
        answersheet: req.body.answersheet
    })
    newanswer.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}


exports.getAllanswer = getAllanswer
exports.getanswerById = getanswerById
exports.updateanswerById = updateanswerById
exports.deleteanswerById = deleteanswerById
exports.addanswer = addanswer
exports.getanswerBycategory = getanswerBycategory