const express = require('express')
const leaveController = require('../controllers/leave.controller')
const router = express.Router()

router.get('/all',(req, res)=> leaveController.getAllleave(res))
router.get('/leave/:id',(req, res)=> leaveController.getleaveById(req, res))
router.post('/create', (req, res) => leaveController.addleave(req, res))
router.post('/query',(req,res)=> leaveController.getallleavebyquery(req,res))
router.patch('/update/:id',(req, res) => leaveController.updateleaveById(req,res))
router.delete('/delete/:id', (req,res) => leaveController.deleteleaveById(req, res))

module.exports = router
