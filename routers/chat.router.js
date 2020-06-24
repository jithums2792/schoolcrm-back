const express = require('express')
const chatController = require('../controllers/chat.controller')
const router = express.Router()

router.get('/all',(req, res)=> chatController.getAllchat(res))
router.get('/chat/:id',(req, res)=> chatController.getchatById(req, res))
router.post('/create', (req, res) => chatController.addchat(req, res))
router.post('/query', (req, res) => chatController.getchatBycategory(req, res))
router.patch('/update/:id',(req, res) => chatController.updatechatById(req, res))
router.delete('/delete/:id', (req,res) => chatController.deletechatById(req, res))


module.exports = router
