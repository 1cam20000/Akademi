import { TeacherModel } from "../models/TeacherModel.js"

const getAllTeachers = async (req, res) => {
    try {
        const allTeachers = await TeacherModel.find({})

        res.status(200).json({
            message: "Get all students successfully ",
            data: allTeachers
        })
    } catch (error) {
        res.status(400).json({
            message: `Get teacher controller error: ${error.message}`
        })
    }
}

const addTeachers = async (req, res) => {
    try {
        const newTeacher = new TeacherModel(req.body)
        await newTeacher.save();


        res.status(201).json({
            message: "Add new teacher successfully!",
            data: {
                _id: newTeacher._id,

            }
        })

    } catch (error) {
        res.status(400).json({
            message: `Add teacher controller error: ${error.message}`,
        });
    }
}


const updateTeachers = async (req, res) => {
    try {
        await TeacherModel.findOneAndUpdate(
            {
                _id: req.body.teacherId
            },
            req.body.payload
        )
        res.status(201).json({
            message: "Update teacher's information successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: `Update teacher controller error: ${error.message}`,
        });
    }
}


const deleteTeachers = async (req, res) => {
    try {
        await TeacherModel.findOneAndDelete({
            _id: req.body.teacherId,
        })

        res.status(201).json({
            message: "Delete teacher's information successfully"

        })
    } catch (error) {
        res.status(400).json({
            message: `Delete teacher controller error: ${error.message}`,
        });
    }
}

export { getAllTeachers, addTeachers, updateTeachers, deleteTeachers }