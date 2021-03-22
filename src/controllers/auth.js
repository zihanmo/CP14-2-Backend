const User=require('../models/user');

const {generateToken} =require('../utils/jwt');

async function loginUser(req,res){
    const {username,password}=req.body;
    const existingUser=await User.findOne({username}).exec();
    if(!existingUser){
        return res.status(401).json('invalid username or password');

    }
    if(await !existingUser.validatePassword(password)){
        return res.status(401).json('invalid username or password');

    }
    const token= generateToken(existingUser._id);
    return res.json({username,token});
}

module.exports={
    loginUser
};