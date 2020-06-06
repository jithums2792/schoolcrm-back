const express = require('express')
const studentController = require('../controllers/student.controller')
const router = express.Router()

router.get('/all',(req, res)=> studentController.getAllStudent(res))
router.get('/student/:id',(req, res)=> studentController.getStudentById(req, res))
router.get('/class/:name/:section', (req, res) => studentController.getStudentsListByclass(req, res))
router.post('/login',(req, res) => studentController.studentLogin(req, res))
router.post('/create', (req, res) => studentController.addStudent(req, res))
router.patch('/update/:id',(req, res) => studentController.updateStudentById(req, res))
router.delete('/delete/:id', (req,res) => studentController.deleteStudentById(req, res))

module.exports = router
