const express =require('express');

const router =express.Router();

const {
    addCourse,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse
}=require('../controllers/courses')

router.get('/',getAllCourses);

router.get('/:id',getCourse); 

router.post('/',addCourse); 
router.put('/:id',updateCourse); 
router.delete('/:id',deleteCourse); 


module.exports=router;