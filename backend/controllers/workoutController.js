const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

/* Get all workouts */
const getWorkouts = async (req, res) => {
    const workout = await Workout.find().sort({ createdAt: -1 })
    res.status(200).json(workout)
}
/* Get a single workout */
const getWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such workout"})
    }
    const workout = await Workout.findById(id).sort({ createdAt: -1 })
    if(!workout){
        return res.status(400).json({error: "No such workout"})
    }
    res.status(200).json(workout)
}
/* Create new workout */
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
/* Delete a workout */

/* Update a workout */


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout
}