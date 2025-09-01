
const mongoose = require('mongoose')
const timeStamps = require('mongoose-timestamps')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    usertype: { type: String, default: 'student' },
    createdAt: Date,
    updatedAt: Date
})
userSchema.plugin(timeStamps, { index: true })
module.exports = mongoose.model('User', userSchema)

