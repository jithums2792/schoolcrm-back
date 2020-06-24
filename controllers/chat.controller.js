const chatModel = require('../models/chat.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllchat(res) {chatModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getchatById(req,res) {chatModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updatechatById(req,res) { chatModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deletechatById(req,res) {chatModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function getchatBycategory(req,res) {chatModel.find(req.body).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function addchat(req,res) {
    let newchat = new chatModel({
        from: req.body.from,
        to: req.body.to,
        msg: req.body.msg,
        date: new Date()
    })
    newchat.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}


exports.getAllchat = getAllchat
exports.getchatById = getchatById
exports.updatechatById = updatechatById
exports.deletechatById = deletechatById
exports.addchat = addchat
exports.getchatBycategory = getchatBycategory