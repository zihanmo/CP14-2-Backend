const express =require('express');

const router =express.Router();

const studentRoute=require('./routes/students.js');

const courseRoute=require('./routes/courses.js');
const userRoute=require('./routes/users.js');
const anthRoute=require('./routes/auth.js');
const authGuard=require('./middleware/authGuard');
router.use('/students',authGuard,studentRoute);
router.use('/courses',authGuard,courseRoute);
router.use('/users',userRoute);
router.use('/auth',anthRoute);
module.exports=router;