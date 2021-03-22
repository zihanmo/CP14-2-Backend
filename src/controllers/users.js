
const User =require('../models/user')
const {generateToken}=require('../utils/jwt')

async function addUser(req,res){
    const {username,password}=req.body;
    const user =new User({
        username,
        password
    });
    await user.hashPassword();
    await user.save();
    const token=generateToken(user._id);
    return res.json({username,token});
}


module.exports={
    addUser,
}