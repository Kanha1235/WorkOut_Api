import dotenv from "dotenv"
import { Error } from "mongoose";

dotenv.config();

const port = process.env.PORT;
if(!port){
    throw new Error("PORT not defined");    
}

const mongoUri = process.env.MONGO_URI;
if(!mongoUri){
    throw new Error("MONGO_URI is undefined")
}
const envObj = Object.freeze({
    port,
    mongoUri
})

console.log(envObj)
export default envObj;