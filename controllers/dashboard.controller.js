const studentModel = require('../models/student.model')
const staffMosel = require('../models/teacher.model')
const classModel = require('../models/class.model')
const departmentModel = require('../models/department.model')

function dataHandler(res, data) {res.json({status: 'success', data: data})}
function errorHandler(res, data) {res.json({status: 'error', data: data})}

async function getStatuscardData(req,res) {
    
    try {
        cardData = {
            totalStudent: 0,
            totalStaff: 0,
            totalClass: 0,
            totalDepartments: 0,
        }
        await studentModel.find().then(data => cardData.totalStudent = data.length).catch(err => cardData.totalStudent = 0)
        await staffMosel.find().then(data => cardData.totalStaff = data.length).catch(err => cardData.totalStaff = 0)
        await classModel.find().then(data => cardData.totalClass = data.length).catch(err => this.cardData.totalClass = 0)
        await departmentModel.find().then(data => cardData.totalDepartments = data.length).catch(err => this.cardData.totalDepartments = 0) 
        dataHandler(res, cardData)
    } catch (error) {
      errorHandler(res, error)
    }
}

exports.getStatuscardData = getStatuscardData