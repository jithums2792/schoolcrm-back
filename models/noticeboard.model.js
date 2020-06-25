const mongoose = require('mongoose')
const schema = mongoose.Schema;
const notice = new schema({
    title: {type: String, required: true},
    note: {type: String, required: true},
    type: {type: String, required: true},
    room: {type: String, required: true},
    section: {type: String, required: true},
    date: {type: Date, required: true}
})
const noticeboardmodel = mongoose.model('noticeboard', notice)
module.exports = noticeboardmodel