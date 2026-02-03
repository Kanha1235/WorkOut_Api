import { Router } from "express";
import { getWorkouts ,getWorkout,createWorkout, deleteWorkout,editWorkout} from "../controllers/workout.controller.js";

const workoutRouter = Router();

// get all data
workoutRouter.get("/",getWorkouts)

// get single data
workoutRouter.get("/:id",getWorkout)

// create data
workoutRouter.post("/",createWorkout)
// update data
workoutRouter.patch("/:id",editWorkout)
// delete workout
workoutRouter.delete("/:id",deleteWorkout)


export default workoutRouter;