const express = require('express')
const answerController = require('../controllers/subanswer.controller')
const router = express.Router()

router.get('/all',(req, res)=> answerController.getAllanswer(res))
router.get('/answer/:id',(req, res)=> answerController.getanswerById(req, res))
router.post('/create', (req, res) => answerController.addanswer(req, res))
router.post('/category', (req, res) => answerController.getanswerBycategory(req, res))
router.patch('/update/:id',(req, res) => answerController.updateanswerById(req, res))
router.delete('/delete/:id', (req,res) => answerController.deleteanswerById(req, res))


module.exports = router
