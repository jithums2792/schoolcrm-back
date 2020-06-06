const designationModel = require('../models/designation.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAlldesignation(res) {designationModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getdesignationById(req,res) {designationModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updatedesignationById(req,res) { designationModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function deletedesignationById(req,res) {designationModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function adddesignation(req,res) {
    let newdesignation = new designationModel({
        name: req.body.name,
    })
    newdesignation.save().then(data => dataHandler(res, data).catch(err => errorHandler(res, err)))
}

exports.getAlldesignation = getAlldesignation
exports.getdesignationById = getdesignationById
exports.updatedesignationById = updatedesignationById
exports.deletedesignationById = deletedesignationById
exports.adddesignation = adddesignation