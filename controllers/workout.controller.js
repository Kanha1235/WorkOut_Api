import WorkoutModel from "../models/workout.model.js";


//  get all data

async function getWorkouts(req,res ) {
    try{
        const workoutData = await WorkoutModel.find().sort({createdAt:-1});
        res.status(200).json(workoutData);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

// get single data
async function getWorkout(req,res){
    try{
        const id = req.params.id;
        const workoutData = await WorkoutModel.findById({_id:id});
        res.status(200).json(workoutData)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

// create new workout
async function createWorkout(req,res){
    try{
         
        const newData = new WorkoutModel(req.body);
        console.log(newData);
        await newData.save();
        res.status(201).json(newData)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

//  update workout
async function editWorkout(req,res){
    try{
        const id = req.params.id;
        const workoutData = await WorkoutModel.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.status(200).json(workoutData)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

// delete workout
async function deleteWorkout(req,res){
    try{
        const id = req.params.id;
        const workoutData = await WorkoutModel.findByIdAndDelete({_id:id});
        res.status(200).json(workoutData)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

export  {getWorkouts,getWorkout,createWorkout,deleteWorkout,editWorkout};