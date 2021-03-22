const mongoose =require('mongoose');
const Joi =require('@hapi/joi');

const bcrypt=require('bcrypt');

const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

schema.methods.hashPassword= async function(){
    this.password= await bcrypt.hash(this.password,10);
}

schema.methods.validatePassword=async function(){
    const validatePassword =await bcrypt.compare(password,this.password);
    return validatePassword;
};

const model=mongoose.model('User',schema);

module.exports=model;