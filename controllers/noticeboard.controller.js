const noticeboardModel = require('../models/noticeboard.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllnoticeboard(res) {noticeboardModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getnoticeboardById(req,res) {noticeboardModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updatenoticeboardById(req,res) { noticeboardModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deletenoticeboardById(req,res) {noticeboardModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function getnoticeboardBycategory(req,res) {noticeboardModel.find(req.body).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function addnoticeboard(req,res) {
    let newnoticeboard = new noticeboardModel({
        title: req.body.title,
        note: req.body.note,
        type: req.body.type,
        room: req.body.room,
        section: req.body.section,
        date: new Date()
    })
    newnoticeboard.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}


exports.getAllnoticeboard = getAllnoticeboard
exports.getnoticeboardById = getnoticeboardById
exports.updatenoticeboardById = updatenoticeboardById
exports.deletenoticeboardById = deletenoticeboardById
exports.addnoticeboard = addnoticeboard
exports.getnoticeboardBycategory = getnoticeboardBycategory