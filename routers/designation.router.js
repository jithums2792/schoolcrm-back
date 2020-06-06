const express = require('express')
const designationController = require('../controllers/designation.cotroller')
const router = express.Router()

router.get('/all',(req, res)=> designationController.getAlldesignation(res))
router.get('/designation/:id',(req, res)=> designationController.getdesignationById(req, res))
router.post('/create', (req, res) => designationController.adddesignation(req, res))
router.patch('/update/:id',(req, res) => designationController.updatedesignationById(req, res))
router.delete('/delete/:id', (req,res) => designationController.deletedesignationById(req, res))

module.exports = router
