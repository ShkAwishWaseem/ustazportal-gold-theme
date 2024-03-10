import mongoose from "mongoose";

async function dbConnection (){
     return await mongoose.connect("mongodb+srv://awishwaseem7:bZKZlZ7dSdifLcai@cluster0.05gdfsr.mongodb.net/?retryWrites=true&w=majority")
}
// In your db/config.js or a separate file


export default dbConnection