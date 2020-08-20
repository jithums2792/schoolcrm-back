const fileModel = require('../models/media.model')
const fs = require('fs')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllfile(res) {fileModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getAllfilebyQuery(req,res) {fileModel.find(req.body.query).limit(req.body.limit).skip(req.body.skip).then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getfileById(req,res) {fileModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function getFileByClass(req,res) {fileModel.find({room: req.params.room, section: req.params.section}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updatefileById(req,res) { fileModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deletefileById(req,res) {fileModel.findByIdAndDelete(req.params.id).then(data => {
    fs.unlink(data.path,(err) => {
        console.log(err)
    })
    dataHandler(res,data)
}).catch(err => errorHandler(res, err))}
function addfile(req,res) {
    let data = JSON.parse(req.body.data)
    Object.assign(data, {media: `https://wmhmcclass.com/api/${req.file.path}`, path: req.file.path})
    let newfile = new fileModel(data)
    newfile.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}

exports.getAllfile = getAllfile
exports.getfileById = getfileById
exports.updatefileById = updatefileById
exports.deletefileById = deletefileById
exports.addfile = addfile
exports.getFileByClass = getFileByClass
exports.getAllfilebyQuery = getAllfilebyQuery