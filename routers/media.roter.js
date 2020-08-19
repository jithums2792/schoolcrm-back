const express = require('express')
const fileController = require('../controllers/media.controller')
const multer = require('multer')
const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
})
const upload = multer({storage: storage})

router.get('/all',(req, res)=> fileController.getAllfile(res))
router.post('/query',(req, res)=> fileController.getAllfilebyQuery(req,res))
router.get('/file/:id',(req, res)=> fileController.getfileById(req, res))
router.get('/room/:room/:section',(req,res)=> fileController.getFileByClass(req,res))
router.post('/create',upload.single('media'), (req, res) => fileController.addfile(req, res))
router.patch('/update/:id',(req, res) => fileController.updatefileById(req, res))
router.delete('/delete/:id', (req,res) => fileController.deletefileById(req, res))

module.exports = router
