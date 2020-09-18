const ClassModel = require('../models/class.model')
const crypto = require('crypto')
require('dotenv').config()

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
        classteacher: req.body.classteacher,
        timetable: {key: 'value'}
    })
    console.log(newClass)
    newClass.save().then(data => dataHandler(res, data)).catch(err => errorHandler(res, err));
}

async function generatesig(req, res) {

     const timestamp = new Date().getTime() - 30000
  const msg = Buffer.from(process.env.API_KEY + req.body.meetingNumber + timestamp + req.body.role).toString('base64')
  const hash = crypto.createHmac('sha256', process.env.API_SECRET).update(msg).digest('base64')
  const signature = Buffer.from(`${process.env.API_KEY}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`).toString('base64')
  res.json({
    signature: signature
  })
  
    
}

exports.getAllClass = getAllClass
exports.getClassById = getClassById
exports.updateClassById = updateClassById
exports.deleteClassById = deleteClassById
exports.addClass = addClass
exports.generatesig = generatesig