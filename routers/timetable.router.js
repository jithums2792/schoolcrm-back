const express = require('express')
const timetableController = require('../controllers/timetable.controller')
const router = express.Router()

router.get('/all',(req, res)=> timetableController.getAlltimetable(res))
router.post('/query',(req,res)=> timetableController.getTimetableByQuery(req,res))
router.get('/timetable/:id',(req, res)=> timetableController.gettimetableById(req, res))
router.post('/create', (req, res) => timetableController.addtimetable(req, res))
router.patch('/update/:id',(req, res) => timetableController.updatetimetableById(req,res))
router.delete('/delete/:id', (req,res) => timetableController.deletetimetableById(req, res))

module.exports = router
