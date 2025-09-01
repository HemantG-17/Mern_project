const express = require('express');
const multer = require('multer')
const studentController = require('../controller/studentcontroller');
const router = express.Router();

const upload = multer({
    storage: multer.diskStorage({}),
    limits: {fileSize: 10*1024*1024},
})

router.post('/add/student', upload.single('studentImage'),(req, res) => {
    studentController.addStudent(req, res);
});
router.get('/list/students', (req, res) => {
    studentController.listStudents(req, res);
})
router.get('/delete/student/:_id', (req, res) => {
    studentController.deleteStudent(req, res);
})
router.get('/edit/student/page/:_id', (req, res) => {
    studentController.editStudentpage(req, res);
})
router.post('/update/student/:_id', (req, res) => {
    studentController.saveEditedStudent(req, res);
})


module.exports = router;
