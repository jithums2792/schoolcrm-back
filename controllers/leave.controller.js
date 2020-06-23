const leaveModel = require('../models/leave.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllleave(res) {leaveModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getleaveById(req,res) {leaveModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updateleaveById(req,res) { leaveModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => console.log(err))}
function deleteleaveById(req,res) {leaveModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function getallleavebyquery(req,res) {leaveModel.find(req.body).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function addleave(req,res) {
    let newleave = new leaveModel({
        room: req.body.room,
        section: req.body.section,
        name: req.body.name,
        reason: req.body.reason,
        type: req.body.type,
        durationstart: req.body.durationstart,
        durationend: req.body.durationend,
        content: req.body.content,
        status: req.body.status
    })
    newleave.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}

exports.getAllleave = getAllleave
exports.getleaveById = getleaveById
exports.updateleaveById = updateleaveById
exports.deleteleaveById = deleteleaveById
exports.addleave = addleave
exports.getallleavebyquery = getallleavebyquery