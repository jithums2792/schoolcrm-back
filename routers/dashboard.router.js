const express = require('express')
const dashboardcontroller = require('../controllers/dashboard.controller')
const router = express.Router()

router.get('/statuscard',(req, res)=> dashboardcontroller.getStatuscardData(req,res))
router.get('/chat/:id',(req, res)=> chatController.getchatById(req, res))
router.post('/create', (req, res) => chatController.addchat(req, res))
router.post('/query', (req, res) => chatController.getchatBycategory(req, res))
router.patch('/update/:id',(req, res) => chatController.updatechatById(req, res))
router.delete('/delete/:id', (req,res) => chatController.deletechatById(req, res))


module.exports = router
