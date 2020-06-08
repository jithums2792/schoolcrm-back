const fileModel = require('../models/fileupload.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllfile(res) {fileModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getfileById(req,res) {fileModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function getFileByClass(req,res) {fileModel.find({room: req.params.room, section: req.params.section}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updatefileById(req,res) { fileModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deletefileById(req,res) {fileModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function addfile(req,res) {
    let newfile = new fileModel({
        name: req.body.name,
        room: req.body.room,
        section: req.body.section,
        subject: req.body.subject,
        teacher: req.body.teacher,
        note: req.body.note,
        content: req.body.content,
        type: req.body.type
    })
    newfile.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}

exports.getAllfile = getAllfile
exports.getfileById = getfileById
exports.updatefileById = updatefileById
exports.deletefileById = deletefileById
exports.addfile = addfile
exports.getFileByClass = getFileByClass