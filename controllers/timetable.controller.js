const timetableModel = require('../models/timetable.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}
function getAlltimetable(res) {timetableModel.find().then(data => dataHandler(res, data)).catch(err => errorHandler(res,err))}
function gettimetableById(req,res) {timetableModel.findById(req.params.id).then(data => dataHandler(res, data)).catch(err => errorHandler(res, err))}
function updatetimetableById(req,res) { timetableModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => dataHandler(res, data)).catch(err => console.log(err))}
function deletetimetableById(req,res) {timetableModel.findByIdAndDelete(req.params.id).then(data => dataHandler(res,data)).catch(err => errorHandler(res, err))}
function addtimetable(req,res) {
    let newtimetable = new timetableModel({
        name: req.body.room,
        section: req.body.section,
        timetable: req.body.timetable
    })
    newtimetable.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}

exports.getAlltimetable = getAlltimetable
exports.gettimetableById = gettimetableById
exports.updatetimetableById = updatetimetableById
exports.deletetimetableById = deletetimetableById
exports.addtimetable = addtimetable