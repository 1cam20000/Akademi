import ClassModel from "../models/ClassModel.js";
import SubjectModel from "../models/SubjectModel.js";
import { handleValidationError } from "../middlewares/errorHandler.js";
import TimeTableModel from "../models/TimeTableModel.js";

const getAllTimeTables = async (req, res) => {
    try {
        const allTimeTables = await TimeTableModel.find({})

        res.status(200).json({
            message: "Get all timetables successfully ",
            data: allTimeTables
        })
    } catch (error) {
        res.status(400).json({
            message: `Get all Timetables controller error: ${error.message}`
        })
    }
}

const getTimeTableByClassID = async (req, res) => {


    try {
        const timeTableByClassID = await TimeTableModel.find({
            class_id: class_id

        })

        res.status(200).json({
            message: `Get timetable of class successfully`,
            data: timeTableByClassID
        })
    } catch (error) {
        res.status(400).json({
            message: `Get all Timetables controller error: ${error.message}`
        })
    }
}

const addTimeTable = async (req, res) => {

    const { grade, day, time, name } = req.body

    try {

        const existingElement = await TimeTableModel.findOne({})
        console.log(existingElement);
        
        if (!grade || !day || !time || !name) {
            throw new Error("Missing anything");
        }


        const existingClass = await ClassModel.findOne({ grade })

        if (!existingClass) {
            throw new Error("Class not in valid");
        }

        const existingSubject = await SubjectModel.findOne({ name })

        if (!existingSubject) {
            throw new Error("Subject not in valid");
        }


     



        const newTimetable = new TimeTableModel(req.body);
        await newTimetable.save();
        res.status(201).json({
            message: "Add new timetable successfully!",
            data: {
                _id: newTimetable._id,

            },
        })

    } catch (error) {
        res.status(400).json({
            message: `Add subject controller error: ${error.message}`,
        });
    }
}

const deleteTimeTable = async (req, res) => {

    // const { id } = req.params

    try {
        const timetable = await TimeTableModel.find({ class_id: class_id })


        if (timetable) {
            await timetable.destroy();
            res.status(201).json({
                message: "Delete timetable successfully"
            })
        }

        else {
            res.status(401).json({
                message: "Delete timetable failed"
            })
        }

    } catch (error) {
        res.status(400).json({
            message: `Delete subject controller error: ${error.message}`,
        });
    }
}


const updateTimeTable = async (req, res) => {
    const { class_id, day, time, subject } = req.body

    try {
        const classExists = await ClassModel.findOne({ class_id })

        if (!classExists) {
            handleValidationError("Class not found!", 400);
        }

        if (classExists) {
            await classExists.update({
                class_id,
                day,
                time,
                subject
            })

            res.status(200).json({
                success: true,
                message: "Timetable updated successfully!",
            });
        }


    } catch (error) {
        res.status(400).json({
            message: `Update timetable controller error: ${error.message}`,
        });
    }
}

export { getAllTimeTables, getTimeTableByClassID, addTimeTable, deleteTimeTable, updateTimeTable }