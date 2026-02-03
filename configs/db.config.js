import mongoose from "mongoose";
import envObj from "./env.config.js";

const connectToDatabase = async ()=>{
    try{
        await mongoose.connect( envObj.mongoUri,{
            dbName:"Project"
        })
        console.log("DB connection successfull")
    }catch(err){
        console.log("DB connection failed");
        console.log(err)
        process.exit(1);
    }
}

export default connectToDatabase;