const express = require('express')
const teacherController = require('../controllers/teacher.controller')
const router = express.Router()

router.get('/all',(req, res)=> teacherController.getAllTeacher(res))
router.get('/teacher/:id',(req, res)=> teacherController.getTeacherById(req, res))
router.post('/create', (req, res) => teacherController.addTeacher(req, res))
router.patch('/update/:id',(req, res) => teacherController.updateTeacherById(req, res))
router.delete('/delete/:id', (req,res) => teacherController.deleteTeacherById(req, res))

module.exports = router
