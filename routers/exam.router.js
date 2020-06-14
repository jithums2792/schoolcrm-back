const express = require('express')
const examController = require('../controllers/exam.controller')
const router = express.Router()

router.get('/all',(req, res)=> examController.getAllexam(res))
router.get('/exam/:id',(req, res)=> examController.getexamById(req, res))
router.post('/create', (req, res) => examController.addexam(req, res))
router.post('/category', (req, res) => examController.getExamBycategory(req, res))
router.patch('/update/:id',(req, res) => examController.updateexamById(req, res))
router.delete('/delete/:id', (req,res) => examController.deleteexamById(req, res))

module.exports = router
