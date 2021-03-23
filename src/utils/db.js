const mongoose=require('mongoose');


exports.connectToDB=()=>{
    const connectionString=`mongodb+srv://CP142DB:KwJkcNE9h3kkx4pE@cluster0.snhy6.mongodb.net/CP12DB?retryWrites=true&w=majority`
    return mongoose.connect(connectionString);
}