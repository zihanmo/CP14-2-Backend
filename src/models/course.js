const mongoose =require('mongoose');

const schema = new mongoose.Schema({
    _id:{
        type:String,
        uppercase:true,
        alias:"code"
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:"this is a description"
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Student'
        }

    ],




    __v:{ 
        type:Number,
        select:false 

    }
    
},

{
    timestamps:true,
    toJSON:{
        virtuals:true
    },
    id:false
}

);

// schema.virtual('code').get(function(){
//     return this._id;

// });

const model=mongoose.model('Course',schema);

module.exports=model;