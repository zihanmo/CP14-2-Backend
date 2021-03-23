require("dotenv").config();

const express=require("express");
require("express-async-errors");
const routes=require('./routes');
const {connectToDB}=require('./utils/db');
var cors = require('cors');
const errorHandler=require('./middleware/errorHandler');
const app = express();
app.use(cors({origin: 'http://localhost:19012'}));
app.use(express.json());
app.use('/api',routes);
app.use(errorHandler);

connectToDB().then(()=>{}).catch(e=>{
    console.error(e);
    process.exit(1)
});

app.listen(3032,()=>{
    console.log("listening");
});