const mongoose=require('mongoose');


exports.connectToDB=()=>{
    const {DB_DATABASE, DB_HOST,DB_PORT}=process.env;
    const connectionString=`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
    return mongoose.connect(connectionString);

}