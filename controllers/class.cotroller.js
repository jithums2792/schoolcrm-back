const ClassModel = require('../models/class.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAllClass(res) {ClassModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function getClassById(req,res) {ClassModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updateClassById(req,res) { ClassModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => console.log(err))}
function deleteClassById(req,res) {ClassModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function addClass(req,res) {
    console.log(req.body)
    let newClass = new ClassModel({
        name: req.body.name,
        section: req.body.section,
        timetable: {key: 'value'}
    })
    console.log(newClass)
    newClass.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}

exports.getAllClass = getAllClass
exports.getClassById = getClassById
exports.updateClassById = updateClassById
exports.deleteClassById = deleteClassById
exports.addClass = addClass