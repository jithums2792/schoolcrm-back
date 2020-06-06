const express = require('express')
const departmentController = require('../controllers/department.controller')
const router = express.Router()

router.get('/all',(req, res)=> departmentController.getAlldepartment(res))
router.get('/department/:id',(req, res)=> departmentController.getdepartmentById(req, res))
router.post('/create', (req, res) => departmentController.adddepartment(req, res))
router.patch('/update/:id',(req, res) => departmentController.updatedepartmentById(req, res))
router.delete('/delete/:id', (req,res) => departmentController.deletedepartmentById(req, res))

module.exports = router
