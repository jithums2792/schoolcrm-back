const express = require('express')
const Controller = require('../controllers/attendance.controller')
const router = express.Router()

router.get('/all',(req, res)=> Controller.getAllmodel(res))
router.get('/:id',(req, res)=> Controller.getmodelById(req, res))
router.post('/create', (req, res) => Controller.addmodel(req, res))
router.post('/query', (req, res) => Controller.getmodelBycategory(req, res))
router.patch('/update/:id',(req, res) => Controller.updatemodelById(req, res))
router.delete('/delete/:id', (req,res) => Controller.deletemodelById(req, res))


module.exports = router
