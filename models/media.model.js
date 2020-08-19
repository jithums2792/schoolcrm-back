const mongoose = require('mongoose')
const schema = mongoose.Schema;
const media = new schema({
   class: {type: String, required: true},
   section: {type: String, required: true},
   subject: {type: String, required: true},
   title: {type: String, required: true},
   description: {type: String, required: true},
   image: {type: String, required: true},
   media: {type: String, required: true},
   path: {type: String, required: false},
})
const mediaModel = mongoose.model('medias', media)
module.exports = mediaModel