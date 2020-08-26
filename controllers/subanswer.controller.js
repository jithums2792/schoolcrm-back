const answerModel = require('../models/subanser.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllanswer(res) {answerModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getanswerById(req,res) {answerModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updateanswerById(req,res) { answerModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deleteanswerById(req,res) {answerModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function getanswerBycategory(req,res) {answerModel.find(req.body).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function addanswer(req,res) {
    let newanswer = new answerModel(req.body)
    newanswer.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}


exports.getAllanswer = getAllanswer
exports.getanswerById = getanswerById
exports.updateanswerById = updateanswerById
exports.deleteanswerById = deleteanswerById
exports.addanswer = addanswer
exports.getanswerBycategory = getanswerBycategory