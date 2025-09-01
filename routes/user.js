const express = require('express');
const userController = require('../controller/userController')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
})
router.get('/user/signup', (req, res) => {
    res.render('signup');
})
router.post('/add/user', (req, res) => {
    userController.addUser(req, res)
})
router.post('/login',(req,res)=>{
    userController.doLogin(req,res);
})

router.get('/addstudent',(req,res)=>{
    res.render('addStudent');
})

router.post('/add-student',(req,res)=>{
    userController.addStudent(req,res);
})
    

module.exports = router;
