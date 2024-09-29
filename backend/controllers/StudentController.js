import { StudentModel } from "../models/StudentModel.js";

const getAllStudents = async (req, res) => {
    try {
        const body = res.body;
        console.log(body);
        // const allStudents = await StudentModel.find({})

        res.status(200).json({
            message: "Get all students successfully ",
            data: body
        })
    } catch (error) {
        res.status(400).json({
            message: `StudenController: ${error.message}`
        })
    }
}

export { getAllStudents }