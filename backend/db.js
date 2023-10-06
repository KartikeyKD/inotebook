const mongoose = require('mongoose')
const mongoURI= "mongodb://localhost:27017/iNotebook?directConnection=true&readPreference=primary"

const connectToMongo=async ()=>{
   await mongoose.connect(mongoURI);
   console.log("Mongo Connected");
};

module.exports = connectToMongo;