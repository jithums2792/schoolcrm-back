const mongoose = require('mongoose')
const schema = mongoose.Schema;
const chat = new schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    msg: {type: String, required: true},
    date: {type: Date, required: true}
})
const chatmodel = mongoose.model('chats', chat)
module.exports = chatmodel