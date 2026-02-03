import express from "express"
import cors from "cors"
import envObj from "./configs/env.config.js";
import connectToDatabase from "./configs/db.config.js";
import workoutRouter from "./routes/workout.route.js";

const app = express();

app.use(express.json());
app.use(cors());

// Health check route

app.get("/",(req,res)=>{
    res.send("Backend is working");
})

// Adding routers here

app.use("/api/workouts",workoutRouter);

// Making server up and running

async function connectDB() {
    try{
        await connectToDatabase();
        app.listen(envObj.port,()=>{
            console.log("Server is running")
        })
    }catch(err){
        console.log(err)
        console.log("Failed Database Connection");
    }
}

connectDB();