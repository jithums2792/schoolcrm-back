const express = require('express')
const fileController = require('../controllers/file.controller')
const router = express.Router()

router.get('/all',(req, res)=> fileController.getAllfile(res))
router.get('/file/:id',(req, res)=> fileController.getfileById(req, res))
router.get('/room/:room/:section',(req,res)=> fileController.getFileByClass(req,res))
router.post('/create', (req, res) => fileController.addfile(req, res))
router.patch('/update/:id',(req, res) => fileController.updatefileById(req, res))
router.delete('/delete/:id', (req,res) => fileController.deletefileById(req, res))

module.exports = router
