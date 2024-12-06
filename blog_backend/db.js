const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL,{
    dbName:process.env.DB_NAME
}).then(
    ()=>{
        console.log('Connected to database');
    }
).catch(err=>{
    console.error('Error connecting to database',err);
});