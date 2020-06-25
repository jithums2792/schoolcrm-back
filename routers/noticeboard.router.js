const express = require('express')
const noticeboardController = require('../controllers/noticeboard.controller')
const router = express.Router()

router.get('/all',(req, res)=> noticeboardController.getAllnoticeboard(res))
router.get('/noticeboard/:id',(req, res)=> noticeboardController.getnoticeboardById(req, res))
router.post('/create', (req, res) => noticeboardController.addnoticeboard(req, res))
router.post('/query', (req, res) => noticeboardController.getnoticeboardBycategory(req, res))
router.patch('/update/:id',(req, res) => noticeboardController.updatenoticeboardById(req, res))
router.delete('/delete/:id', (req,res) => noticeboardController.deletenoticeboardById(req, res))


module.exports = router
