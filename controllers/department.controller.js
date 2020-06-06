const departmentrModel = require('../models/department.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAlldepartment(res) {departmentrModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getdepartmentById(req,res) {departmentrModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updatedepartmentById(req,res) { departmentrModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deletedepartmentById(req,res) {departmentrModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function adddepartment(req,res) {
    let newdepartment = new departmentrModel({
        name: req.body.name,
    })
    newdepartment.save().then(data => dataHandler(res, data).catch(err => errorHandler(res, err)))
}

exports.getAlldepartment = getAlldepartment
exports.getdepartmentById = getdepartmentById
exports.updatedepartmentById = updatedepartmentById
exports.deletedepartmentById = deletedepartmentById
exports.adddepartment = adddepartment