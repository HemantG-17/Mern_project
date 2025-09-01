const mongoose = require('mongoose')
const timeStamps = require('mongoose-timestamps')
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    rollNo:{type:Number,required:true},
    name: { type: String, required: true },
    fatherName: { type: String, required: true},
    course: { type: String, required: true },
    branch: { type: String },
    yearOfAdm: { type: String, required: true },
    studentImage:{type:String},
    createdAt: Date,
    updatedAt: Date
})
studentSchema.plugin(timeStamps, { index: true })
module.exports = mongoose.model('Student', studentSchema)

