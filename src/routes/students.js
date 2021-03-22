const express =require('express');

const router =express.Router();

const {
    addStudent,
    getAllStudents,
    getStudent,
    updateStudent,
    deleteStudent,
    addCourse,
    deleteCourse
}=require('../controllers/students')

router.get('/',getAllStudents);

router.get('/:id',getStudent); 

router.post('/',addStudent); 
router.put('/:id',updateStudent); 
router.delete('/:id',deleteStudent); 
router.post("/:id/courses/:code",addCourse);
router.delete("/:id/courses/:code",deleteCourse);

module.exports=router;