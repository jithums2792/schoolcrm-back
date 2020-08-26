const model = require('../models/attendance.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllmodel(res) {model.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getmodelById(req,res) {model.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updatemodelById(req,res) { model.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deletemodelById(req,res) {model.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function getmodelBycategory(req,res) {model.find(req.body.query).limit(req.body.limit).skip(req.body.skip).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function addmodel(req,res) {new model(req.body).save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}


exports.getAllmodel = getAllmodel
exports.getmodelById = getmodelById
exports.updatemodelById = updatemodelById
exports.deletemodelById = deletemodelById
exports.addmodel = addmodel
exports.getmodelBycategory = getmodelBycategory