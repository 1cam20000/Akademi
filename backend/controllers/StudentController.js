import StudentModel from "../models/StudentModel.js";

const getAllStudents = async (req, res) => {
    try {
        // const body = res.body;
        // console.log(body);
        const allStudents = await StudentModel.find({})

        res.status(200).json({
            message: "Get all students successfully ",
            data: allStudents
        })

        console.log(allStudents);
    } catch (error) {
        res.status(400).json({
            message: `Get student controller error: ${error.message}`
        })
    }
}

const addStudents = async (req, res) => {
    try {
        const newStudent = new StudentModel(req.body);
        await newStudent.save();
        res.status(201).json({
            message: "Add new student successfully!",
            data: {
                _id: newStudent._id,

            },
        })
    } catch (error) {
        res.status(400).json({
            message: `Add student controller error: ${error.message}`,
        });
    }
}


const updateStudents = async (req, res) => {

    try {
        await StudentModel.findOneAndUpdate(
            { _id: req.body.studentId },
            req.body.payload
        );

        res.status(201).json({
            message: "Update student's information successfully"
        })

    } catch (error) {
        res.status(400).json({
            message: `Update student controller error: ${error.message}`,
        });
    }

}



const deleteStudents = async (req, res) => {
    try {
        await StudentModel.findOneAndDelete({
            _id: req.body.studentId,
        });

        // const result = await StudentModel.findByIdAndDelete(req.params.id)

        res.status(201).json({
            message: "Delete student's information successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: `Delete student controller error: ${error.message}`,
        });
    }
}

export { getAllStudents, addStudents, updateStudents, deleteStudents }