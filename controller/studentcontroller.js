const Student = require('../models/Student')
const cloudinary = require('cloudinary').v2
let result;
async function addStudent(req, res) {
    try {
        console.log(req.body, 'req.body');
        console.log(req.file, 'req.file');
        if (req.file) {
            cloudinary.config({
                cloud_name: 'dufvmaweq',
                api_key: '515135587521761',
                api_secret: 'hlXM3UayaeIK5SYHFnPZpZIV1wA',
            });
            result = await cloudinary.uploader.upload(req.file.path);
            console.log(result);
        }
        let student = new Student(req.body);
        if (req.file) {
            student.studentImage = result.secure_url;
        }

        await student.save();
        console.log("database updated.......")
        let students = await Student.find({})
        res.render('studentList', {
            students: students
        });
        console.log("Student data saved successfully...")
    } catch (err) {
        console.log(err)
    }
}

async function listStudents(req, res) {
    try {
        let students = await Student.find({})
        res.render('studentList', {
            students: students
        });

    } catch (err) {
        console.log(err)
    }
}

async function deleteStudent(req, res) {
    try {
        let studentid = req.params._id;
        console.log(studentid, "deleted student")
        await Student.deleteOne({ _id: studentid })
        let students = await Student.find({})
        res.render('welcomeAdmin', {
            students: students
        })
    } catch (err) {
        console.log(err)
    }
}

async function editStudentpage(req, res) {
    try {
        let studentid = req.params._id;
        let student = await Student.findOne({ _id: studentid })
        res.render('editStudent', {
            student: student
        })
    } catch (err) {
        console.log(err)
    }
}
async function saveEditedStudent(req, res) {
    try {
        let studentId = req.params._id
        console.log(studentId, 'studentId');
        let student = await Student.findOne({ _id: studentId })
        student.rollNo = req.body.rollNo;
        student.name = req.body.name;
        student.fatherName = req.body.fatherName;
        student.motherName = req.body.motherName;
        student.course = req.body.course;
        student.branch = req.body.branch;
        student.yearOfAdm = req.body.yearOfAdm;
        await student.save();
        console.log("student Updated Successfully......")
        let students = await Student.find({})
        res.render('welcomeAdmin', {
            students: students
        });

    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addStudent,
    listStudents,
    deleteStudent,
    editStudentpage,
    saveEditedStudent,
}