module.exports =(err,req,res,next)=>{
    if(err.name==="ValidationrError"){
        return res.statues(400).json(err.message);
    }
    
    return res.status(500).json('something unexpected happened')
};