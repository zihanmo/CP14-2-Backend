
const Course =require('../models/course')
const Student =require('../models/student');
async function addCourse(req,res){
    const {name,code,description}=req.body;
    const course =new Course({
        name,code,description
    });
    await course.save();
    return res.json(course);
}

async function getCourse(req,res){
    const{id:code}=req.params;
    const course =await Course.findById(code);
    if(!course){
        return res.status(404).send();
    }
    return res.json(course);
    
} 

async function getAllCourses(req,res){
    const courses= await Course.find();
    return res.json(courses);
}

async function updateCourse(req,res){
    const{id:code}=req.params;
    const {name, description}=req.body;
    const course =await Course.findByIdAndUpdate(code,{
        name,description

    },{new:true});
    if(!course){
        return res.status(404).send();
    }
    return res.json(course);
    
}
async function deleteCourse(req,res){
    const {id:code}=req.params;
    const course=await Course.findByIdAndDelete(code);
    if(!course){
        return res.status(404).send();
    }
    await Student.updateMany(
{
    course: course._id
},
{
    $pull:{
        courses:course._id
    }
}
    );
    return res.json(course);
}

module.exports={
    addCourse,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse
}