const express = require('express')
const ClassController = require('../controllers/class.cotroller')
const router = express.Router()

router.get('/all',(req, res)=> ClassController.getAllClass(res))
router.get('/Class/:id',(req, res)=> ClassController.getClassById(req, res))
router.post('/create', (req, res) => ClassController.addClass(req, res))
router.patch('/update/:id',(req, res) => ClassController.updateClassById(req, res))
router.delete('/delete/:id', (req,res) => ClassController.deleteClassById(req, res))

module.exports = router
