
const Student =require('../models/student');
const Course =require('../models/course');

async function addStudent(req,res){
    const {firstName, lastName, email}=req.body;
    const student =new Student({
        firstName, lastName, email
    });
    await student.save();
   

return res.json(student);

}

async function getStudent(req,res){
    const{id}=req.params;
    const student=await Student.findById(id).populate
    ("courses",'name');
    if(!student){
        return res.sendStatus(404);
    }
    return res.json(student);

    
} 

async function getAllStudents(req,res){
  
    const students=await Student.find();
    return res.json(students);
    
}

async function updateStudent(req,res){
    const{id}=req.params;
    const {firstName, lastName,email}=req.body;
    const newStudent=await Student.findByIdAndUpdate(
        id,{firstName,lastName,email},
        {new:true}
    );
    if(!newStudent){
        return res.sendStatus(404);
    }
    return res.json(newStudent);
    
}


async function deleteStudent(req,res){
    const {id}=req.params;
    const deletedStudent= await Srudent.findByIdAndDelete(id);
    if(!deletedStudent){
        return res.sendStatus(404);
    }
    await Course.updateMany(
        {
            _id: {$in : student.courses}
        },
        {
            $pull:{students:student._id}
        }
    );
    return res.sendStatus(200);

}

async function addCourse(req,res){
    const{id,code}=req.params;
    const course= await Course.findById(code);
    const student =await Student.findById(id);
    if(!course||!student){
        return res.status(404).json('student or course not found');
    }
   
    student.courses.addToSet(course._id);
    course.students.addToSet(student._id);

    await student.save();
    await course.save();
    return res.json(student);

}
async function deleteCourse(req,res){
    const{id,code}=req.params;
    const course= await Course.findById(code);
    const student =await Student.findById(id);
    if(!course||!student){
        return res.status(404).json('student or course not found');
    }
    const oldCount=student.courses.length;
    student.courses.pull(course._id);
    course.students.pull(student._id);
    if(student.courses.length===oldCount){
        return res.status(404).json('Enrolment not exist');
    }
    await student.save();
    return res.json(student);

}
module.exports={
    addStudent,
    getAllStudents,
    getStudent,
    updateStudent,
    deleteStudent,
    addCourse,deleteCourse
}